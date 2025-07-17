import { StyleSheet, Text, View, FlatList, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import MatchCard from '../Home/MatchCard';
import { getCricketNews } from '../../../services/apiCalls/newsApi';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUpcomingMatchesByCountry } from '../../../hooks/useUpcomingMatchesByCountry';

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const [news, setNews] = useState([]);
  const { data, isLoading, error } = useUpcomingMatchesByCountry('BGD');
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getCricketNews();
        setNews(newsData?.newsList);
        console.log(news)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    const matchesLength = data?.data?.matches?.length || 0;
    if (matchesLength === 0) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= matchesLength) nextIndex = 0;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, data]);

  return (
    isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#222" />
      </View>
    ) : (
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming Matches</Text>
        <View style={styles.shadowWrraper}>
          <FlatList
            ref={flatListRef}
            data={data?.data?.matches || []}
            keyExtractor={(item, index) => index}
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
            style={{ borderRadius: 30 }}
            getItemLayout={(data, index) => ({
              length: windowWidth,
              offset: windowWidth * index,
              index,
            })}
            contentContainerStyle={{}}
          />
        </View>
        <View style={styles.dotsContainer}>
          {data?.data?.matches?.map((item, idx) => (
            <View
              key={item.key.toString()}
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
          {news.map((item, index) => (
     <TouchableOpacity
     key={index}
     style={styles.newsCard}
     onPress={() => navigation.navigate('News', { news: item })}
   >
                <Image
                  source={{
                    uri: item.urlToImage && item.urlToImage.trim() !== ''
                      ? item.urlToImage
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN1B_T6ONRC2ZuOX9hESM_DYAz7VDHsOXI-rF60altHq5qhc1RriQk0X3Q6rD0U4w7gQ&usqp=CAU'
                  }}
                  defaultSource={{
                    uri: item.urlToImage && item.urlToImage.trim() !== ''
                      ? item.urlToImage
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN1B_T6ONRC2ZuOX9hESM_DYAz7VDHsOXI-rF60altHq5qhc1RriQk0X3Q6rD0U4w7gQ&usqp=CAU'
                  }}
                  style={styles.newsImage}
                />
                <View style={styles.newsContent}>
                  <Text style={styles.newsCategory}>{item.source.name}</Text>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <View style={styles.newsMeta}>
                    <Text style={styles.newsDate}>{item.publishedAt}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 25,
    width: '100%',
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
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
  shadowWrraper: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '100%',
    marginHorizontal: -16,
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
