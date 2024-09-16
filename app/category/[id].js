import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';

const audioData = {
  animals: [
    { id: 1, title: 'Dog', image: require('../../assets/app/images/dog.jpg'), audio: require('../../assets/app/audio/dog.mp3') },
    { id: 2, title: 'Cat', image: require('../../assets/app/images/cat.jpg'), audio: require('../../assets/app/audio/cat.mp3') },
    // Add more animals
  ],
  instruments: [
    { id: 1, title: 'Piano', image: require('../../assets/app/images/piano.jpg'), audio: require('../../assets/app/audio/piano.mp3') },
    { id: 2, title: 'Guitar', image: require('../../assets/app/images/guitar.jpg'), audio: require('../../assets/app/audio/guitar.mp3') },
    // Add more instruments
  ],
  nature: [
    { id: 1, title: 'Rain', image: require('../../assets/app/images/rain.jpg'), audio: require('../../assets/app/audio/rain.mp3') },
    { id: 2, title: 'Wind', image: require('../../assets/app/images/wind.jpg'), audio: require('../../assets/app/audio/wind.mp3') },
    // Add more nature sounds
  ],
};

export default function CategoryPage() {
  const { id } = useLocalSearchParams();
  const [sound, setSound] = useState();

  const categoryData = audioData[id] || [];

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{id.charAt(0).toUpperCase() + id.slice(1)} Sounds</Text>
      {categoryData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.itemContainer}
          onPress={() => playSound(item.audio)}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
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
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 18,
  },
});