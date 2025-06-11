import React from "react";
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from "react-native";

const CARD_WIDTH = 100;
const CARD_HEIGHT = 117;

const EventCard = ({ title, year, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
    </View>
  );
};

const HorizontalCardList = () => {
  const events = [
    { id: 1, title: "World Cup", year: 2025, imageUrl: "https://crystalpng.com/wp-content/uploads/2023/10/cricket-worlcup-logo-india-2023.png" },
    { id: 2, title: "Champions Trophy", year: 2026, imageUrl: "https://crystalpng.com/wp-content/uploads/2025/02/icc-champions-trophy-logo.png" },
    { id: 3, title: "Asia Cup", year: 2025, imageUrl: "https://i.pinimg.com/736x/80/df/44/80df44a4af1a8576f385200ca9bb660f.jpg" },
    { id: 4, title: "T20 World Cup", year: 2024, imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/2024_ICC_Men%27s_T20_World_Cup_logo.svg/1200px-2024_ICC_Men%27s_T20_World_Cup_logo.svg.png" },
    { id: 5, title: "IPL", year: 2025, imageUrl: "https://cdn.zeebiz.com/hindi/sites/default/files/2025/03/20/215341-ipl-2025.png?im=FitAndFill=(1200,900)" },
    { id: 6, title: "The Ashes", year: 2026, imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/2023_Ashes_series_logo.png" },
    { id: 7, title: "WTC Final", year: 2025, imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/2019%E2%80%932021_ICC_World_Test_Championship_Final.jpg" },
  ];

  return (
    <FlatList
      data={events}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH}
      snapToAlignment="start"
      decelerationRate="fast"
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <EventCard title={item.title} year={item.year} imageUrl={item.imageUrl} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom:25,
  },
  card: {
    minWidth: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal:10,
    justifyContent: "center",
    marginRight: 16,
    shadowColor: "#07071D",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 15, 
  },
  logo: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#222",
    fontWeight: "600",
    lineHeight: 18,
  },
  year: {
    fontSize: 17,
    color: "#aaa",
    marginTop: 4,
    lineHeight: 25,
    fontWeight: "400",
  },
});

export default HorizontalCardList;
