import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const TeamTopNavigation = ({ navigation, title, onBackPress }) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>
        <Text style={styles.bold}>{title}</Text>
      </Text>
    </View>
  )
}

export default TeamTopNavigation

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
    fontSize: 20,
    fontWeight: '700',
    color: '#191919',
    letterSpacing: -1,
    textAlign: 'center',
    flex: 1,
  },
  bold: {
    fontWeight: '700',
    color: '#191919',
    fontSize: 20,
  },
  vs: {
    color: '#A6A6A6',
    fontWeight: '500',
    fontSize: 16,
  },
});