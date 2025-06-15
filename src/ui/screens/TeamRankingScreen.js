import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Rankings/Header';
import TabSelector from '../components/Rankings/TabSelector';
import RankingRow, { RankingHeader } from '../components/Rankings/RankingRow';
import FilterModal from '../components/Rankings/FilterModal';

const teamData = [
  { pos: 1, team: 'India', flag: 'https://flagcdn.com/w80/in.png', wms: 32, pts: 3990, rating: 135 },
  { pos: 2, team: 'Australia', flag: 'https://flagcdn.com/w80/au.png', wms: 29, pts: 3668, rating: 126 },
  { pos: 3, team: 'England', flag: 'https://flagcdn.com/w80/gb-eng.png', wms: 47, pts: 5017, rating: 107 },
  { pos: 4, team: 'South Africa', flag: 'https://flagcdn.com/w80/za.png', wms: 29, pts: 2965, rating: 102 },
  { pos: 5, team: 'New Zealand', flag: 'https://flagcdn.com/w80/nz.png', wms: 30, pts: 2965, rating: 126 },
  { pos: 6, team: 'Pakistan', flag: 'https://flagcdn.com/w80/pk.png', wms: 30, pts: 2638, rating: 88 },
  { pos: 7, team: 'Sri Lanka', flag: 'https://flagcdn.com/w80/lk.png', wms: 26, pts: 2282, rating: 88 },
  { pos: 8, team: 'West Indies', flag: 'https://flagcdn.com/w80/wi.png', wms: 28, pts: 2198, rating: 79 },
  { pos: 9, team: 'Bangladesh', flag: 'https://flagcdn.com/w80/bd.png', wms: 25, pts: 1161, rating: 46 },
  { pos: 10, team: 'Zimbabwe', flag: 'https://flagcdn.com/w80/zw.png', wms: 6, pts: 148, rating: 25 },
];

export default function TeamRankingScreen() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header Name='Team Rankings' onFilterPress={() => setFilterVisible(true)} />
      <TabSelector />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RankingHeader/>
        {teamData.map((team) => (
          <RankingRow key={team.pos} {...team} />
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
