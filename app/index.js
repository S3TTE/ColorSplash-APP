import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Link } from 'expo-router';

const languages = [
  { id: 'en', title: 'English' },
  { id: 'it', title: 'Italiano' },
  { id: 'de', title: 'Deutsch' },
  { id: 'es', title: 'Español' },
];

const flagImages = {
  en: require('../assets/app/flags/en.png'),
  it: require('../assets/app/flags/it.png'),
  de: require('../assets/app/flags/de.png'),
  es: require('../assets/app/flags/es.png'),
};

export default function LanguageSelection() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flagsContainer}>
        <Text style={styles.title}>Select Language / Seleziona la lingua / Sprache wählen / Seleccionar idioma</Text>
        {languages.map((lang) => (
          <Link key={lang.id} href={`/category/${lang.id}`} asChild>
            <TouchableOpacity style={styles.flagButton}>
              <Image
                source={flagImages[lang.id]}
                style={styles.flagImage}
                resizeMode="contain"
              />
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
    backgroundColor: '#d9d4be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  flagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  flagButton: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  flagImage: {
    width: 120,
    height: 80,
  },
});