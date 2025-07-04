import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import MatchCard from '../Home/ResultCard';
import { useCompletedMatches } from '../../../hooks/useCompletedMatches';

const MatchResults = () => {
  const { data, isLoading, error } = useCompletedMatches();
const completedMatches=data?.data?.matches
  return (
    <View style={styles.container}>
      <FlatList
        data={completedMatches}
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