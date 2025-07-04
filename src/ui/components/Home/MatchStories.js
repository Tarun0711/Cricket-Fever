import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import CricketCard from './NewsCard';
import { getCricketNews } from '../../../services/apiCalls/newsApi';
 
const MatchStories = () => {
  const [news, setNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const flatListRef = React.useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getCricketNews();
        // Only keep items with a 'story' property
        const stories = (newsData.data.newsList || []).filter(item => item.story).map(item => item.story);
        setNews(stories);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setActiveIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % news.length;
          // Fade in after index changes
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
          return nextIndex;
        });
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [news, fadeAnim]);

  // Scroll FlatList to activeIndex when it changes
  useEffect(() => {
    if (flatListRef.current && news.length > 0) {
      flatListRef.current.scrollToIndex({ index: activeIndex, animated: true });
    }
  }, [activeIndex, news]);

  const handlePress = (index) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setActiveIndex(index);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(index)}>
      <View style={[
        styles.storyItem,
        index === activeIndex ? styles.activeStoryItem : styles.inactiveStoryItem
      ]}>
        <Image
          source={
            item.coverImageBase64
              ? { uri: item.coverImageBase64 }
              : { uri: `https://www.cricbuzz.com/a/img/v1/152x152/i1/c${item.imageId}/${item.hline.replace(/\s/g, '-').toLowerCase()}.jpg` }
          }
          style={styles.storyImage}
        />
        {/* <Text style={styles.storyTitle}>{item.hline}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Match Stories</Text>
      <FlatList
        ref={flatListRef}
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={activeIndex}
      />
      {news.length > 0 && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <CricketCard news={news[activeIndex]} />
        </Animated.View>
      )}
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