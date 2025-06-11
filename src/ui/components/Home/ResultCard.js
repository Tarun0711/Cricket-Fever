import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


  
const MatchCard = ({data}) => {
  return (
    <View style={styles.card}>
        <View style={{display:'flex',flexDirection:'row',gap:16,justifyContent:'flex-start',alignItems:'center'}}>
            <Image
            source={require('../../../../assets/bats.png')}
            style={{height:16,width:16}}
            />
            <View>
            <Text style={styles.header}> {data.title}</Text>
            <Text style={styles.subHeader}>{data.subtitle}</Text>
            </View>
        </View>
      

      {/* Team 1 */}
      <View style={styles.scoreSection}>
        <View style={styles.team}>
          <Image source={{ uri: data.team1.flag }} style={styles.flag} />
          <Text style={styles.teamCode}>{data.team1.code}</Text>
        </View>
        <Text style={styles.score}>{data.team1.score}</Text>
      </View>

      {/* Team 2 */}
      <View style={styles.scoreSection}>
        <View style={styles.team}>
          <Image source={{ uri: data.team2.flag }} style={styles.flag} />
          <Text style={styles.teamCode}>{data.team2.code}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreDetails}>{data.team2.scoreDetails.split(')')[0]}) </Text>
          <Text style={styles.score}>{data.team2.scoreDetails.split(') ')[1]}</Text>
        </View>
      </View>

      <Text style={styles.result}>{data.result}</Text>
    </View>
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
