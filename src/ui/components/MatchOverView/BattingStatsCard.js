import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ScorePieChart from './RunsGraph'; 
const CricketStatsCard = ({ data = {} }) => {

  // Safely extract and parse values
  const name = data?.name || 'Unknown Player';
  const team = data?.team_name || '';
  const avatar = data?.avatar || 'https://www.shutterstock.com/image-vector/illustration-batsman-playing-cricket-action-600nw-2029010771.jpg';
  const runs = data?.runs || 0;
  const balls = data?.balls || 0;
  const control = data?.control_percentage || 0;
  const breakdown = {
    sixes: Number(data?.sixes) || 0,
    fours: Number(data?.fours) || 0,
    ones: Number(data?.ones) || 0,
    twos: Number(data?.twos) || 0,
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>
            {name} <Text style={styles.subText}>{team}</Text>
          </Text>
          <Text style={styles.runs}>{runs} runs ({balls})</Text>
        </View>
      </View>
<View style={styles.bottomRow}>
    <View style={{width: '70%'}}>
      <Text style={styles.control}>
        Control <Text style={styles.bold}>{control}%</Text>
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${control}%` }]} />
      </View>

      <View style={styles.labels}>
        <Text style={styles.labelActive}>Best Shot</Text>
        <Text style={styles.label}>Average Shot</Text>
      </View>
      </View>
        <ScorePieChart data={breakdown} />
        </View>
        <Text style={styles.subText}>Total Runs {runs} sixes {data.sixes} fours {data.fours}</Text>
    </View>
  );
};

export default CricketStatsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1B6FDE',
    borderRadius: 20,
    padding: 16,
    margin: 10,
    shadowColor: '#091C13',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 60,
    elevation: 8,
    maxWidth:300
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
  runs: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
  },
  control: {
    color: '#fff',
    fontSize: 16,
    marginTop: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#93C5FD33',
    borderRadius: 10,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: '#60A5FA',
    borderRadius: 10,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 8,
  },
  labelActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    color: '#9CA3AF',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  graphWrapper: {
    width: 60,
    height: 60,
    position: 'relative',
  },
  sixTextContainer: {
    position: 'absolute',
    top: 20,
    left: 5,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  sixText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
