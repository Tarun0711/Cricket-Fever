import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const RankingCard = ({ position, playerName, playerImage, points, rating }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.position}>{position}</Text>
      <Image source={{ uri: playerImage }} style={styles.avatar} />
      <Text style={styles.name}>{playerName}</Text>
      <Text style={styles.points}>{points}</Text>
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 32,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  position: {
    fontSize: 11,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
    backgroundColor: '#ccc',
  },
  name: {
    flex: 1,
    fontWeight: '600',
    fontSize: 11,
  },
  points: {
    fontSize: 11,
    color: '#888',
    marginRight: 16,
  },
  rating: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#222',
  },
});

export default RankingCard;
