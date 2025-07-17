import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { getCountryFlag } from '../../../services/apiCalls/matchApi';
import { formatUnixTimestamp } from '../../../utils/TimeFormat';

const OverViewCard = ({ data1 }) => {
  const [teamAFlag, setTeamAFlag] = useState(null);
  const [teamBFlag, setTeamBFlag] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        if (data1?.teams?.a?.country_code) {
          const flagA = await getCountryFlag(data1.teams.a.country_code);
          setTeamAFlag(flagA?.svg || flagA);
        }
        if (data1?.teams?.b?.country_code) {
          const flagB = await getCountryFlag(data1.teams.b.country_code);
          setTeamBFlag(flagB?.svg || flagB);
        }
      } catch (error) {
        console.error('Error fetching country flags:', error);
      }
    };
    fetchFlags();
  }, [data1]);

  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Image
            source={require('../../../../assets/bats.png')}
            style={styles.batsIcon}
          />
          <View style={styles.headerText}>
            {data1.status ==='completed' ? (
                <View style={{display:'flex',alignItems:'center',gap:8,flexDirection:'row'}}>
                <Text style={styles.resultText}>RESULT</Text>
              </View>
            ) : (
              <Text style={styles.liveBadge}>LIVE</Text>
            )}
            <Text style={styles.subtitle}>{data1.tournament.name + ', ' + formatUnixTimestamp(data1.start_at) + ',' + data1.format +','+data1.name}</Text>
          </View>
        </View>

        <View style={styles.teams}>
          <View style={styles.teamsRow}>
            <View style={styles.teamRow}>
              {teamAFlag ? (
                <SvgXml xml={teamAFlag} style={styles.flagImg} />
              ) : (
                <View style={[styles.flagImg, {backgroundColor: '#eee'}]} />
              )}
              <Text style={styles.teamName}>
                {data1.teams.a.name}
              </Text>
            </View>
            <Text style={styles.score}>
              {data1?.current_innings?.batting_team === 'a'
                ? data1?.current_innings?.score_str
                : (typeof data1?.current_innings?.score?.runs === 'number' ? (data1.current_innings.score.runs - 1).toString() : '-')}
            </Text>
          </View>
          <View style={styles.teamsRow}>
            <View style={styles.teamRow}>
              {teamBFlag ? (
                <SvgXml xml={teamBFlag} style={styles.flagImg} />
              ) : (
                <View style={[styles.flagImg, {backgroundColor: '#eee'}]} />
              )}
              <Text style={styles.teamName}>
                {data1.teams.b.name}
              </Text>
            </View>
            <Text style={styles.score}>
              {data1?.current_innings?.batting_team === 'b'
                ? data1?.current_innings?.score_str
                : (typeof data1?.current_innings?.score?.runs === 'number' ? (data1.current_innings.score.runs - 1).toString() : '-')}
            </Text>
          </View>
        </View>

        {data1.status === 'live' ? (
          data1.currentRR && (
            <View style={styles.infoBox}>
              <Text style={styles.info}>
                <Text style={styles.bold}>Current RR:</Text> {data1.currentRR} • Min. Ov. Rem: {data1.minOvRem} • Last 10 ov (RR): {data1.last10ov}
              </Text>
            </View>
          )
        ) : (
          data1.toss && (
            <View style={styles.infoBox}>
              <Text style={styles.info}>
                {`${data1.teams[data1.toss.winner].name} won the toss and elected to ${data1.toss.elected}`}
              </Text>
            </View>
          )
        )}

        <Text style={styles.dayInfo}>
          {data1.result && data1.result.winner && data1.result.result_type && data1.result.win_by
            ? `${data1.teams[data1.result.winner].name} won by ${data1.result.win_by} ${data1.result.result_type}`
            : data1.result?.msg}
        </Text>
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
