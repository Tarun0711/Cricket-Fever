import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const TAB_LIST = ['Home', 'Match & Results', 'Squads', 'Stats', 'ScoreCard']

const Tab = ({ tabs = TAB_LIST, onTabChange }) => {
  const [selected, setSelected] = useState(0)

  const handlePress = (idx) => {
    setSelected(idx)
    if (onTabChange) onTabChange(idx)
  }

  return (
    <ScrollView
      style={styles.tabScroll}
      contentContainerStyle={styles.tabContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {tabs.map((tab, idx) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selected === idx ? styles.selectedTab : styles.unselectedTab]}
          onPress={() => handlePress(idx)}
        >
          <Text style={[styles.tabText, selected === idx ? styles.selectedText : styles.unselectedText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Tab

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom:14,
    marginHorizontal:20,
    paddingRight: 30,
    marginRight:36
  },
  tab: {
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 6,
  },
  selectedTab: {
    backgroundColor: '#F06436',
  },
  unselectedTab: {
    backgroundColor: '#F5F5F5',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '400',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '500',
  },
  unselectedText: {
    color: '#555',
  },
  tabScroll: {
    flexGrow: 0,
  },
})