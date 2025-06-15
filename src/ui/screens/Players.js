import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TabSelector from '../components/Rankings/TabSelector';
import Header from '../components/Rankings/Header';
import RankingRow, { RankingHeader } from '../components/Rankings/RankingRow';

const Players = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const mockPlayers = [
    {
      pos: 1,
      team: 'Virat Kohli',
      flag: 'https://randomuser.me/api/portraits/men/1.jpg',
      wms: '',
      pts: 3668,
      rating: 126,
    },
    {
      pos: 2,
      team: 'Steve Smith',
      flag: 'https://randomuser.me/api/portraits/men/2.jpg',
      wms: '',
      pts: 3690,
      rating: 115,
    },
    {
      pos: 3,
      team: 'Babar Azam',
      flag: 'https://randomuser.me/api/portraits/men/3.jpg',
      wms: '',
      pts: 5017,
      rating: 107,
    },
    {
      pos: 4,
      team: 'Travis Head',
      flag: 'https://randomuser.me/api/portraits/men/4.jpg',
      wms: '',
      pts: 2965,
      rating: 102,
    },
    {
      pos: 5,
      team: 'Joe Root',
      flag: 'https://randomuser.me/api/portraits/men/5.jpg',
      wms: '',
      pts: 2965,
      rating: 126,
    },
    {
      pos: 6,
      team: 'Kane Williamson',
      flag: 'https://randomuser.me/api/portraits/men/6.jpg',
      wms: '',
      pts: 2638,
      rating: 88,
    },
    {
      pos: 7,
      team: 'Rishabh Pant',
      flag: 'https://randomuser.me/api/portraits/men/7.jpg',
      wms: '',
      pts: 2282,
      rating: 88,
    },
    {
      pos: 8,
      team: 'Usman Khawaja',
      flag: 'https://randomuser.me/api/portraits/men/8.jpg',
      wms: '',
      pts: 2198,
      rating: 79,
    },
    {
      pos: 9,
      team: 'Dimuth Karunarante',
      flag: 'https://randomuser.me/api/portraits/men/9.jpg',
      wms: '',
      pts: 1161,
      rating: 46,
    },
    {
      pos: 10,
      team: 'Rohit Sharma',
      flag: 'https://randomuser.me/api/portraits/men/10.jpg',
      wms: '',
      pts: 148,
      rating: 25,
    },
  ];

  return (
    <View>
      <Header Name={'Batting Rankings'} onFilterPress={() => setFilterVisible(true)} />
      <TabSelector />
      <ScrollView style={{ marginTop: 20 }}>
        <RankingHeader />
        {mockPlayers.map((player) => (
          <RankingRow
            key={player.pos}
            pos={player.pos}
            team={player.team}
            flag={player.flag}
            wms={player.wms}
            pts={player.pts}
            rating={player.rating}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Players

const styles = StyleSheet.create({

})