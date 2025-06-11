import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import UpcomingMatches from './UpcomingMatches';
import MatchResults from './MatchResults';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Matches');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Matches' && styles.activeTab]}
          onPress={() => setActiveTab('Matches')}
        >
          <Text style={[styles.tabText, activeTab === 'Matches' && styles.activeTabText]}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Results' && styles.activeTab]}
          onPress={() => setActiveTab('Results')}
        >
          <Text style={[styles.tabText, activeTab === 'Results' && styles.activeTabText]}>Results</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        {activeTab === 'Matches' ? <UpcomingMatches /> : <MatchResults />}
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#D1E2F8',
    borderRadius: 30,
    height: 56,
    padding: 5,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#F04329',
  },
  tabText: {
    color: '#1B6FDE',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
}); 