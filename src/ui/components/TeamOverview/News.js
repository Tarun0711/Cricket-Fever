import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TeamTopNavigation from './TeamTopNavigation';
import Feather from 'react-native-vector-icons/Feather';
import NewsCard from './NewsCard';
// Data Object
const newsData = {
  image: 'https://images.indianexpress.com/2023/10/Virat-Kohli-7.jpg',
  tags: ['#Cricket', '#CUP', '#ICC'],
  label: 'NEWS',
  headline:
    "Chandika Hathurusingha's return draws mixed reactions from Bangladesh cricket fraternity",
  subtext:
    '"A huge question mark remains on how the dressing room will take him," Mashrafe Mortaza says',
};
const newsData1 = [{
  image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
  category: 'News',
  title: "Yasir Arafat on Mickey Arthur's radar to be Pakistan's new bowling coach",
  date: 'Dec 5, 2022',
  time: '5:30 min',
}, {
  image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
  category: 'Match Report',
  title: "India clinches thrilling victory against Australia in T20 series opener",
  date: 'Dec 6, 2022',
  time: '4:15 min',
}, {
  image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
  category: 'Analysis',
  title: "Breaking down England's new batting strategy in ODI cricket",
  date: 'Dec 7, 2022',
  time: '6:20 min',
}, {
  image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
  category: 'Transfer News',
  title: "Major IPL auction updates: Teams reveal their strategies",
  date: 'Dec 8, 2022',
  time: '3:45 min',
}]

const CricketNewsCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TeamTopNavigation title={'🇧🇩 Bangladesh News'} navigation={navigation} />
      <ScrollView>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={{ uri: newsData.image }}
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay} />
          </ImageBackground>
          <View style={styles.tagsContainer}>
            {newsData.tags.map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.newsLabel}>{newsData.label}</Text>
            <Text style={styles.headline}>{newsData.headline}</Text>
            <Text style={styles.subtext}>{newsData.subtext}</Text>
          </View>

          {/* News Detail Card */}
          <View style={styles.detailCardContainer}>
            <View style={styles.detailHeader}>
              <View style={styles.authorAndShareContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy8sROSeFJylYcKV83tfinL9JnPhhOIRMLA&s' }}
                    style={styles.avatar}
                    imageStyle={{ borderRadius: 20 }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.authorName}>Mohammad Isam</Text>
                    <Text style={styles.dateText}>02-Feb-2023 • -1066 mins ago</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.shareButton} onPress={() => { /* Share logic here */ }}>
                  <Feather name="share-2" size={20} color="#333" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailText}>
                The BCB announced Hathurusingha as their new coach on Tuesday, four weeks after{' '}
                <Text style={styles.highlightText}>Russell Domingo resigned</Text> following suggestions from the board that they were looking for a new coach.{"\n\n"}
                Hathurusingha was on BCB's wishlist for a long time even after he had resigned from the post in October 2017.{"\n\n"}
                This, despite his successors Steve Rhodes (2018-19) and Domingo (2019–22) having a better win percentage than Hathurusingha.
              </Text>
            </View>
          </View>
          <View style={styles.recommendSection}>
            <View style={styles.recommendHeader}>
              <Text style={styles.recommendTitle}>You May Like</Text>
              <TouchableOpacity>
                <Text style={styles.showMore}>Show More</Text>
              </TouchableOpacity>
            </View>
            {newsData1.map((item, index) => (
              <View key={index} style={styles.newsCard}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.newsImage}
                  imageStyle={{ borderRadius: 12 }}
                />
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 280,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // borderRadius: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginTop: 18,
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
  contentContainer: {
    padding: 16,
  },
  newsLabel: {
    color: '#777',
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  headline: {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    marginBottom: 10,
  },
  subtext: {
    color: '#666',
    fontSize: 14,
  },
  detailCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    // margin: 16,
    marginTop: 0,
  },
  detailHeader: {
    marginBottom: 12,
  },
  authorAndShareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  authorName: {
    color: '#222',
    fontWeight: '700',
    fontSize: 16,
  },
  dateText: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 2,
  },
  detailContent: {
    marginTop: 4,
  },
  detailText: {
    color: '#7A7A7A',
    fontSize: 13,
    lineHeight: 22,
  },
  highlightText: {
    color: '#992DFF',
    fontWeight: 'bold',
  },
  shareButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginLeft: 10,
  },
  shareIcon: {
    fontSize: 18,
  },
  recommendSection: {
    marginTop: 4,
    paddingHorizontal: 16,
  },
  recommendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recommendTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#121212',
  },
  showMore: {
    fontSize: 11,
    color: '#B8B8B8',
    fontWeight: '600',
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

export default CricketNewsCard;
