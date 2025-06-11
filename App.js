import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
