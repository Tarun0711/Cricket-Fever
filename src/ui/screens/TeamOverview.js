import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TeamTopNavigation from '../components/TeamOverview/TeamTopNavigation'
import Tab from '../components/TeamOverview/Tab';
import Home from '../components/TeamOverview/Home';
import MatchesAndResults from '../components/TeamOverview/MatchesAndResults';
import Squads from '../components/TeamOverview/Squads';

const TeamOverview = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState(0); 

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
        <TeamTopNavigation title={'🇧🇩 Bangladesh'} navigation={navigation}/>
        <ScrollView>
        <Tab onTabChange={handleTabChange} />
        <View style={styles.contentContainer}>
            {selectedTab ===0 && <Home/>}
            {selectedTab ===1 && <MatchesAndResults/>}
            {selectedTab ===2 && <Squads/>}
        </View>
        </ScrollView>
    </View>
  )
}

export default TeamOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentContainer:{
        paddingHorizontal:24,
    }

})