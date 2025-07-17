import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Rankings/Header';
import TabSelector from '../components/Rankings/TabSelector';
import RankingRow, { RankingHeader } from '../components/Rankings/RankingRow';
import FilterModal from '../components/Rankings/FilterModal';
import { useGetTeamRanking } from '../../hooks/useGetTeamRanking';


export default function TeamRankingScreen() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('ODI');

  // Map tab to format
  const tabToFormat = {
    'Test': 'test',
    'ODI': 'odi',
    'T20I': 't20',
  };
  const format = tabToFormat[activeTab];
  const { data ,isLoading,isError} = useGetTeamRanking({ format:format, gender: 'men' });
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1B6FDE" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header Name='Team Rankings' onFilterPress={() => setFilterVisible(true)} />
      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RankingHeader/>
        {data?.data?.rankings.map((team) => (
          <RankingRow key={team.rank} team={team} />
        ))}
      </ScrollView>
      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { paddingHorizontal: 16, paddingBottom: 20 },
});
