import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HorizontalCardList from '../components/Home/Events'
import UpcomingMatches from '../components/Home/UpcomingMatches'
import MatchStories from '../components/Home/MatchStories'
import LatestResult from '../components/Home/LatestResult'
import FeturedVideos from '../components/Home/FeturedVideos'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Header />
          <HorizontalCardList />
          <View style={styles.mainComponent}>
            <UpcomingMatches/>
            <MatchStories/>
            <LatestResult/>
            <FeturedVideos/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex:1,
    paddingTop:20,
  },

  mainComponent:{
    backgroundColor:'#1B6FDE',
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    minHeight:800,
  }

})