import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';


  
const MatchCard = ({data}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (data?.key) {
      navigation.navigate('MatchOverview', { matchKey: data.key });
    }
  };
  if (!data) {
    return (
      <View style={styles.card}>
        <Text>No match data available.</Text>
      </View>
    );
  }
  // Fallbacks for missing data
  const tournamentShortName = data.tournament?.short_name || 'Unknown Short Name';
  const tournamentName = data.tournament?.name || 'Unknown Tournament';
  const teamAFlag = data.teams?.a?.flag || '';
  const teamACode = data.teams?.a?.country_code || 'N/A';
  const teamAScore = data.play?.innings?.a_1?.score?.runs || '-';
  const teamBFlag = data.teams?.b?.flag || '';
  const teamBCode = data.teams?.b?.country_code || 'N/A';
  const teamBScore = data.play?.innings?.b_1?.score?.runs || '-';
  const teamBScoreDetails = data.play?.innings?.b_1?.score_str || '';
  const resultMsg = data?.play?.result?.msg || '';
  const teamAScoreDetails = data.play?.innings?.a_1?.score_str || '';
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={{display:'flex',flexDirection:'row',gap:16,justifyContent:'flex-start',alignItems:'center'}}>
        <Image
          source={require('../../../../assets/bats.png')}
          style={{height:16,width:16}}
        />
        <View>
          <Text style={styles.header}>{tournamentShortName}</Text>
          <Text style={styles.subHeader}>{tournamentName}</Text>
        </View>
      </View>

      {/* Team 1 */}
      <View style={styles.scoreSection}>
        <View style={styles.team}>
          {teamAFlag ? <SvgXml xml={teamAFlag} style={styles.flag}/> : null}
          <Text style={styles.teamCode}>{teamACode}</Text>
        </View>
        
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreDetails}>{teamAScoreDetails} </Text>
          <Text style={styles.score}>{teamAScore}</Text>
        </View>
      </View>

      {/* Team 2 */}
      <View style={styles.scoreSection}>
        <View style={styles.team}>
          {teamBFlag ? <SvgXml xml={teamBFlag} style={styles.flag}/> : null}
          <Text style={styles.teamCode}>{teamBCode}</Text>
        </View>
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreDetails}>{teamBScoreDetails} </Text>
          <Text style={styles.score}>{teamBScore}</Text>
        </View>
      </View>

      {resultMsg ? <Text style={styles.result}>{resultMsg}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },
  header: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight:20,
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 13,
    color: '#666666',
    fontWeight:"400",
    lineHeight:18,
    marginBottom: 8,
  },
  scoreSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 28,
    height: 28,
    borderRadius: 14,
    objectFit:"cover",
    marginRight: 12,
  },
  teamCode: {
    fontSize: 16,
    fontWeight: '700',
  },
  score: {
    fontSize: 16,
    fontWeight: '700',
  },
  scoreDetails: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '400',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    marginTop: 8,
    fontSize: 15,
    lineHeight:20,
    fontWeight: '400',
  },
});

export default MatchCard;
