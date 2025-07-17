import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import TabSelector from '../components/Rankings/TabSelector';
import Header from '../components/Rankings/Header';
import RankingRow, { PlayerRankingHeader, PlayerRankingRow, RankingHeader } from '../components/Rankings/RankingRow';
import { useGetPlayerRank } from '../../hooks/useGetPlayerRank';
import FilterModal from '../components/Rankings/FilterModal';

const Players = () => {
  const [activeTab, setActiveTab] = useState('ODI');
  const [category, setCategory] = useState('batsmen');
  const [gender, setGender] = useState('women');
  const [filterVisible, setFilterVisible] = useState(false);

  // Map tab to format
  const tabToFormat = {
    'Test': 'test',
    'ODI': 'odi',
    'T20I': 't20',
  };
  const format = tabToFormat[activeTab];

  const { data, isLoading, error } = useGetPlayerRank({ category, format, gender });
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <ActivityIndicator size="large" color="#1B6FDE" />
      </View>
    );
  }
  return (
    <View>
      <Header
        Name={`${gender === 'men' ? "Men's" : "Women's"} ${activeTab} ${category === 'batsmen' ? 'Batting' : category === 'bowlers' ? 'Bowling' : 'All Rounder'} Rankings`}
        onFilterPress={() => setFilterVisible(true)}
        category={category}
        gender={gender}
        format={format}
      />
      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} gender={gender} />
      <ScrollView style={{ marginTop: 20 }}>
        <PlayerRankingHeader />
        {data?.data?.rankings?.map((player) => (
          <PlayerRankingRow
        player={player}
          />
        ))}
      </ScrollView>
      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        category={category}
        setCategory={setCategory}
        gender={gender}
        setGender={setGender}
      />
    </View>
  )
}

export default Players

const styles = StyleSheet.create({

})