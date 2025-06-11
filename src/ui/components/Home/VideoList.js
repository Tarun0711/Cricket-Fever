import React, { useState, useRef } from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

const videoData = [
  {
    id: '1',
    thumbnail: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347900/347950.3.jpg',
    title: "Finn Allen 'made life easy for me' in first T20I",
    duration: '4:00',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '2',
    thumbnail: 'https://i.ytimg.com/vi/XSGBVzeBUbk/maxresdefault.jpg',
    title: 'Match Highlights – India vs Australia',
    duration: '5:20',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const VideoList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => handlePlay(item.videoUrl)}
      >
        <Ionicons name="play-circle" size={50} color="white" />
      </TouchableOpacity>
      <Text style={styles.duration}>{item.duration}</Text>
      <View style={styles.caption}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedVideo(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.videoContainer}>
            {selectedVideo && (
              <Video
                ref={videoRef}
                style={styles.video}
                source={{ uri: selectedVideo }}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay
              />
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
                setSelectedVideo(null);
              }}
            >
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 10,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 15,
    backgroundColor: '#fff',
    elevation: 3,
    height: 200,
    width: 200,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: 155/2 - 25,
    left: 186 / 2 - 25,
    zIndex: 1,
  },
  duration: {
    position: 'absolute',
    bottom: 60,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius:40,
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    marginTop: 4,
    fontSize: 11,
    lineHeight:15,
    color: 'black',
    fontWeight:'500',
  },
  videoContainer: {
    width: width-20,
    height: height / 4,
    position:'absolute',
    top:10,
    backgroundColor: '#000',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#00000099',
    padding: 5,
    borderRadius: 30,
    zIndex: 1,
  },
});

export default VideoList;
