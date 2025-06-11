import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverSummaryCard = () => {
  // Example data (replace with props or context as needed)
  const over = 60;
  const runs = 7;
  const team = 'LIONS';
  const score = '390/7';
  const crr = 5.26;
  const batters = [
    { name: 'Patterson-White', runs: 4, balls: 8 },
    { name: 'Haines', runs: 27, balls: 42, fours: 3 },
  ];
  const bowlers = [
    { name: 'Embuldeniya', overs: 28, maidens: 0, runs: 140, wickets: 3 },
    { name: 'Manasinghe', overs: 15, maidens: 0, runs: 80, wickets: 2 },
  ];

  return (
    <View style={styles.cardShadowWrap}>
      <View style={styles.card}>
      <View style={{ justifyContent:'space-between',display:'flex',flexDirection:'row' }}>

        <Text style={styles.overTitle}>END OF OVER {over}</Text>
        <Text style={styles.teamScore}>{team}: {score}</Text>
</View>
        <View style={styles.rowBetween}>
          <Text style={styles.runs}>{runs} runs</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.crr}>CRR: {crr}</Text>
          </View>
        </View>
      </View> 
      <View style={styles.subCardsRow}>
        {/* Batters */}
        <View style={styles.subCard}>
          {batters.map((b, i) => (
            <Text style={styles.subCardText} key={i}>
              {b.name} <Text style={styles.bold}>{b.runs} ({b.balls}b{b.fours !== undefined ? ` ${b.fours}x4` : ''})</Text>
            </Text>
          ))}
        </View>
        {/* Bowlers */}
        <View style={styles.subCard}>
          {bowlers.map((b, i) => (
            <Text style={styles.subCardText} key={i}>
              {b.name} <Text style={styles.bold}>{b.overs}-{b.maidens}-{b.runs}-{b.wickets}</Text>
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadowWrap: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 12,
    width: 340,
    marginBottom: 12,
  },
  overTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    fontWeight:'600',
    marginBottom: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  runs: {
    fontSize: 16,
    color: '#444',
  },
  teamScore: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },
  crr: {
    fontSize: 15,
    color: '#666',
    marginTop: 2,
  },
  subCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 340,
  },
  subCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12,
  },
  subCardText: {
    fontSize: 11,
    color: '#222',
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
});

export default OverSummaryCard; 