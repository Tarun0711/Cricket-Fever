import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BowlingCard = ({ bowlingData }) => {
  if (!bowlingData || bowlingData.length === 0) {
    return <Text style={{ color: '#888', marginVertical: 8, textAlign: 'center' }}>No bowling data</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 3 }]}>Bowling</Text>
        <Text style={styles.headerCell}>O</Text>
        <Text style={styles.headerCell}>M</Text>
        <Text style={styles.headerCell}>R</Text>
        <Text style={styles.headerCell}>W</Text>
        <Text style={styles.headerCell}>Econ</Text>
      </View>

      {bowlingData.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.playerName, { flex: 3 }]}>{item.name}</Text>
          <Text style={styles.cell}>{item.overs}</Text>
          <Text style={styles.cell}>{item.maidens}</Text>
          <Text style={styles.cell}>{item.runs}</Text>
          <Text style={styles.cell}>{item.wickets}</Text>
          <Text style={styles.cell}>{item.economy}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 8,
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
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  playerName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111',
  },
});

export default BowlingCard;
