import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Tabs from '../components/Matches/Tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const Matches = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header />
      <View style={styles.contentContainer}>
        <Tabs />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    marginTop: 15,
    backgroundColor: '#1B6FDE',
    minHeight: Dimensions.get('window').height - 150
  }
})

export default Matches