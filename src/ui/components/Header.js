import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Header = () => {
  const hasNotifications = true;

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://super.abril.com.br/wp-content/uploads/2018/07/566ee0ae82bee174ca0300dahomer-simpson.jpeg?crop=1&resize=1212,909',
            }}
          />
          <View style={styles.userText}>
            <Text style={styles.name}>Homar Simpson</Text>
            <Text style={styles.username}>@homarsimpson</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.notification}>
            <Ionicons name="notifications" size={24} color="#D6D6D6" />
          {hasNotifications && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <Feather name="mic" size={18} color="#999" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userText: {
    marginLeft: 10,
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize:20,
    lineHeight: 25,
    fontWeight: '700',
  },
  username: {
    color: '#A6A6A6',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  },
  notification: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E8503A',
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchBar: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 46,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 14,
  },
});
