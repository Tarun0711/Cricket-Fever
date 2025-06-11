import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const bowlingData = [
  {
    name: 'Nishan Madushka',
    o: '7',
    m: 3,
    r: 2,
    w: 1,
    econ: 4.86,
  },
  {
    name: 'Oshada Fernando',
    o: '9.4',
    m: 0,
    r: 2,
    w: 3,
    econ: 3.86,
  },
  {
    name: 'Dunith Wellalage',
    o: '13',
    m: 2,
    r: 2,
    w: 5,
    econ: 1.86,
  },
  {
    name: 'Sahan Arachchige',
    o: '5',
    m: 6,
    r: 2,
    w: 2,
    econ: 2.86,
  },
];

const BowlingCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, { flex: 3 }]}>Bowling</Text>
        <Text style={styles.cell}>O</Text>
        <Text style={styles.cell}>M</Text>
        <Text style={styles.cell}>R</Text>
        <Text style={styles.cell}>W</Text>
        <Text style={styles.cell}>Econ</Text>
      </View>

      {bowlingData.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.playerName, { flex: 3 }]}>{item.name}</Text>
          <Text style={styles.cell}>{item.o}</Text>
          <Text style={styles.cell}>{item.m}</Text>
          <Text style={styles.cell}>{item.r}</Text>
          <Text style={styles.cell}>{item.w}</Text>
          <Text style={styles.cell}>{item.econ}</Text>
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
    borderRadius: 12,
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
  playerName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111',
  },
});

export default BowlingCard;
