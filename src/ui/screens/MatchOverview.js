import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OverviewTopNavigation from '../components/OverviewTopNavigation';
import OverViewCard from '../components/MatchOverView/OverViewCard';
import Tab from '../components/MatchOverView/Tab';
import ScoreCard from '../components/MatchOverView/LiveTab';
import ScorecardTab from '../components/MatchOverView/ScoreCardTab';

const matchData = {
  subtitle: "1st unofficial Test, Galle, January 31 – February 03, 2023, England Lions tour of Sri Lanka",
  india: { flag:{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'}, score: "136" },
  england: { flag: {uri:'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg'}, score: "305/5 (57 ov)" },
  currentRR: "5.40",
  minOvRem: "77.4",
  last10ov: "68/2 (6.80)",
  dayInfo: "Day 2 - Eng Lions lead by 169 runs."
};

const MatchOverview = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0); // Default to 'Live' tab

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