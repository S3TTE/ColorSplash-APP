
// app/index.js
import { Link } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const categories = [
  { id: 'animals', title: 'Animal Sounds' },
  { id: 'instruments', title: 'Musical Instruments' },
  { id: 'nature', title: 'Nature Sounds' },
];

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Audio Categories</Text>
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`} style={styles.link}>
          <Text style={styles.linkText}>{category.title}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  linkText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});