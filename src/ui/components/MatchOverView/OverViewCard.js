import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const OverViewCard = ({ data }) => {
  if (!data) return null;

  // Get team names from the data object
  const getTeamNames = () => {
    const teams = Object.keys(data).filter(key => 
      typeof data[key] === 'object' && 
      data[key].flag && 
      data[key].score
    );
    return teams;
  };

  const teams = getTeamNames();

  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Image
            source={require('../../../../assets/bats.png')}
            style={styles.batsIcon}
          />
          <View style={styles.headerText}>
            {data.isLive ? (
              <Text style={styles.liveBadge}>LIVE</Text>
            ) : (
              <View style={{display:'flex',alignItems:'center',gap:8,flexDirection:'row'}}>
                <Text style={styles.resultText}>RESULT</Text>
                <Text style={{fontSize:11}}>{data.matchdate}</Text>
              </View>
            )}
            <Text style={styles.subtitle}>{data.subtitle}</Text>
          </View>
        </View>

        <View style={styles.teams}>
          {teams.map((teamKey, index) => (
            <View key={index} style={styles.teamsRow}>
              <View style={styles.teamRow}>
                <Image source={data[teamKey].flag} style={styles.flagImg} />
                <Text style={styles.teamName}>
                  {teamKey.charAt(0).toUpperCase() + teamKey.slice(1)}
                </Text>
              </View>
              <Text style={styles.score}>{data[teamKey].score}</Text>
            </View>
          ))}
        </View>

        {data.currentRR && (
          <View style={styles.infoBox}>
            <Text style={styles.info}>
              <Text style={styles.bold}>Current RR:</Text> {data.currentRR} • Min. Ov. Rem: {data.minOvRem} • Last 10 ov (RR): {data.last10ov}
            </Text>
          </View>
        )}

        <Text style={styles.dayInfo}>{data.dayInfo}</Text>
      </View>
    </View>
  );
};

export default OverViewCard;

const styles = StyleSheet.create({
  shadowWrapper: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#091C13',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 60,
    elevation: 10,
    backgroundColor: 'transparent',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batsIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerText: {
    flex: 1,
  },
  liveBadge: {
    backgroundColor: 'red',
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 12,
  },
  resultText: {
    color: '#666',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    marginBottom: 4,
    padding: 2,
    borderRadius: 4,
    backgroundColor: '#F5F5F5'
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  teams: {
    paddingVertical: 14,
    borderTopColor: '#F5F5F5',
    borderBottomColor: '#F5F5F5',
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    marginTop: 12,
    marginBottom: 16,
  },
  teamsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImg: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  score: {
    fontSize: 15,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  dayInfo: {
    fontSize: 15,
    color: '#333',
    marginTop: 4,
  },
});
