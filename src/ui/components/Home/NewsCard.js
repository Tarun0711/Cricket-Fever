import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { getCricketNews } from '../../../services/apiCalls/newsApi';

const CricketCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: news?.coverImageBase64 }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.captionContainer}>
        <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
          <Text style={styles.caption}>
            {news?.hline}
          </Text>
        </BlurView>
      </View>
    </View>
  );
};

export default CricketCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    margin: 6,
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 220,
  },
  captionContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  blurContainer: {
    padding: 12,
  },
  caption: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
  },
});
