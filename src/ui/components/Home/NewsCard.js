import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const CricketCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347900/347950.3.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.captionContainer}>
        <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
          <Text style={styles.caption}>
            Bangladesh are behind on their World Cup -
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
    marginTop:24,
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
