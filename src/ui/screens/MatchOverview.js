import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OverviewTopNavigation from '../components/OverviewTopNavigation';
import OverViewCard from '../components/MatchOverView/OverViewCard';
import Tab from '../components/MatchOverView/Tab';
import ScoreCard from '../components/MatchOverView/LiveTab';
import ScorecardTab from '../components/MatchOverView/ScoreCardTab';
import CommentryTab from '../components/MatchOverView/CommentryTab';
import StatisticsTab from '../components/MatchOverView/StatisticsTab';
import OverTab from '../components/MatchOverView/OverTab';

const matchData = {
  subtitle: "1st unofficial Test, Galle, January 31 – February 03, 2023, England Lions tour of Sri Lanka",
  india: { flag:{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'}, score: "136" },
  england: { flag: {uri:'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg'}, score: "305/5 (57 ov)" },
  currentRR: "5.40",
  minOvRem: "77.4",
  last10ov: "68/2 (6.80)",
  dayInfo: "Day 2 - Eng Lions lead by 169 runs."
};
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
  const [selectedTab, setSelectedTab] = useState(0); 

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      <OverviewTopNavigation navigation={navigation} />
      <ScrollView style={styles.contentContainer}>
        <OverViewCard data={matchData} />
        <Tab onTabChange={handleTabChange} />
        {selectedTab === 0 && <ScoreCard />}
        {selectedTab === 1 && <ScorecardTab/>}
        {selectedTab === 2 && <CommentryTab/>}
        {selectedTab === 3 && <StatisticsTab/>}
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