import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ScorePieChart from './RunsGraph';

const DEFAULT_AVATAR = 'https://img.freepik.com/premium-vector/dynamic-vector-illustration-cricket-bowler-motion_968957-4873.jpg?w=360';

const BowlingStatsCard = ({ data = {} }) => {
  const name = data?.name || 'Unknown Player';
  const team = data?.team_name || '';
  const avatar = data?.player_image || DEFAULT_AVATAR;
  const overs = data?.overs || '0.0';
  const maidens = data?.maidens || 0;
  const runs = data?.runs || 0;
  const wickets = data?.wickets || 0;
  const economy = data?.economy || 0;
  const dotBalls = data?.dot_balls || 0;
  const wides = data?.wides || 0;
  const noBalls = data?.no_balls || 0;
  const normalBalls = data?.ball_type_breakdown?.normal || 0;
  const wideBalls = data?.ball_type_breakdown?.wide || 0;
  const noBallBalls = data?.ball_type_breakdown?.no_ball || 0;
  const ballTypeBreakdown = {
    dot: dotBalls,
    normal: normalBalls,
    wide: wideBalls,
    no_ball: noBallBalls,
  };
  const wicketsBreakup = data?.wickets_breakup || {};

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>
            {name} <Text style={styles.subText}>{team}</Text>
          </Text>
          <Text style={styles.stats}>{overs} ov | {maidens} m | {runs} r | {wickets} w | Econ {economy}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={{ width: '70%' }}>
          <Text style={styles.label}>Ball Type Breakdown</Text>
          <ScorePieChart data={ballTypeBreakdown} />
        </View>
        <View style={styles.wicketsBreakup}>
          <Text style={styles.label}>Wickets</Text>
          <Text style={styles.wicketsText}>Bowled: {wicketsBreakup.bowled || 0}</Text>
          <Text style={styles.wicketsText}>Caught: {wicketsBreakup.caught || 0}</Text>
          <Text style={styles.wicketsText}>LBW: {wicketsBreakup.lbw || 0}</Text>
          <Text style={styles.wicketsText}>Stumping: {wicketsBreakup.stumping || 0}</Text>
        </View>
      </View>
      <Text style={styles.subText}>Dot balls: {dotBalls} | Wides: {wides} | No balls: {noBalls}</Text>
    </View>
  );
};

export default BowlingStatsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2563EB',
    borderRadius: 20,
    padding: 16,
    margin: 10,
    shadowColor: '#091C13',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 60,
    elevation: 8,
    maxWidth: 320,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#cbd5e1',
  },
  stats: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  wicketsBreakup: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  wicketsText: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 2,
  },
}); 