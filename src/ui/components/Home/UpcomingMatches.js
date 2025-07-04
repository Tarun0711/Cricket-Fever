import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MatchCardList from './UpcomingFlatlist'

const UpcomingMatches = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.title}>Upcoming Matches</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
              <Text style={styles.showMore}>Show more</Text>
            </TouchableOpacity>
        </View>
      <MatchCardList />
    </View>
  )
}

export default UpcomingMatches

const styles = StyleSheet.create({
    container:{
        paddingTop:24,
        paddingLeft:24
    },
    headerContainer: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
  },
  title:{
      color:'white',
      fontSize:20,
      lineHeight:25,
      fontWeight:'700',
  },
  showMore: {
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 15,
      marginRight:20,
      color: '#D1E2F8',
  },

})