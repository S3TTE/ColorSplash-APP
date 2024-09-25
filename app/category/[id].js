import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Dimensions, FlatList, ScrollView, SafeAreaView, Animated } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { Audio } from 'expo-av';
import Fireworks from '../../components/Firework';
import { translations, getTranslation, getAudioFile, getItemColor } from '../../constants/LanguageData';
import { colorData } from '../../constants/Colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function CategoryPage() {
  const { id } = useLocalSearchParams();
  const [sound, setSound] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

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

  const playSound = async (itemKey) => {
    try {
      console.log("Attempting to play audio");

      if (sound) {
        console.log("Unloading previous sound");
        await sound.unloadAsync();
      }

      const audioFile = getAudioFile(id, itemKey);
      if (!audioFile) {
        console.warn(`Audio file not found for language ${id} and item ${itemKey}`);
        return;
      }

      console.log("Creating new sound");
      const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
      setSound(newSound);

      console.log("Playing sound");
      await newSound.playAsync();

      console.log("Sound played successfully");
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  const getImageForItem = (itemKey, color) => {
    //console.log(itemKey,color)
    const colorItems = colorData[color];
    //console.log(colorItems)
    if (colorItems) {
      const item = colorItems.find(i => i.key === itemKey);
      return item ? item.image : null;
    }
    return null;
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setShowFireworks(true);
    const image = getImageForItem(item.key, item.color);
    setEnlargedImage(image);
    //console.log(id, item);
    playSound(item.key);

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
          setEnlargedImage(null);
        });
      }, 3000);
    });
  };

  const renderColorCategory = (color) => {
    const categoryData = translations[id].items.filter(item => item.color === color);
    console.log(categoryData)
    const categoryName = translations[id].colors.find(c => c.key === color)?.title;

    // Sort the categoryData based on the id in colorData
    const sortedCategoryData = categoryData.sort((a, b) => {
      const aIndex = colorData[color].findIndex(item => item.key === a.key);
      const bIndex = colorData[color].findIndex(item => item.key === b.key);
      return aIndex - bIndex;
    });

    return (
      <View style={[styles.categoryContainer, { width: screenWidth }]} key={color}>
        <Text style={styles.title}>{categoryName}</Text>
        <FlatList
          data={sortedCategoryData}
          renderItem={({ item }) => {
            const image = getImageForItem(item.key, item.color);
            return (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleItemPress(item)}
              >
                {image && <Image source={image} style={styles.image} />}
                {!image && <Text style={styles.itemTitle}>{item.title}</Text>}
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.key}
          numColumns={2}
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Link href="/" style={styles.backButton}>
        <Text style={styles.backButtonText}>{getTranslation(id, 'functionality.backToLanguageSelection')}</Text>
      </Link>
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
        {translations[id].colors.map(category => renderColorCategory(category.key))}
      </ScrollView>
      {enlargedImage && (
        <Animated.View style={[styles.enlargedImageContainer, animatedStyles]}>
          <Image source={enlargedImage} style={styles.enlargedImage} />
        </Animated.View>
      )}
      <View style={styles.pagination}>
        {translations[id].colors.map((category, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: category.key },
              currentPage === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
      {selectedItem && (
        <Animated.View style={[styles.enlargedImageContainer, animatedStyles]}>
          <Image source={selectedItem} style={styles.enlargedImage} />
        </Animated.View>
      )}
      {showFireworks && (
        <View style={styles.fireworksContainer}>
          <Fireworks
            speed={3}
            density={8}
            colors={translations[id].colors.map(cat => cat.key)}
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
    backgroundColor: '#d9d4be',
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
  },
  backButtonText: {
    color: '#0a7ea4',
    fontSize: 16,
  },
  categoryContainer: {
    flex: 1,
    padding: 20,
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
    padding: 5,
  },
  image: {
    width: "100%",
    height: undefined,
    resizeMode: 'contain',
    borderRadius: 10,
    aspectRatio: 1,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  enlargedImageContainer: {
    position: 'absolute',
    top: screenHeight / 2 - screenHeight * 0.2,
    left: screenWidth / 2 - screenWidth * 0.4,
    zIndex: 1000,
    borderRadius: 10,
    overflow: 'hidden',
  },
  enlargedImage: {
    width: '100%',
    height: undefined,
    resizeMode: 'contain',
    aspectRatio:1,
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
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1.3 }],
  },
  fireworksContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1001,
  },
});