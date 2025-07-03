import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import TeamTopNavigation from '../components/TeamOverview/TeamTopNavigation';
import { Ionicons } from '@expo/vector-icons';
import TabSelector from '../components/Rankings/TabSelector';
import PlayerCard from '../components/Rankings/PlayerCard';
import RankingCard from '../components/Rankings/RankingCard';

const batsmen = [
  {
    playerImage: 'https://images.indianexpress.com/2025/04/VIRAT-KOHLI-IPL-2025.jpg',
    playerName: 'Virat Kohli',
    playerRole: 'Batsman',
    dateOfBirth: '15 OCT 1994',
    battingStyle: 'Right Hand',
    bowlingStyle: 'Right-Arm Off Spin',
  },
  {
    playerImage: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/rohit-sharma-311159541-3x4.jpg',
    playerName: 'Rohit Sharma',
    playerRole: 'Batsman',
    dateOfBirth: '22 JUN 1994',
    battingStyle: 'Right Hand',
    bowlingStyle: 'Right-Arm Leg Spin',
  },
  {
    playerImage: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/rohit-sharma-311159541-3x4.jpg',
    playerName: 'Steve Smith',
    playerRole: 'Batsman',
    dateOfBirth: '02 JUN 1989',
    battingStyle: 'Right Hand',
    bowlingStyle: 'Right-Arm Leg Spin',
  },
  {
    playerImage: 'https://images.indianexpress.com/2025/04/VIRAT-KOHLI-IPL-2025.jpg',
    playerName: 'Kane Williamson',
    playerRole: 'Batsman',
    dateOfBirth: '08 AUG 1990',
    battingStyle: 'Right Hand',
    bowlingStyle: 'Right-Arm Off Spin',
  },
  {
    playerImage: 'https://images.indianexpress.com/2025/04/VIRAT-KOHLI-IPL-2025.jpg',
    playerName: 'Joe Root',
    playerRole: 'Batsman',
    dateOfBirth: '30 DEC 1990',
    battingStyle: 'Right Hand',
    bowlingStyle: 'Right-Arm Off Spin',
  },
];
const topRankedPlayers = [
    {
      position: 1,
      playerName: 'Marnus Labuschagne',
      playerImage: 'https://images.indianexpress.com/2025/04/VIRAT-KOHLI-IPL-2025.jpg',
      points: 3668,
      rating: 126,
    },
    {
      position: 3,
      playerName: 'Babar Azam',
      playerImage: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/rohit-sharma-311159541-3x4.jpg',
      points: 3690,
      rating: 115,
    },
];

