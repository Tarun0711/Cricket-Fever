import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BowlingCard from './BowlingCard';

const battingData = [
  {
    name: 'Nishan Madushka',
    dismissal: 'lbw b Fisher',
    runs: 32,
    balls: 3,
    fours: 2,
    sixes: 1,
    sr: 30.86,
  },
  {
    name: 'Oshada Fernando',
    dismissal: 'c Haines b Patterson-W',
    runs: 26,
    balls: 3,
    fours: 2,
    sixes: 1,
    sr: 30.86,
  },
  {
    name: 'Dunith Wellalage',
    dismissal: 'c †Smith b Abell',
    runs: 12,
    balls: 3,
    fours: 2,
    sixes: 1,
    sr: 30.86,
  },
  {
    name: 'Sahan Arachchige',
    dismissal: 'c †Smith b Fisher',
    runs: 45,
    balls: 3,
    fours: 2,
    sixes: 1,
    sr: 30.86,
  }
];

const ScorecardTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.teamText}>Sri Lanka A <Text style={styles.subText}>1st Innings</Text></Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.cell, { flex: 3 }]}>Batting</Text>
        <Text style={styles.cell}>R</Text>
        <Text style={styles.cell}>B</Text>
        <Text style={styles.cell}>4s</Text>
        <Text style={styles.cell}>6s</Text>
        <Text style={styles.cell}>SR</Text>
      </View>

      {battingData.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={{ flex: 3 }}>
            <Text style={styles.playerName}>{item.name}</Text>
            <Text style={styles.dismissal}>{item.dismissal}</Text>
          </View>
          <Text style={styles.cell}>{item.runs}</Text>
          <Text style={styles.cell}>{item.balls}</Text>
          <Text style={styles.cell}>{item.fours}</Text>
          <Text style={styles.cell}>{item.sixes}</Text>
          <Text style={styles.cell}>{item.sr}</Text>
        </View>
      ))}

      <View style={styles.extrasRow}>
        <Text style={styles.playerName}>Extras</Text>
        <Text style={styles.dismissal}>(lb 1, nb 5)</Text>
        <Text style={[styles.cell, { fontWeight: '600' }]}>6</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>TOTAL</Text>
        <Text style={styles.totalStat}>35.4 Ov (RR: 3.81)</Text>
        <Text style={styles.totalScore}>136</Text>
      </View>
      <BowlingCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    
  },
  header: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom:8
  },
  teamText: {
    fontWeight: '700',
    fontSize: 16,
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#666',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  playerName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111',
  },
  dismissal: {
    fontSize: 12,
    color: '#666',
  },
  extrasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderTopWidth: 1,
    paddingTop: 8,
    borderColor: '#000',
  },
  totalRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    paddingTop: 10,
    borderColor: '#000',
  },
  totalText: {
    fontWeight: '700',
    fontSize: 14,
  },
  totalStat: {
    fontSize: 12,
    color: '#444',
  },
  totalScore: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ScorecardTab;
