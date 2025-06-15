import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const PlayerCard = ({ playerImage, playerName, playerRole, onSelect, isSelected }) => {
  return (
    <View style={styles.card}>
      <View style={styles.playerInfo}>
        <Image source={{ uri: playerImage }} style={styles.playerImage} />
        <View>
          <Text style={styles.playerName}>{playerName}</Text>
          <Text style={styles.playerRole}>{playerRole}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onSelect({ playerImage, playerName, playerRole }, isSelected)}>
        <AntDesign 
          name={isSelected ? "minuscircleo" : "pluscircleo"} 
          size={24} 
          backgroundColor='#F5F5F5' 
          padding={2} 
          borderRadius={80} 
          color="black" 
        />
      </TouchableOpacity>
    </View>
  )
}

export default PlayerCard

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerRole: {
    fontSize: 14,
    color: 'gray',
  },
});