const PlayerSelection = ({ navigation }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([null, null]);
  const [currentSelection, setCurrentSelection] = useState(0);
  const [showComparisonDetails, setShowComparisonDetails] = useState(false);

  const handleBackPress = () => {
    if (showComparisonDetails) {
      setShowComparisonDetails(false);
    } else if (navigation) {
      navigation.goBack();
    }
  };

  const handlePlayerSelect = (player) => {
    // If player is already selected, unselect them
    if (selectedPlayers.some((p) => p?.playerName === player.playerName)) {
      const updated = selectedPlayers.map(p => 
        p?.playerName === player.playerName ? null : p
      );
      setSelectedPlayers(updated);
      return;
    }

    // Prevent selecting more than 2 players
    if (selectedPlayers[0] && selectedPlayers[1]) return;

    const updated = [...selectedPlayers];
    updated[currentSelection] = player;
    setSelectedPlayers(updated);
    setCurrentSelection(currentSelection === 0 ? 1 : 0);
  };

  const handlePlayerCardPress = (index) => {
    setCurrentSelection(index);
  };

  const handleCompare = () => {
    if (selectedPlayers[0] && selectedPlayers[1]) {
      setShowComparisonDetails(true);
    }
  };

  const isSelected = (playerName) =>
    selectedPlayers.some((p) => p?.playerName === playerName);

  return (
    <View style={styles.container}>
      <TeamTopNavigation 
        title="Player Comparison" 
        onBackPress={handleBackPress}
        navigation={navigation}
      />

      <View style={styles.row}>
        {[0, 1].map((index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handlePlayerCardPress(index)}
          >
            <View style={styles.avatarPlaceholder}>
              {selectedPlayers[index] ? (
                <Image
                  source={{ uri: selectedPlayers[index].playerImage }}
                  style={styles.avatarImage}
                />
              ) : (
                <Ionicons name="person" size={36} color="#BDBDBD" />
              )}
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Select Player {index + 1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TabSelector />

      {!showComparisonDetails ? (
        <ScrollView style={styles.playerList}>
          <Text style={styles.sectionTitle}>Top Batsmen</Text>
          {batsmen.map((player, index) => (
            <PlayerCard
              key={`batsman-${index}`}
              playerImage={player.playerImage}
              playerName={player.playerName}
              playerRole={player.playerRole}
              onSelect={() => handlePlayerSelect(player)}
              isSelected={isSelected(player.playerName)}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.comparisonDetailsContainer}>
          {[
            ['D.O.B', 'dateOfBirth'],
            ['Role', 'playerRole'],
            ['Batting', 'battingStyle'],
            ['Bowling', 'bowlingStyle'],
          ].map(([label, key]) => (
            <View key={key} style={styles.comparisonRow}>
              <Text style={styles.comparisonValue}>{selectedPlayers[0]?.[key]}</Text>
              <Text style={styles.comparisonLabel}>{label}</Text>
              <Text style={styles.comparisonValue}>{selectedPlayers[1]?.[key]}</Text>
            </View>
          ))}
          
          <Text style={styles.sectionTitle}>Batting Rankings</Text>
          <View style={styles.rankingHeaderContainer}>
            <Text style={styles.rankingHeaderTextPosition}>Pos</Text>
            <View style={styles.rankingHeaderAvatarSpace} />
            <Text style={styles.rankingHeaderTextPlayer}>Player</Text>
            <Text style={styles.rankingHeaderTextPoints}>PTS</Text>
            <Text style={styles.rankingHeaderTextRating}>Rating</Text>
          </View>
          <View style={styles.rankingHeaderSeparator} />
          {topRankedPlayers.map((player, index) => (
            <RankingCard
              key={`ranked-${index}`}
              position={player.position}
              playerName={player.playerName}
              playerImage={player.playerImage}
              points={player.points}
              rating={player.rating}
            />
          ))}
        </View>
      )}

      {selectedPlayers[0] && selectedPlayers[1] && !showComparisonDetails && (
        <View style={styles.compareButtonContainer}>
          <TouchableOpacity style={styles.compareButton} onPress={handleCompare}>
            <Text style={styles.compareButtonText}>Compare Players</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30,
      paddingHorizontal: 16,
    },
    cardContainer: {
      alignItems: 'center',
    },
    avatarPlaceholder: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      borderRadius: 35,
    },
    labelContainer: {
      backgroundColor: '#FAFAFA',
      borderRadius: 24,
      paddingHorizontal: 16,
      paddingVertical: 6,
    },
    label: {
      color: '#333',
      fontSize: 13,
    },
    playerList: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      paddingHorizontal: 6,
      marginBottom: 10,
      marginTop:24
    },
    compareButtonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 16,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    compareButton: {
      backgroundColor: '#F06436',
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    compareButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    comparisonDetailsContainer: {
      flex: 1,
      padding: 16,
    },
    comparisonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
    },
    comparisonLabel: {
      fontSize: 15,
      color: '#7A7A7A',
      fontWeight: '400',
    },
    comparisonValue: {
      fontSize: 15,
      color: '#333',
      fontWeight: '600',
      maxWidth: '30%',
      textAlign: 'start',
    },
    rankingHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginTop: 20,
      marginBottom: 10,
    },
    rankingHeaderTextPosition: {
      fontSize: 14,
      color: '#7A7A7A',
      fontWeight: 'bold',
      width: 30,
      textAlign: 'center',
    },
    rankingHeaderTextPlayer: {
      flex: 1,
      fontSize: 14,
      color: '#7A7A7A',
      fontWeight: 'bold',
    },
    rankingHeaderAvatarSpace: {
      width: 36 + 8 + 8, // Match avatar width + horizontal margins
    },
    rankingHeaderTextPoints: {
      fontSize: 14,
      color: '#7A7A7A',
      fontWeight: 'bold',
      marginRight: 16,
    },
    rankingHeaderTextRating: {
      fontSize: 14,
      color: '#7A7A7A',
      fontWeight: 'bold',
    },
    rankingHeaderSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
      marginHorizontal: 16,
      marginBottom: 8,
    },
  });
  
export default PlayerSelection;
