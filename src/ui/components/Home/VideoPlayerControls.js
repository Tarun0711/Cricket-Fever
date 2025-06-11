import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, PanResponder, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import * as Brightness from 'expo-brightness';

const { width, height } = Dimensions.get('window');

const VideoPlayerControls = ({
  videoRef,
  selectedVideo,
  onClose,
  videoDimensions,
  position,
  panHandlers,
  onVideoLoad,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [currentBrightness, setCurrentBrightness] = useState(1);
  const controlHideTimeout = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        const brightness = await Brightness.getSystemBrightnessAsync();
        setCurrentBrightness(brightness);
      } else {
        Alert.alert('Permission required', 'Brightness permission is needed to adjust screen brightness.');
      }
    })();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      resetControlHideTimeout();
    } else {
      clearTimeout(controlHideTimeout.current);
      setShowControls(true);
    }
    return () => clearTimeout(controlHideTimeout.current);
  }, [isPlaying]);

  const resetControlHideTimeout = () => {
    clearTimeout(controlHideTimeout.current);
    controlHideTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 5000); // Hide controls after 5 seconds of inactivity
  };

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
      resetControlHideTimeout();
    }
  };

  const handleTap = () => {
    setShowControls((prev) => !prev);
    resetControlHideTimeout();
  };

  const handleBrightnessChange = async (value) => {
    setCurrentBrightness(value);
    await Brightness.setSystemBrightnessAsync(value);
  };

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.touchableArea} activeOpacity={1} onPress={handleTap}>
        <View
          {...panHandlers}
          style={[
            styles.videoContainer,
            {
              width: videoDimensions.width,
              height: videoDimensions.height,
              transform: [{ translateX: position.x }, { translateY: position.y }],
            },
          ]}
        >
          <Video
            ref={videoRef}
            source={{ uri: selectedVideo }}
            useNativeControls={false} // We will implement custom controls
            resizeMode="contain"
            shouldPlay
            style={styles.video}
            onLoad={onVideoLoad}
            onPlaybackStatusUpdate={(status) => setIsPlaying(status.isPlaying)}
          />
        </View>

        {showControls && (
          <View style={styles.controlsOverlay}>
            {/* Top Bar */}
            <View style={styles.topControls}>
              <TouchableOpacity style={styles.backButton} onPress={onClose}>
                <Ionicons name="arrow-back" size={28} color="white" />
              </TouchableOpacity>
              <Text style={styles.videoTitle}>S1 E1 The Second Coming</Text>
              <View style={styles.rightTopControls}>
                <Ionicons name="cast" size={24} color="white" style={styles.icon} />
                <Ionicons name="lock-closed" size={24} color="white" style={styles.icon} />
                <Ionicons name="scan-outline" size={24} color="white" style={styles.icon} />
              </View>
            </View>

            {/* Center Controls */}
            <View style={styles.centerControls}>
              <TouchableOpacity style={styles.skipButton}>
                <Ionicons name="play-back" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
                <Ionicons name={isPlaying ? "pause" : "play"} size={60} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.skipButton}>
                <Ionicons name="play-forward" size={40} color="white" />
              </TouchableOpacity>
            </View>

            {/* Bottom Bar - Placeholders for now */}
            <View style={styles.bottomControls}>
              <TouchableOpacity style={styles.bottomControlItem}>
                <Text style={styles.bottomControlText}>Episodes</Text>
                <Ionicons name="chevron-up" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomControlItem}>
                <Ionicons name="videocam-outline" size={20} color="white" />
                <Text style={styles.bottomControlText}>Quality Low</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomControlItem}>
                <Ionicons name="chatbox-ellipses-outline" size={20} color="white" />
                <Text style={styles.bottomControlText}>Audio & Subtitles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomControlItem}>
                <Text style={styles.bottomControlText}>Next Episode</Text>
                <Ionicons name="play-forward-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Brightness Control */}
            <View style={styles.brightnessControl}>
              <Ionicons name="sunny-outline" size={24} color="white" />
              <View style={styles.brightnessSliderTrack}>
                {/* This will be replaced by the Slider component */}
                <View style={[styles.brightnessThumb, { height: `${currentBrightness * 100}%` }]} />
              </View>
              <Ionicons name="sunny" size={24} color="white" />
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableArea: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    position: 'absolute',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topControls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40, // Adjust for notch/status bar
  },
  backButton: {
    padding: 5,
  },
  videoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  rightTopControls: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  centerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  skipButton: {
    padding: 10,
  },
  playPauseButton: {
    padding: 10,
  },
  bottomControls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40, // Adjust for home indicator
    backgroundColor: 'rgba(0,0,0,0.6)', // Slightly darker background for bottom bar
  },
  bottomControlItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomControlText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  brightnessControl: {
    position: 'absolute',
    left: 20,
    top: height / 2 - 75, // Adjusted to make space for top/bottom icons
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    height: 150, // Height for the vertical slider track
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brightnessSliderTrack: {
    width: 5, // Width of the track
    backgroundColor: '#555',
    borderRadius: 5,
    flex: 1,
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  brightnessThumb: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default VideoPlayerControls; 