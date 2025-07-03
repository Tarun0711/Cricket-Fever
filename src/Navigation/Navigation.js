import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import Home from '../ui/screens/Home';
import Matches from '../ui/screens/Matches';
import MatchOverview from '../ui/screens/MatchOverview';
import TeamOverview from '../ui/screens/TeamOverview';
import CricketNewsCard from '../ui/components/TeamOverview/News';
import Highlights from '../ui/components/TeamOverview/Highlights';
import TeamRankingScreen from '../ui/screens/TeamRankingScreen';
import Ranking from '../ui/screens/Ranking';
import Players from '../ui/screens/Players'
import PlayerSelection from '../ui/screens/PlayerSelection';
// Create navigator
const Stack = createNativeStackNavigator();

// Main Navigation
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TeamOverview"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="Matches"
        component={Matches}
        options={{
          title: 'Home',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="MatchOverview"
        component={MatchOverview}
        options={{
          title: 'Match Overview',
          headerShown: false,
        }}
        />
             <Stack.Screen
        name="TeamOverview"
        component={TeamOverview}
        options={{
          title: 'Team Overview',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="News"
        component={CricketNewsCard}
        options={{
          title: 'Team Overview',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="Highlights"
        component={Highlights}
        options={{
          title: 'Highlights',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="TeamRanking"
        component={TeamRankingScreen}
        options={{
          title: 'TeamRanking',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
          title: 'Ranking',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="Players"
        component={Players}
        options={{
          title: 'Players',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="PlayerSelection"
        component={PlayerSelection}
        options={{
          title: 'PlayerSelection',
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
