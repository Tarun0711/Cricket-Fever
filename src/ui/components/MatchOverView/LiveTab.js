import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OverSummaryCard from './OverSummaryCard';

// OverSummary component for over balls and over number
const OverSummary = () => {
  // Ball data: type, value, color
  const balls = [
    { type: 'dot', value: '•', bg: '#F5F5F5', color: '#444' },
    { type: 'wicket', value: 'w', bg: '#FF2D2D', color: '#fff' },
    { type: 'run', value: '4', bg: '#4953E7', color: '#fff' },
    { type: 'run', value: '3', bg: '#F5F5F5', color: '#444' },
    { type: 'run', value: '3', bg: '#F5F5F5', color: '#444' },
    { type: 'run', value: '6', bg: '#FF5C2A', color: '#fff' },
  ];
  return (
    <View style={overStyles.row}>
      {balls.map((ball, idx) => (
        <View
          key={idx}
          style={[overStyles.circle, { backgroundColor: ball.bg }]}
        >
          <Text style={[overStyles.circleText, { color: ball.color }]}> 
            {ball.value}
          </Text>
        </View>
      ))}
      <Text style={overStyles.overNum}>63rd</Text>
    </View>
  );
};

const overStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 24,
  },
  circle: {
    width: 34,
    height: 34,
    
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  circleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  overNum: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginLeft: 8,
  },
});

const ScoreCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Batters Section */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, {flex: 2.5, textAlign: 'left'}]}>Batters</Text>
        <Text style={styles.headerCell}>R</Text>
        <Text style={styles.headerCell}>B</Text>
        <Text style={styles.headerCell}>4s</Text>
        <Text style={styles.headerCell}>6s</Text>
        <Text style={styles.headerCell}>SR</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.nameCell, {flex: 2.5}]}>Liam Patterson-White<Text style={styles.asterisk}>*</Text></Text>
        <Text style={styles.cell}>99</Text>
        <Text style={styles.cell}>109</Text>
        <Text style={styles.cell}>10</Text>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>90.82</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.nameCell, {flex: 2.5}]}>Tom Haines</Text>
        <Text style={styles.cell}>99</Text>
        <Text style={styles.cell}>109</Text>
        <Text style={styles.cell}>10</Text>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>90.82</Text>
      </View>

      {/* Bowlers Section */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, {flex: 2.5, textAlign: 'left'}]}>Bowlers</Text>
        <Text style={styles.headerCell}>O</Text>
        <Text style={styles.headerCell}>M</Text>
        <Text style={styles.headerCell}>R</Text>
        <Text style={styles.headerCell}>W</Text>
        <Text style={styles.headerCell}>Econ</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.nameCell, {flex: 2.5}]}>Dunith Wellalage</Text>
        <Text style={styles.cell}>6</Text>
        <Text style={styles.cell}>3</Text>
        <Text style={styles.cell}>45</Text>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>4.82</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.nameCell, {flex: 2.5}]}>Lasith Embuldeniya</Text>
        <Text style={styles.cell}>12</Text>
        <Text style={styles.cell}>6</Text>
        <Text style={styles.cell}>26</Text>
        <Text style={styles.cell}>3</Text>
        <Text style={styles.cell}>7.82</Text>
      </View>

      {/* Last Bat Section */}
      <Text style={styles.lastBat}>
        <Text style={{ fontWeight: 'bold'}}>Last Bat: </Text>
        Jamie Smith b Manasinghe 23 (23b 3x4 0x6) {"\n"}
        SR: 100 • FOW: 333/6 (61.3 ov)
      </Text>
      <OverSummary/>
      <Text style={{fontSize:17,fontWeight:'600',textAlign:'left',lineHeight:25}}>
        Match Center
      </Text>
      <OverSummaryCard/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingVertical: 6,
    paddingHorizontal:12,
    borderRadius:30,
    alignItems: 'center',
    marginBottom:8,
    marginTop:8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal:12,
    alignItems: 'center',
  },
  nameCell: {
    fontSize: 14,
    textAlign: 'left',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  asterisk: {
    color: 'red',
    fontSize: 12,
  },
  lastBat: {
    marginTop: 20,
    fontSize: 13,
    color: '#444',
    padding:8,
    backgroundColor:'#F5F5F5',
    lineHeight: 20,
    borderRadius:8
  },
});

export default ScoreCard;