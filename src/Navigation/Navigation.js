import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import Home from '../ui/screens/Home';
import Matches from '../ui/screens/Matches';
import MatchOverview from '../ui/screens/MatchOverview';
// Create navigator
const Stack = createNativeStackNavigator();

// Main Navigation
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MatchOverview"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
