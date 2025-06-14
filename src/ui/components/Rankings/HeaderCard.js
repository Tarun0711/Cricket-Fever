import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HeaderCard = ({ imageUrl, label }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default HeaderCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1B6FDE',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:'center',
    width: 100,
    height:94,
  },
  imageWrapper: {
    borderRadius: 32,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  label: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
})