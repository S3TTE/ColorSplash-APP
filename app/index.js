import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

const categories = [
  { id: 'red', title: 'Red', color: '#FF0000' },
  { id: 'blue', title: 'Blue', color: '#0000FF' },
  { id: 'green', title: 'Green', color: '#00FF00' },
  { id: 'yellow', title: 'Yellow', color: '#FFFF00' },
];

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Home() {
  console.log('Rendering Home component');
  console.log('Screen width:', screenWidth);
  console.log('Screen height:', screenHeight);
  console.log('Categories:', categories);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Color Categories</Text>
      <Text style={styles.debug}>Screen Width: {screenWidth}</Text>
      <Text style={styles.debug}>Screen Height: {screenHeight}</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((item) => {
          console.log('Rendering category:', item.id);
          return (
            <View key={item.id} style={[styles.categoryContainer, {width: screenWidth, backgroundColor: 'rgba(0,0,0,0.1)'}]}>
              <Link href={`/category/${item.id}`} asChild>
                <TouchableOpacity style={[styles.link, { backgroundColor: item.color }]}>
                  <Text style={styles.linkText}>{item.title}</Text>
                </TouchableOpacity>
              </Link>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  debug: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  linkText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});