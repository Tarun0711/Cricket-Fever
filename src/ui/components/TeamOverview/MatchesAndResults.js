import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OverViewCard from '../MatchOverView/OverViewCard'
import { useCompletedMatchesByCountry } from '../../../hooks/useCompletedMatchesByTeam'



const MatchesAndResults = () => {
  const { data, isLoading, error } = useCompletedMatchesByCountry('BGD');
  console.log(data?.data?.matches)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Matches</Text>
      <View style={styles.dataContainer}>
      {data?.data?.matches.map((match, index) => (
        <OverViewCard key={index} data1={match} />
      ))}
      </View>
    </View>
  )
}

export default MatchesAndResults

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal:-24
      },
      heading: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 25,
        paddingLeft:24,
        width:'100%',
        marginVertical: 16,
      },
      dataContainer:{
        width:'100%'
      }
})