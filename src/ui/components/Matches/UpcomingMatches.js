import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
import MatchCard from '../Home/MatchCard';

const matches = [
  {
    id: 1,
    teams: { home: "SA", away: "ENG" },
    flags: {
      home: "https://flagcdn.com/w320/za.png",
      away: "https://flagcdn.com/w320/gb.png",
    },
    time: "Tomorrow • 5:00 PM • 3rd ODI",
    status: "Match yet to begin",
    venue: "Kimberley International Stadium",
  },
  {
    id: 2,
    teams: { home: "IND", away: "AUS" },
    flags: {
      home: "https://flagcdn.com/w320/in.png",
      away: "https://flagcdn.com/w320/au.png",
    },
    time: "Today • 7:00 PM • 1st T20",
    status: "Match yet to begin",
    venue: "Wankhede Stadium",
  },
  {
    id: 3,
    teams: { home: "SA", away: "ENG" },
    flags: {
      home: "https://flagcdn.com/w320/za.png",
      away: "https://flagcdn.com/w320/gb.png",
    },
    time: "Tomorrow • 5:00 PM • 3rd ODI",
    status: "Match yet to begin",
    venue: "Kimberley International Stadium",
  },
];

const UpcomingMatches = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        renderItem={({ item }) => <MatchCard match={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        scrollEnabled={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default UpcomingMatches;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
}); 