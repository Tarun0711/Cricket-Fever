import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function RankingHeader() {
  return (
    <View style={[styles.row, styles.header]}>
      <Text style={[styles.pos, styles.headerText]}>Pos</Text>
      <View style={styles.team}>
        <Text style={[styles.teamText, styles.headerText]}>Team</Text>
      </View>
      <Text style={[styles.cell, styles.headerText]}>WMS</Text>
      <Text style={[styles.cell, styles.headerText]}>Pts</Text>
      <Text style={[styles.rating, styles.headerText]}>Rating</Text>
    </View>
  );
}

export default function RankingRow({ pos, team, flag, wms, pts, rating }) {
  return (
    
    <View style={styles.row}>
      <Text style={styles.pos}>{pos}</Text>
      <View style={styles.team}>
        <Image source={{ uri: flag }} style={styles.flag} />
        <Text style={styles.teamText}>{team}</Text>
      </View>
      <Text style={styles.cell}>{wms}</Text>
      <Text style={styles.cell}>{pts}</Text>
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    marginHorizontal:16,
    paddingHorizontal: 14,
    marginVertical:5,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 0,
  },
  header: {
    borderBottomWidth:1,
    borderBottomColor: '#f5f5f5',
    marginBottom: 5,
  },
  headerText: {
    color: '#666',
    fontWeight: '',
    fontSize:11,
  },
  pos: { flex: 1, fontWeight: 'bold', fontSize: 13, color: '#222', textAlign: 'left' },
  team: { flex: 3, marginRight: 20, flexDirection: 'row', alignItems: 'center' },
  flag: { width: 20, height: 20, marginRight: 8, borderRadius: 10, borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
  teamText: { fontWeight: '700', fontSize: 13, color: '#222' },
  cell: { flex: 2, textAlign: 'center', fontSize: 13, color: '#222' },
  rating: { flex: 2, fontWeight: 'bold', fontSize: 13, color: '#111', textAlign: 'right' },
});
