import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onFilterPress }) {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text style={styles.title}>Team Rankings</Text>
      <Ionicons name="options" size={22} color="black" onPress={onFilterPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop:70,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Shadow property for Android
    elevation: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
