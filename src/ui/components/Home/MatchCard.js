import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { formatUnixTimestamp } from '../../../utils/TimeFormat';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MatchCard = ({ match }) => {

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} >
      <View style={styles.svgContainer}>
        <Image 
          source={require('../../../../assets/bats.png')}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.header}> {match.start_at ? formatUnixTimestamp(match.start_at) : "-"}</Text>
      <View style={styles.teamsRow}>
        <View style={styles.team}>
          <Text style={styles.teamName}>{match.teams?.a.code || "-"}</Text>
           <SvgXml xml={match.teams.a.flag} style={styles.flag}/> 

        </View>
        <Text style={styles.vs}>Vs</Text>
        <View style={styles.team}>
        <SvgXml xml={match.teams.b.flag} style={styles.flag}/> 

          <Text style={styles.teamName}>{match.teams?.b.code || "-"}</Text>
        </View>
      </View>
      <Text style={styles.status}>
  {match?.status === 'not_started' ? 'Match Yet To Begin' : '-'}
</Text>      <Text style={styles.venue}>{match.venue.name || "-"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight:192,
    minWidth:327,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:"center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  svgContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  header: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
    lineHeight:20,
    marginBottom: 12,
  },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 12,
    gap:12
  },
  team: {
    alignItems: "center",
    display:"flex",
    flexDirection:'row',
    gap:12
  },
  flag: {
    width: 40,
    height: 40,
    resizeMode: "fill",
    marginBottom: 4,
    borderRadius:100,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
  },
  vs: {
    fontSize: 13,
    lineHeight:15,
    padding:2,
    shadowColor:"#0A091B99",
    color: "#D23624",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  status: {
    textAlign: "center",
    fontSize: 15,
    lineHeight:20,
    fontWeight: "500",
    color: "#222",
  },
  venue: {
    textAlign: "center",
    fontSize: 13,
    fontWeight:400,
    lineHeight:18,
    color: "#A6A6A6",
    marginTop: 4,
  },
});

export default MatchCard; 