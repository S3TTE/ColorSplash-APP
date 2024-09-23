// constants/LanguageData.ts

export const supportedLanguages = ['en', 'it', 'de', 'es'];

export const languageNames = {
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  es: 'Español',
};

export const translations = {
  en: {
    functionality: {
      backToLanguageSelection: 'Back to Language Selection',
      colorCategories: 'Color Categories',
    },
    colors: [
      {key: "red", title: 'Red'},
      {key: "blue", title: 'Blue'},
      {key: "green", title: 'Green'},
      {key: "yellow", title: 'Yellow'},
    ],
    items: [
      { key: "tomato", title: 'Tomato', color: "red", audioFile: require('../assets/app/audio/en/tomato.mp3')},
      { key: "apple", title: 'Apple', color: "red", audioFile: require('../assets/app/audio/en/apple.mp3')},
      { key: "water", title: 'Water', color: "blue", audioFile: require('../assets/app/audio/en/water.mp3')},
    ],
  },
  it: {
    functionality: {
      backToLanguageSelection: 'Torna alla selezione della lingua',
      colorCategories: 'Categorie di colori',
    },
    colors: [
      {key: "red", title: 'Rosso'},
      {key: "blue", title: 'Blu'},
      {key: "green", title: 'Verde'},
      {key: "yellow", title: 'Giallo'},
    ],
    items: [
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/it/tomato.mp3')},
      { key: "apple", title: 'Mela', color: "red", audioFile: require('../assets/app/audio/it/apple.mp3')},
      { key: "water", title: 'Acqua', color: "blue", audioFile: require('../assets/app/audio/it/water.mp3')},
    ],
  },
  de: {
    functionality: {
      backToLanguageSelection: 'Torna alla selezione della lingua',
      colorCategories: 'Categorie di colori',
    },
    colors: [
      {key: "red", title: 'Rosso'},
      {key: "blue", title: 'Blu'},
      {key: "green", title: 'Verde'},
      {key: "yellow", title: 'Giallo'},
    ],
    items: [
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/it/tomato.mp3')},
      { key: "apple", title: 'Mela', color: "red", audioFile: require('../assets/app/audio/it/apple.mp3')},
      { key: "water", title: 'Acqua', color: "blue", audioFile: require('../assets/app/audio/it/water.mp3')},
    ],
  },
  es: {
    functionality: {
      backToLanguageSelection: 'Torna alla selezione della lingua',
      colorCategories: 'Categorie di colori',
    },
    colors: [
      {key: "red", title: 'Rosso'},
      {key: "blue", title: 'Blu'},
      {key: "green", title: 'Verde'},
      {key: "yellow", title: 'Giallo'},
    ],
    items: [
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/it/tomato.mp3')},
      { key: "apple", title: 'Mela', color: "red", audioFile: require('../assets/app/audio/it/apple.mp3')},
      { key: "water", title: 'Acqua', color: "blue", audioFile: require('../assets/app/audio/it/water.mp3')},
    ],
  },
  // Add similar structures for 'de' and 'es'
};

export const getTranslation = (lang: string, key: string): string => {
  const keys = key.split('.');
  let result = translations[lang];
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // Return the key if translation is not found
    }
  }
  return typeof result === 'string' ? result : key;
};

export const getAudioFile = (lang: string, itemKey: string) => {
  const item = translations[lang]?.items.find(item => item.key === itemKey);
  return item ? item.audioFile : null;
};

export const getItemColor = (lang: string, itemKey: string) => {
  const item = translations[lang]?.items.find(item => item.key === itemKey);
  return item ? item.color : null;
};