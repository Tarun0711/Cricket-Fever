import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RankBox from './RankBox';

const TeamRankingCard = ({ test,odi,t20 }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={t20.displayImg ? { uri: t20.displayImg } : require('../../../../assets/bats.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.countryText}>{t20.name} <Text style={styles.boldText}>Rankings</Text></Text>
          <Text style={styles.subTitle}>Top Team</Text>
        </View>
      </View>

      {/* Rank Boxes */}
      <View style={styles.rankContainer}>
        <RankBox type="ODI" rank={odi.rank} rating={odi.rating} color="#24B4E3" />
        <RankBox type="TEST" rank={test.rank} rating={test.rating} color="#1DE9B6" />
        <RankBox type="T20I" rank={t20.rank} rating={t20.rating} color="#F0437B" />
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
