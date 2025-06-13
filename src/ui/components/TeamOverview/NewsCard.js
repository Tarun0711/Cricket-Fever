import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const NewsCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.category}>{data.category}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{data.date}</Text>
          <Text style={styles.dot}> • </Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.9,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 13,
    color: '#666',
  },
  dot: {
    fontSize: 13,
    color: '#666',
    marginHorizontal: 4,
  },
  time: {
    fontSize: 13,
    color: '#666',
  },
});
