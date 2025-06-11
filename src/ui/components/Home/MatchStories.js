import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import CricketCard from './NewsCard';

const DATA = [
    { id: '1', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/ms-dhoni.jpg' }, title: 'MS Dhoni' },
    { id: '2', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg' }, title: 'Virat Kohli' },
    { id: '3', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/rohit-sharma.jpg' }, title: 'Rohit Sharma' },
    { id: '4', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/kl-rahul.jpg' }, title: 'KL Rahul' },
    { id: '5', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/jasprit-bumrah.jpg' }, title: 'Jasprit Bumrah' },
    { id: '6', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/jasprit-bumrah.jpg' }, title: 'Jasprit Bumrah' },
    { id: '7', image: { uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/jasprit-bumrah.jpg' }, title: 'Jasprit Bumrah' },

];

const MatchStories = () => {
  const renderItem = ({ item }) => (
    <View style={[
      styles.storyItem,
      item.id === '2' ? styles.activeStoryItem : styles.inactiveStoryItem
    ]}>
      <Image source={item.image} style={styles.storyImage} />
      {/* <Text style={styles.storyTitle}>{item.title}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Match Stories</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <CricketCard/>
    </View>
  )
}

export default MatchStories

const styles = StyleSheet.create({
    container:{
        padding:24,
        
    },
    title:{
        color:'white',
        fontSize:20,
        lineHeight:25,
        fontWeight:700,
        marginBottom:12,
    },
    storyItem: {
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1.5,
        padding: 5,
        overflow: 'hidden',
        height: 60,
        width: 60,
    },
    activeStoryItem: {
        borderColor: 'white',
    },
    inactiveStoryItem: {
        borderColor: '#848484',
    },
    storyImage: {
        width: 50,
        height: 50,
        borderRadius: 40,
        resizeMode: 'cover',
    },
    storyTitle: {
        marginTop: 5,
        fontSize: 12,
        color: '#333',
    }
})