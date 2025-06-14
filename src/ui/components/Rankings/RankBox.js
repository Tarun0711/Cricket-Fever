import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RankBox = ({ type, rank, rating, color }) => {
  return (
    <View style={styles.box}>
      <View style={[styles.label, { backgroundColor: color }]}>
        <Text style={styles.labelText}>{type}</Text>
      </View>
      <Text style={styles.rank}>{rank}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation:20,
  },
  label: {
    borderRadius: 50,
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
  },
  labelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    color: '#000',
  },
  rating: {
    color: '#A6A6A6',
    fontSize: 13,
    fontWeight:"400"
  },
});

export default RankBox;
