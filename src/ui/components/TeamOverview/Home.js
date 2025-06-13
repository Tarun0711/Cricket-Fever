import { StyleSheet, Text, View, FlatList, Dimensions, Image, ScrollView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import MatchCard from '../Home/MatchCard';

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

const matches = [
  {
    id: 1,
    teams: { home: "SA", away: "ENG" },
    flags: {
      home: "https://flagcdn.com/w320/za.png",
      away: "https://flagcdn.com/w320/gb.png",
    },
    time: "Tomorrow • 5:00 PM • 3rd ODI",
    status: "Match yet to begin",
    venue: "Kimberley International Stadium",
  },
  {
    id: 2,
    teams: { home: "IND", away: "AUS" },
    flags: {
      home: "https://flagcdn.com/w320/in.png",
      away: "https://flagcdn.com/w320/au.png",
    },
    time: "Today • 7:00 PM • 1st T20",
    status: "Match yet to begin",
    venue: "Wankhede Stadium",
  },
  {
    id: 3,
    teams: { home: "SA", away: "ENG" },
    flags: {
      home: "https://flagcdn.com/w320/za.png",
      away: "https://flagcdn.com/w320/gb.png",
    },
    time: "Tomorrow • 5:00 PM • 3rd ODI",
    status: "Match yet to begin",
    venue: "Kimberley International Stadium",
  },
];

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= matches.length) nextIndex = 0;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Matches</Text>
      <View style={styles.shadowWrraper}>
        <FlatList
          ref={flatListRef}
          data={matches}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: windowWidth }}>
              <MatchCard match={item} />
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          snapToInterval={windowWidth}
          decelerationRate="fast"
          style={{borderRadius:30}}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index,
          })}
          contentContainerStyle={{}}
        />
      </View>
      <View style={styles.dotsContainer}>
        {matches.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              activeIndex === idx ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <Text style={[styles.heading, { marginTop: 24 }]}>Latest News</Text>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.newsList}
      >
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
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 25,
    width:'100%',
    marginVertical: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#222',
    height:10,
    width:10,
    borderRadius:10,
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
  shadowWrraper:{
    backgroundColor: 'white',
    borderRadius: 30,
    width: '100%',
    marginHorizontal:-16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 30,
  },
  newsList: {
    paddingHorizontal: 16,
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
});
