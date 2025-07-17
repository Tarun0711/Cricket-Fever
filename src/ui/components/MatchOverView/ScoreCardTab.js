import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useGetScoreCard } from '../../../hooks/useGetScoreCard';
import BowlingCard from './BowlingCard';

const ScorecardTab = ({ matchId }) => {
  const { data, isLoading, error } = useGetScoreCard(matchId);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <ActivityIndicator size="large" color="#1B6FDE" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <Text style={{ color: 'red' }}>Failed to load scorecard.</Text>
      </View>
    );
  }

  if (!data.data || !data.data.innings || data.data.innings.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <Text>No scorecard data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.data.innings.map((inning, idx) => (
        <View key={idx} style={{ marginBottom: 24 }}>
          <View style={styles.header}>
            <Text style={styles.teamText}>{inning.team} <Text style={styles.subText}>{inning.inning_name || ''}</Text></Text>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, { flex: 3 }]}>Batting</Text>
            <Text style={styles.headerCell}>R</Text>
            <Text style={styles.headerCell}>B</Text>
            <Text style={styles.headerCell}>4s</Text>
            <Text style={styles.headerCell}>6s</Text>
            <Text style={styles.headerCell}>SR</Text>
          </View>

          {inning.batting && inning.batting.length > 0 ? (
            inning.batting.map((item, index) => (
              <View key={index} style={styles.row}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.playerName}>{item.name}</Text>
                  <Text style={styles.dismissal}>{item.dismissal}</Text>
                </View>
                <Text style={styles.cell}>{item.runs}</Text>
                <Text style={styles.cell}>{item.balls}</Text>
                <Text style={styles.cell}>{item.fours}</Text>
                <Text style={styles.cell}>{item.sixes}</Text>
                <Text style={styles.cell}>{item.strike_rate}</Text>
              </View>
            ))
          ) : (
            <Text style={{ textAlign: 'center', color: '#888', marginVertical: 8 }}>No batting data</Text>
          )}

          {/* Extras */}
          {typeof inning.extras !== 'undefined' && (
            <View style={styles.extrasRow}>
              <Text style={styles.playerName}>Extras</Text>
              <Text style={[styles.cell, { textAlign: 'center' }]}>b {inning.bye || 0}, lb {inning.leg_bye || 0}, w {inning.wide || 0}, nb {inning.no_ball || 0}</Text>
              <Text style={[styles.cell, { fontWeight: '600' }]}>{inning.extras}</Text>
            </View>
          )}

          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalStat}>{inning.total_overs} Ov (RR: {inning.run_rate})</Text>
            <Text style={styles.totalScore}>{inning.total_runs}</Text>
          </View>

          {/* BowlingCard can be refactored to accept data if needed */}
          <BowlingCard bowlingData={inning.bowling} />
        </View>
      ))}
      {/* Optionally render match summary/close of play info here if available in data */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
  },
  header: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  teamText: {
    fontWeight: '700',
    fontSize: 16,
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#666',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  playerName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111',
  },
  dismissal: {
    fontSize: 12,
    color: '#666',
  },
  extrasRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 8,
  },
  totalRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.2,
    paddingTop: 10,
    borderColor: '#000',
  },
  totalText: {
    fontWeight: '700',
    fontSize: 14,
  },
  totalStat: {
    fontSize: 12,
    color: '#444',
  },
  totalScore: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ScorecardTab;
