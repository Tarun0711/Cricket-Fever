import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MatchCardList from './UpcomingFlatlist'

const UpcomingMatches = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Matches</Text>
      <MatchCardList/>
    </View>
  )
}

export default UpcomingMatches

const styles = StyleSheet.create({
    container:{
        paddingTop:24,
        paddingLeft:24
    },
    title:{
        color:'white',
        fontSize:20,
        lineHeight:25,
        fontWeight:700
    }

})