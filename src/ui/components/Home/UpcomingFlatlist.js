import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MatchCard from "./MatchCard";

const MatchCardList = () => {
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
  ];

  return (
    <FlatList
      data={matches}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MatchCard match={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
  },
});

export default MatchCardList;
