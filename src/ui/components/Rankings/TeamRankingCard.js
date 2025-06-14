import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RankBox from './RankBox';

const TeamRankingCard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://flagcdn.com/w80/nz.png' }}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.countryText}>New Zealand <Text style={styles.boldText}>Rankings</Text></Text>
          <Text style={styles.subTitle}>Top Team</Text>
        </View>
      </View>

      {/* Rank Boxes */}
      <View style={styles.rankContainer}>
        <RankBox type="ODI" rank="3rd" rating="111" color="#24B4E3" />
        <RankBox type="TEST" rank="5th" rating="99" color="#00E19D" />
        <RankBox type="T20I" rank="5th" rating="252" color="#D81F7C" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    borderRadius: 20,
    padding: 20,
    position:'relative',
    shadowColor: '#121212',
    shadowOpacity: 0.3,
    height:140,
    marginTop:20,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 12,
    borderRadius:48
  },
  titleContainer: {
    flexDirection: 'column',
  },
  countryText: {
    fontSize: 20,
    color: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize:24
  },
  subTitle: {
    color: '#aaa',
    fontSize: 14,
  },
  rankContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default TeamRankingCard;
