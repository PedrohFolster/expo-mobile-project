import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './screens/HomeScreen';
import { theme } from './styles/theme';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="dark" />
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}); 