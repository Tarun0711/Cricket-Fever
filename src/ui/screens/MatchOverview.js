import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useGetMatchSummary } from '../../hooks/useGetMatchSummary';
import OverviewTopNavigation from '../components/OverviewTopNavigation';
import OverViewCard from '../components/MatchOverView/OverViewCard';
import Tab from '../components/MatchOverView/Tab';
import ScoreCard from '../components/MatchOverView/LiveTab';
import ScorecardTab from '../components/MatchOverView/ScoreCardTab';
import CommentryTab from '../components/MatchOverView/CommentryTab';
import StatisticsTab from '../components/MatchOverView/StatisticsTab';
import OverTab from '../components/MatchOverView/OverTab';

const overData = {
  team: 'England Lions',
  tags: ['Impactful Overs', 'Dropped catch', 'DRS'],
  prevOver: '2/0 (4 runs, 0 wkt)',
  runRate: '4.00',
  overStats: '4/0',
  totalInfo: '16 runs, 1 wkt',
  bowler: 'Dunith Wellalage',
  balls: [
    { value: 'dot' },
    { value: 'w' },
    { value: '4' },
    { value: 3 },
    { value: 3 },
    { value: '6' },
  ],
};

const MatchOverview = ({ navigation }) => {
  const route = useRoute();
  const matchKey = route.params?.matchKey;
  const { data: matchSummary, isLoading, error } = useGetMatchSummary(matchKey);
  const [selectedTab, setSelectedTab] = useState(0); 
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1B6FDE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <OverviewTopNavigation team={matchSummary.data.teams} navigation={navigation} />
      <ScrollView style={styles.contentContainer}>
        <OverViewCard data1={matchSummary.data} />
        <Tab onTabChange={handleTabChange} />
        {selectedTab === 0 && <ScoreCard />}
        {selectedTab === 1 && <ScorecardTab matchId={matchSummary.data.key} />}
        {selectedTab === 2 && <CommentryTab matchId={matchSummary.data.key}/>}
        {selectedTab === 3 && <StatisticsTab matchId={matchKey}/>}
        {selectedTab === 4 && <OverTab data={overData}/>}
      </ScrollView>
    </View>
  )
}

export default MatchOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})