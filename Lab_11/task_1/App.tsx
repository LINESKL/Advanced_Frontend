import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <ProfileCard 
          name="John Doe" 
          role="React Native Developer" 
          bio="I love building mobile apps!" 
          avatar="https://via.placeholder.com/150" 
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});