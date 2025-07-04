import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
import MatchCard from '../Home/MatchCard';
import { useUpcomingMatches } from '../../../hooks/useUpcomingMatches';

const UpcomingMatches = () => {
  const { data, isLoading, error } = useUpcomingMatches();

  // Safe extraction of matches array
  const matches = data?.data?.matches || [];
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
    padding: 8,
    width: '100%',
  },
}); 