import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabSelector() {
  const [activeTab, setActiveTab] = useState('Test');

  const tabs = ['Test', 'ODI', 'T20I'];

  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={activeTab === tab ? styles.activeTabText : styles.inactiveTabText}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 20,
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
