import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scaleFont = (size) => (SCREEN_WIDTH / 450) * size;
const OverviewTopNavigation = ({team, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>
          <Text style={styles.bold}>{team.a.name}</Text>
          <Text style={styles.vs}> vs </Text>
          <Text style={styles.bold}>{team.b.name}</Text>
        </Text>
      </View>
    </View>
  )
}

export default OverviewTopNavigation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,

    paddingBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 50,
  },
  backButton: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
    top:70,
  },
  title: {
    flexDirection: 'row',
    fontSize: scaleFont(20),
    fontWeight: '700',
    color: '#191919',
    letterSpacing: -1,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700',
    color: '#191919',
    fontSize: scaleFont(20),
  },
  vs: {
    color: '#A6A6A6',
    fontWeight: '500',
    fontSize: scaleFont(16),
  },
});