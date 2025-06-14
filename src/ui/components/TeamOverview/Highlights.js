import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import YouMayLike from './YouMayLike'
const newsData = {
  image: 'https://images.indianexpress.com/2023/10/Virat-Kohli-7.jpg',
  tags: ['#Cricket', '#CUP', '#ICC'],
  label: 'NEWS',
  headline:
    "Chandika Hathurusingha's return draws mixed reactions from Bangladesh cricket fraternity",
  subtext:
    '"A huge question mark remains on how the dressing room will take him," Mashrafe Mortaza says',
};

const Highlights = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: newsData.image }}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Highlights</Text>
        </View>
      </ImageBackground>
      <View style={styles.tagsContainer}>
            {newsData.tags.map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.headline}>{newsData.headline}</Text>
        <Text style={styles.subtext}>{newsData.subtext}</Text>
        <View style={styles.dateShareContainer}>
          <Text style={styles.date}>Nov 14, 2022</Text>
          <TouchableOpacity>
            <Feather name="share-2" size={20} color="#333" />
          </TouchableOpacity>
        </View>
        <YouMayLike/>
      </View>
    </View>
  )
}

export default Highlights

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 380,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 11,
    color: '#7A7A7A',
    marginBottom: 8,
  },
  date: {
    fontSize: 11,
    color: '#888',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginTop: 12,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 22,
    marginHorizontal: 6,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },
  dateShareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})