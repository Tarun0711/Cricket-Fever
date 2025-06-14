import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderCard from '../components/Rankings/HeaderCard';
import TeamRankingCard from '../components/Rankings/TeamRankingCard';

const newsData = [{
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    category: 'News',
    title: "Yasir Arafat on Mickey Arthur's radar to be Pakistan's new bowling coach",
    date: 'Dec 5, 2022',
    time: '5:30 min',
  },{
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    category: 'Match Report',
    title: "India clinches thrilling victory against Australia in T20 series opener",
    date: 'Dec 6, 2022',
    time: '4:15 min',
  },{
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    category: 'Analysis',
    title: "Breaking down England's new batting strategy in ODI cricket",
    date: 'Dec 7, 2022',
    time: '6:20 min',
  },{
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    category: 'Transfer News',
    title: "Major IPL auction updates: Teams reveal their strategies",
    date: 'Dec 8, 2022',
    time: '3:45 min',
  }]
  
const data=[
    {
        label:'Team',
        imageUrl:'https://thebridge.in/h-upload/2024/02/14/52524-titas-sadhu-1.webp'
    },
    {
        label:'Player',
        imageUrl:'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/Best-cricket-players-2024-283d079.jpg'
    },
    {
        label:'All Player',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lJyOBXxhcnq9j8MnGY6qooMlY4jQLpY7YA&s'
    },
    {
        label:'Predictor',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8MEWqaFAAG9hlnntg3MkHLgRBZeYwdlrVg&s'
    }
]

const Ranking = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Header}>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color="#C6DDFF" style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>Search...</Text>
          </View>
          <Text style={styles.rankingTitle}>
            ICC Rankings
          </Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {data.map((item, index) => (
              <HeaderCard 
                key={index}
                imageUrl={item.imageUrl}
                label={item.label}
              />
            ))}
          </ScrollView>
        </View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.newsList}
      >
        <View style={styles.contentContainer}>
        <Text style={styles.Title}>
            Top Rankings
          </Text>
          <TeamRankingCard/>
          <Text style={styles.Title2}>
        Ranking News
          </Text>

        {newsData.map((item, index) => (
          <View key={index} style={styles.newsCard}>
            <Image source={{ uri: item.image }} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <Text style={styles.newsCategory}>{item.category}</Text>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <View style={styles.newsMeta}>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsTime}>{item.time}</Text>
              </View>
            </View>
          </View>
        ))}
        </View>
        </ScrollView>
    </View>
  )
}

export default Ranking

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    Header:{
        height:300,
        backgroundColor:'#327EE1',
        borderBottomLeftRadius:28,
        borderBottomRightRadius:28,
        marginHorizontal:1,
        paddingHorizontal:24
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1B6FDE',
        borderRadius: 32,
        paddingHorizontal: 16,
        height: 46,
        width:'100%',
        alignSelf: 'center',
        marginTop:60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchPlaceholder: {
        color: '#C6DDFF',
        fontSize: 17,
        fontWeight: '400',
    },
    rankingTitle: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '600',
        color: '#fff',
        marginTop: 30,
        marginBottom: 20
    },
    scrollViewContent: {
        paddingRight: 24,
        gap: 16
    },
    contentContainer:{
        padding:16,
        paddingHorizontal:24
    },
    Title:{
        fontSize:20,
        fontWeight:'600',
    },
    Title2:{
        fontSize:20,
        fontWeight:'600',
        marginTop:90,
        marginBottom:16,
    },

    newsList: {

        paddingBottom: 20,
      },
      newsCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
      },
      newsImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      },
      newsContent: {
        padding: 16,
      },
      newsCategory: {
        color: '#666',
        fontSize: 14,
        marginBottom: 8,
      },
      newsTitle: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22,
        marginBottom: 12,
      },
      newsMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      newsDate: {
        color: '#666',
        fontSize: 12,
      },
      newsTime: {
        color: '#666',
        fontSize: 12,
      },
})