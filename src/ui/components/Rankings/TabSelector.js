import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabSelector({ activeTab, onTabChange, gender }) {
  const tabs = gender === 'women' ? ['Test', 'ODI'] : ['Test', 'ODI', 'T20I'];

  return (
    <View style={styles.tabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
          onPress={() => onTabChange(tab)}
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
