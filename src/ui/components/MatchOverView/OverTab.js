import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BALL_COLORS = {
  dot: '#D9D9D9',
  w: '#EB4E4E',
  4: '#475AFF',
  6: '#F95D27',
  default: '#D9D9D9',
};

const OverTab = ({ data }) => {
  if (!data) return null;

  const renderBall = ({ item }) => {
    const bgColor = BALL_COLORS[item.value] || BALL_COLORS.default;
    const displayText = item.value === 'dot' ? '•' : item.value.toString();

    return (
      <View style={[styles.ball, { backgroundColor: bgColor }]}>
        <Text style={styles.ballText}>{displayText}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ovs {data.team}</Text>

      <View style={styles.tagsRow}>
        {data.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subHeader}>{data.prevOver}</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.rr}>RR: {data.runRate}</Text>
          <Text style={styles.bowler}>
            Bowler: <Text style={{fontWeight:'300'}}>{data.bowler}</Text>
          </Text>
        </View>

        <Text style={styles.score}>
          {data.overStats} ({data.totalInfo})
        </Text>

        <FlatList
          data={data.balls}
          renderItem={renderBall}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.ballsContainer}
        />
      </View>
    </View>
  );
};

export default OverTab;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    backgroundColor:'#F5F5F5',
    padding:8,
    marginHorizontal: -16,
    paddingLeft:24
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderColor: '#D6D6D6',
    borderWidth: 0.5,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '400',
  },
  subHeader: {
    color: '#666',
    fontSize: 17,
    marginBottom: 10,
    paddingLeft: 24,
    // fontStyle: 'italic',
    opacity: 0.8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingLeft: 24,
    padding: 16,
    elevation: 30,
    marginHorizontal:-16,
    shadowColor: '#091C13',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rr: {
    fontSize: 14,
    color: '#333',
  },
  bowler: {
    fontSize: 14,
    fontWeight:'600',
    color: '#333',
  },
  score: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  ballsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  ball: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballText: {
    color: '#fff',
    fontWeight: '600',
  },
});
