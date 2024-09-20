import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { colorCategory } from '../constants/Colors'

const categories = [
  { id: 'red', title: 'Red', color: '#FF0000' },
  { id: 'blue', title: 'Blue', color: '#0000FF' },
  { id: 'green', title: 'Green', color: '#00FF00' },
  { id: 'yellow', title: 'Yellow', color: '#FFFF00' },
];

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Color Categories</Text>
      <Text style={styles.debug}>Screen Width: {screenWidth}</Text>
      <Text style={styles.debug}>Screen Height: {screenHeight}</Text>
      <View style={styles.categoriesContainer}>
        {colorCategory.map((item) => (
          <Link key={item.id} href={`/category/${item.id}`} asChild>
            <TouchableOpacity style={[styles.categoryButton, { backgroundColor: item.color }]}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  debug: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  categoriesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  categoryButton: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});