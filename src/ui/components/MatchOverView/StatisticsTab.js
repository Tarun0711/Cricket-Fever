import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import CricketStatsCard from './BattingStatsCard'
import ScorePieChart from './RunsGraph';
import { useBestBowlers } from '../../../hooks/useBestBowlers';
import { useBestBatters } from '../../../hooks/useBestBatters';
import { validatePathConfig } from '@react-navigation/native';
import BowlingStatsCard from './BowlingStatsCard';
const playerStats = {
  name: 'Virat Kohli',
  team: 'Ind - Eng',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
  runs: 99,
  balls: 39,
  control: 60,
  bestShot: '11 runs',
  breakdown: {
    ones: 4,
    fours: 4,
    sixes: 3,
    twos: 1,
  },
};

const StatisticsTab = ({ matchId }) => {
  const { data: bestBatters, isLoading: bestBattersLoading, error: bestBattersError } = useBestBatters(matchId);
  const { data: bestBowlers, isLoading: bestBowlersLoading, error: bestBowlersError } = useBestBowlers(matchId);
  if (bestBattersLoading || bestBowlersLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <ActivityIndicator size="large" color="#1B6FDE" />
      </View>
    );
  }

  if (bestBattersError ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <Text style={{ color: 'red' }}>Failed to load statistics.</Text>
      </View>
    );
  }

  // Support both array and { data: array } API responses
  const battersArray = Array.isArray(bestBatters) ? bestBatters : bestBatters?.data || [];

  return (
    <View style={styles.container}>
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        Best Performances - Batters
      </Text>
      <FlatList
        data={battersArray}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => item?._id?.toString() || item?.player_key?.toString() || idx.toString()}
        renderItem={({ item }) => <CricketStatsCard data={item} />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        Best Performances - Bowling
      </Text>
      <FlatList
        data={Array.isArray(bestBowlers) ? bestBowlers : bestBowlers?.data || []}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => item?._id?.toString() || item?.player_key?.toString() || idx.toString()}
        renderItem={({ item }) => <BowlingStatsCard data={item} />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  )
}

export default StatisticsTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 4,
    },
})