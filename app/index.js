import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

const languages = [
  { id: 'en', title: 'English' },
  { id: 'it', title: 'Italiano' },
  { id: 'de', title: 'Deutsch' },
  { id: 'es', title: 'Español' },
];

export default function LanguageSelection() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Language / Seleziona la lingua / Sprache wählen / Seleccionar idioma</Text>
      <View style={styles.languagesContainer}>
        {languages.map((lang) => (
          <Link key={lang.id} href={`/category/${lang.id}`} asChild>
            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.languageText}>{lang.title}</Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  languagesContainer: {
    width: '80%',
  },
  languageButton: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  languageText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});