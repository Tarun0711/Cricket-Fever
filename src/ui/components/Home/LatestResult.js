import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MatchCard from './ResultCard'

const chipsData = [
    { id: '1', title: 'T20 WC Pts Table' },
    { id: '2', title: 'ODI WC Pts Table' },
    { id: '3', title: 'PCL Score' },
    { id: '4', title: 'IPL Score' },
    { id: '5', title: 'Test Series' },
    { id: '6', title: 'County Championship' }
]
const data = {
    title: 'SCOTLAND VS BANGLADESH',
    subtitle: "MEN'S T20 TRI-Series East London",
    team1: {
      code: 'SCO',
      flag: 'https://flagcdn.com/w320/gb-sct.png',
      score: '120/5',
    },
    team2: {
      code: 'BAN',
      flag: 'https://flagcdn.com/w320/bd.png',
      scoreDetails: '(18.5/20 ov, T:120) 122/4',
    },
    result: 'Bangladesh won by 6 wickets',
  };

const LatestResult = () => {
  const renderChip = ({ item }) => (
    <TouchableOpacity style={styles.chip}>
      <Text style={styles.chipText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Latest Results</Text>
            <Text style={styles.showMore}>Show more</Text>
        </View>
        <FlatList
            data={chipsData}
            renderItem={renderChip}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.chipsList}
            contentContainerStyle={styles.chipsContainer}
        />
        <MatchCard data={data}/>
    </View>
  )
}

export default LatestResult

const styles = StyleSheet.create({
    container:{
        padding:24,
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
        fontWeight:700,
    },
    showMore: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 15,
        color: '#D1E2F8',
    },
    chipsList: {
        marginBottom: 16,
    },
    chipsContainer: {
        gap: 8,
    },
    chip: {
        backgroundColor: 'rgba(141, 183, 238, 0.1)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8DB7EE',
    },
    chipText: {
        color: 'white',
        fontSize: 11,
        fontWeight: '500',
    },
})