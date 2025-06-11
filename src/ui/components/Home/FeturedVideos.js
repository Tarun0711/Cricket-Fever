import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoList from './VideoList'

const FeturedVideos = () => {
  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
        <Text style={styles.title}>Featured Videos</Text>
        <Text style={styles.showMore}>Show more</Text>
    </View>
    <VideoList/>
    </View>
  )
}

export default FeturedVideos

const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    title:{
        color:'white',
        fontSize:20,
        lineHeight:25,
        fontWeight:700,
    },
    showMore: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 15,
        color: '#D1E2F8',
    },
})