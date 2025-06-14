import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const recommendations = [
  {
    id: '1',
    image: 'https://images.indianexpress.com/2023/10/rohit-sharma-1.jpg',
    headline: 'Rohit Sharma leads India to victory in thrilling match',
  },
  {
    id: '2',
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/07/stokes-1564547422.jpg',
    headline: 'Ben Stokes returns to England squad for World Cup',
  },
  {
    id: '3',
    image: 'https://images.indianexpress.com/2023/10/babar-azam.jpg',
    headline: "Babar Azam's century powers Pakistan to big win",
  },
];

const YouMayLike = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>You May Like</Text>
        <TouchableOpacity onPress={() => console.log('Show More pressed')}>
          <Text style={styles.showMore}>Show More</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {recommendations.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={styles.card}
            onPress={() => console.log(`Clicked on: ${item.headline}`)}
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={styles.imageRadius}
            />
            <Text style={styles.headline} numberOfLines={2}>
              {item.headline}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#191919',
  },
  showMore: {
    fontSize: 12,
    color: '#888',
  },
  scrollContainer: {
    paddingRight: 16,
  },
  card: {
    width: 160,
    marginRight: 14,
  },
  image: {
    width: '100%',
    height: 127,
    marginBottom: 8,
  },
  imageRadius: {
    borderRadius: 10,
  },
  headline: {
    fontSize: 13,
    color: '#222',
    fontWeight: '600',
  },
});

export default YouMayLike;
