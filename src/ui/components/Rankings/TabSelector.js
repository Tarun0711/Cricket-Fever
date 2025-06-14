import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabSelector() {
  return (
    <View style={styles.tabs}>
      <View style={styles.activeTab}>
        <Text style={styles.activeTabText}>Test</Text>
      </View>
      <View style={styles.inactiveTab}>
        <Text style={styles.inactiveTabText}>ODI</Text>
      </View>
      <View style={styles.inactiveTab}>
        <Text style={styles.inactiveTabText}>T20I</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: 24,
    marginHorizontal: 16,
    marginVertical: 20,
    padding: 4,
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#F06436',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13
  },
  inactiveTabText: {
    color: '#444',
    fontSize: 13
  },
});
