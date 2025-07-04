import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MatchCard from './ResultCard'
import { useNavigation } from '@react-navigation/native';

const extractTournamentChips = (data) => {
  if (!data?.matches || !Array.isArray(data.matches) || data.matches.length === 0) {
    return [{ id: '0', title: 'No Matches Available' }];
  }
  return data.matches.map((match, index) => ({
    id: (index + 1).toString(),
    title: match?.tournament?.name || 'Unknown Tournament'
  }));
};
const data1 = {
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

  

const LatestResult = ({ data, isLoading, error }) => {
  const navigation = useNavigation();

  // Improved logging for debugging
  // console.log('LatestResult data:', JSON.stringify(data, null, 2));
  const chipsData = extractTournamentChips(data?.data); 
  const firstMatch = data?.data?.matches?.[0];
  // console.log('First match:', JSON.stringify(firstMatch, null, 2));

  const renderChip = ({ item }) => (
    <TouchableOpacity style={styles.chip}>
      <Text style={styles.chipText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Latest Results</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
              <Text style={styles.showMore}>Show more</Text>
            </TouchableOpacity>        </View>
        <FlatList
            data={chipsData}
            renderItem={renderChip}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.chipsList}
            contentContainerStyle={styles.chipsContainer}
        />

        <MatchCard data={firstMatch}/>
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