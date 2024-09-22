// constants/LanguageData.ts

import { colorCategory } from './Colors';

export const supportedLanguages = ['en', 'it', 'de', 'es'];

export const languageNames = {
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  es: 'Español',
};

// Function to dynamically generate audio file paths
export const getAudioFile = (lang: string, itemId: string) => {
  try {
    console.log(`../assets/app/audio/${lang}/${itemId}.mp3`);
    //return require(`../assets/app/audio/${lang}/${itemId}.mp3`);
    return require(`../assets/app/audio/it/tomato.mp3`);
  } catch (error) {
    console.warn(`Audio file not found for language ${lang} and item ${itemId}`);
    return null;
  }
};

export const translations = {
  en: {
    backToLanguageSelection: 'Back to Language Selection',
    colorCategories: 'Color Categories',
    red: 'Red',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow',
    tomato: 'Tomato',
    apple: 'Apple',
    water: 'Water',
    sky: 'Sky',
    grass: 'Grass',
    leaf: 'Leaf',
    sun: 'Sun',
    banana: 'Banana',
  },
  it: {
    backToLanguageSelection: 'Back to Language Selection',
    colorCategories: 'Color Categories',
    red: 'Rosso',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow',
    tomato: 'Pomodoro',
    apple: 'Apple',
    water: 'Water',
    sky: 'Sky',
    grass: 'Grass',
    leaf: 'Leaf',
    sun: 'Sun',
    banana: 'Banana',
  },
  de: {
    backToLanguageSelection: 'Back to Language Selection',
    colorCategories: 'Color Categories',
    red: 'Red',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow',
    tomato: 'Tomato',
    apple: 'Apple',
    water: 'Water',
    sky: 'Sky',
    grass: 'Grass',
    leaf: 'Leaf',
    sun: 'Sun',
    banana: 'Banana',
  },
  es: {
    backToLanguageSelection: 'Back to Language Selection',
    colorCategories: 'Color Categories',
    red: 'Red',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow',
    tomato: 'Tomato',
    apple: 'Apple',
    water: 'Water',
    sky: 'Sky',
    grass: 'Grass',
    leaf: 'Leaf',
    sun: 'Sun',
    banana: 'Banana',
  },
};