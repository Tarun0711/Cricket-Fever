import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import MatchCard from '../Home/ResultCard';

const data = [{
  id:1,
  title: 'SCOTLAND VS BANGLADESH',
  subtitle: "MEN'S T20 TRI-Series East London",
  team1: {
    code: 'SCO',
    flag: 'https://flagcdn.com/w320/gb-sct.png',
    score: '120/5',
  },
  team2: {
    code: 'BAN',
    flag: 'https://flagcdn.com/w320/bd.png',
    scoreDetails: '(18.5/20 ov, T:120) 122/4',
  },
  result: 'Bangladesh won by 6 wickets',
},
{
  id:2,
  title: 'SCOTLAND VS BANGLADESH',
  subtitle: "MEN'S T20 TRI-Series East London",
  team1: {
    code: 'SCO',
    flag: 'https://flagcdn.com/w320/gb-sct.png',
    score: '120/5',
  },
  team2: {
    code: 'BAN',
    flag: 'https://flagcdn.com/w320/bd.png',
    scoreDetails: '(18.5/20 ov, T:120) 122/4',
  },
  result: 'Bangladesh won by 6 wickets',
}
]

const MatchResults = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MatchCard data={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        scrollEnabled={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default MatchResults;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
}); 