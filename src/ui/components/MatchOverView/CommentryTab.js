import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useGetCommentry } from '../../../hooks/useGetCommentry';

// Helper to render <b>...</b> as bold in React Native
function renderCommentaryText(commentary) {
  // Replace <b>...</b> with bold Text
  const parts = commentary.split(/(<b>|<\/b>)/g);
  let bold = false;
  return parts.map((part, idx) => {
    if (part === '<b>') {
      bold = true;
      return null;
    }
    if (part === '</b>') {
      bold = false;
      return null;
    }
    if (part === '') return null;
    return (
      <Text key={idx} style={bold ? { fontWeight: 'bold', color: '#007bff' } : {}}>{part}</Text>
    );
  });
}

const CommentryTab = ({ matchId }) => {
  const { data, isLoading, error } = useGetCommentry(matchId);
  if (isLoading) {
    return (
      <View style={styles.centered}><ActivityIndicator size="large" color="#007bff" /></View>
    );
  }
  if (error) {
    return (
      <View style={styles.centered}><Text style={{ color: 'red' }}>Failed to load commentary.</Text></View>
    );
  }
  // Fix data path
  const commentaryData = data?.data?.commentary;
  const teams = data?.data?.teams;
  if (!commentaryData || !commentaryData.overs) {
    return (
      <View style={styles.centered}><Text>No commentary available.</Text></View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Commentary</Text>
      {/* Show teams */}
      {teams && (
        <View style={styles.teamsRow}>
          <Text style={styles.teamName}>{teams.a?.name}</Text>
          <Text style={styles.vs}>vs</Text>
          <Text style={styles.teamName}>{teams.b?.name}</Text>
        </View>
      )}
      {commentaryData.overs.map((over) => (
        <View key={over.over_key} style={styles.overCard}>
          <View style={styles.overHeader}>
            <Text style={styles.overNumber}>Over {over.over_number}</Text>
            <Text style={styles.overSummary}>
              Runs: {over.over_summary.total_runs} | Wickets: {over.over_summary.wickets} | Boundaries: {over.over_summary.boundaries} | Dots: {over.over_summary.dot_balls}
            </Text>
          </View>
          {over.balls.map((ball) => (
            <View key={ball.key} style={styles.ballRow}>
              <Text style={styles.ballNumber}>{ball.over_number}.{ball.ball_number}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.commentaryText}>{renderCommentaryText(ball.commentary)}</Text>
                <View style={styles.ballMetaRow}>
                  <Text style={styles.metaText}>Batsman: {ball.batsman?.name?.replace(/c__player__|w_/g, '').replace(/_/g, ' ')}</Text>
                  <Text style={styles.metaText}>Bowler: {ball.bowler?.name?.replace(/c__player__|w_/g, '').replace(/_/g, ' ')}</Text>
                  {ball.is_four && <Text style={styles.specialEvent}>4️⃣</Text>}
                  {ball.is_six && <Text style={styles.specialEvent}>6️⃣</Text>}
                  {ball.is_wicket && <Text style={styles.specialEvent}>WICKET!</Text>}
                </View>
                {/* Show extra info if present */}
                {ball.extras > 0 && <Text style={styles.extraInfo}>Extras: {ball.extras}</Text>}
                {ball.is_dot_ball && <Text style={styles.dotBall}>Dot ball</Text>}
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  )
}

export default CommentryTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 4,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  vs: {
    fontSize: 15,
    color: '#555',
    marginHorizontal: 8,
  },
  overCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  overHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  overNumber: {
    fontWeight: 'bold',
    color: '#007bff',
    fontSize: 16,
  },
  overSummary: {
    color: '#555',
    fontSize: 13,
  },
  ballRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  ballNumber: {
    width: 38,
    fontWeight: 'bold',
    color: '#888',
    fontSize: 15,
  },
  commentaryText: {
    fontSize: 15,
    color: '#222',
  },
  ballMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: '#666',
    marginRight: 10,
  },
  specialEvent: {
    fontSize: 13,
    color: '#d9534f',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  extraInfo: {
    fontSize: 12,
    color: '#ff9800',
    marginTop: 2,
  },
  dotBall: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    fontStyle: 'italic',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})