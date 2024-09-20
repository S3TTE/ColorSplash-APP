import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions, FlatList, ScrollView, SafeAreaView, Animated } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';
import Fireworks from '../../components/Firework'
import { colorData } from '../../constants/Colors'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function CategoryPage() {
  const { id } = useLocalSearchParams();
  const [sound, setSound] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  const playSound = async (audio) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(audio);
    setSound(newSound);
    await newSound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setShowFireworks(true);
    playSound(item.audio);

    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(opacityValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start(() => {
          setSelectedItem(null);
          setShowFireworks(false);
        });
      }, 3000); // Increased from 2000 to 3000 for longer fireworks display
    });
  };

  const renderColorCategory = (color) => {
    const categoryData = colorData[color] || [];

    return (
      <View style={[styles.categoryContainer, { width: screenWidth }]} key={color}>
        <Text style={styles.title}>{color.charAt(0).toUpperCase() + color.slice(1)} Items</Text>
        <FlatList
          data={categoryData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleItemPress(item)}
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

  const animatedStyles = {
    width: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [screenWidth * 0.4, screenWidth * 0.8],
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [screenWidth * 0.4, screenHeight * 0.4],
    }),
    opacity: opacityValue,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const page = Math.round(offsetX / screenWidth);
          setCurrentPage(page);
        }}
        scrollEventThrottle={16}
      >
        {Object.keys(colorData).map(renderColorCategory)}
      </ScrollView>
      <View style={styles.pagination}>
        {Object.keys(colorData).map((color, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: color },
              currentPage === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
      {selectedItem && (
        <Animated.View style={[styles.enlargedImageContainer, animatedStyles]}>
          <Image source={selectedItem.image} style={styles.enlargedImage} />
        </Animated.View>
      )}
      {showFireworks && (
        <View style={styles.fireworksContainer}>
          <Fireworks
            speed={3}
            density={8}
            colors={Object.keys(colorData)[currentPage]}
            iterations={5}
            height={screenHeight}
            width={screenWidth}
            zIndex={1001}
            circular={true}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
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
  enlargedImageContainer: {
    position: 'absolute',
    top: screenHeight / 2 - screenWidth * 0.2,
    left: screenWidth / 2 - screenWidth * 0.4,
    zIndex: 1000,
    borderRadius: 10,
    overflow: 'hidden',
  },
  enlargedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    opacity: 0.6,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1.3 }],
    //borderWidth: 2,
    //borderColor: 'white',
  },
  fireworksContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1001,
  },
});