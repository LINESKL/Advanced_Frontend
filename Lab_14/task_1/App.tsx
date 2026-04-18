import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContactsScreen from './src/screens/ContactScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ContactsScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
