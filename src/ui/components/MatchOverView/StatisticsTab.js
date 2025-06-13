import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CricketStatsCard from './BattingStatsCard'
import ScorePieChart from './RunsGraph';
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

const StatisticsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        Best Performances - Batters
      </Text>
      <CricketStatsCard data={playerStats} />
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        Best Performances - Bowling
      </Text>
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