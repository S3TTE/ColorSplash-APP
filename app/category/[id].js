import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions, FlatList, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';

const colorData = {
  red: [
    { id: 1, title: 'Tomato', image: require('../../assets/app/images/dog.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
    { id: 2, title: 'Ketchup', image: require('../../assets/app/images/dog.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
    { id: 3, title: 'Apple', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/cat.mp3') },
  ],
  blue: [
    { id: 1, title: 'Water', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
    { id: 2, title: 'Ice', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/cat.mp3') },
    { id: 3, title: 'Sky', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/cat.mp3') },
  ],
  green: [
    { id: 1, title: 'Grass', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
    { id: 2, title: 'Leaf', image: require('../../assets/app/images/dog.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
  ],
  yellow: [
    { id: 1, title: 'Sun', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/cat.mp3') },
    { id: 2, title: 'Banana', image: require('../../assets/app/images/dog.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
  ],
};

const { width: screenWidth } = Dimensions.get('window');

export default function CategoryPage() {
  const { id } = useLocalSearchParams();
  const [sound, setSound] = useState();

  console.log('Rendering CategoryPage for color:', id);

  async function playSound(audio) {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(audio);
    setSound(newSound);
    await newSound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const renderColorCategory = (color) => {
    const categoryData = colorData[color] || [];
    console.log(`Rendering ${color} category with ${categoryData.length} items`);

    return (
      <View style={[styles.categoryContainer, {width: screenWidth}]} key={color}>
        <Text style={styles.title}>{color.charAt(0).toUpperCase() + color.slice(1)} Items</Text>
        <FlatList
          data={categoryData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => playSound(item.audio)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      {Object.keys(colorData).map(renderColorCategory)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});