import React from "react";
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from "react-native";
import MatchCard from "./MatchCard";
import { useUpcomingMatches } from "../../../hooks/useUpcomingMatches";

const MatchCardList = () => {
  const { data, isLoading, error } = useUpcomingMatches();

  // Safe extraction of matches array
  const matches = data?.data?.matches || [];

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Failed to load matches.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={matches}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item?.key?.toString() || Math.random().toString()}
      renderItem={({ item }) => <MatchCard match={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default MatchCardList;
