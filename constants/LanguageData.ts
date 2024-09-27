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
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/en/tomato.mp3')},
      { key: "cherry", title: 'Ciliegia', color: "red", audioFile: require('../assets/app/audio/en/cherry.mp3')},
      { key: "ladybug", title: 'Coccinella', color: "red", audioFile: require('../assets/app/audio/en/ladybug.mp3')},
      { key: "firetruck", title: 'Camion dei Pompieri', color: "red", audioFile: require('../assets/app/audio/en/fire_truck.mp3')},
      { key: "strawberry", title: 'Fragola', color: "red", audioFile: require('../assets/app/audio/en/strawberry.mp3')},
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
      { key: "cherry", title: 'Ciliegia', color: "red", audioFile: require('../assets/app/audio/it/cherry.mp3')},
      { key: "ladybug", title: 'Coccinella', color: "red", audioFile: require('../assets/app/audio/it/ladybug.mp3')},
      { key: "firetruck", title: 'Camion dei Pompieri', color: "red", audioFile: require('../assets/app/audio/it/fire_truck.mp3')},
      { key: "strawberry", title: 'Fragola', color: "red", audioFile: require('../assets/app/audio/it/strawberry.mp3')},
      { key: "water", title: 'Acqua', color: "blue", audioFile: require('../assets/app/audio/it/water.mp3')},
      { key: "sky", title: 'Cielo', color: "blue", audioFile: require('../assets/app/audio/it/sky.mp3')},
      { key: "blueberries", title: 'Mirtilli', color: "blue", audioFile: require('../assets/app/audio/it/blueberries.mp3')},
      { key: "blackberry", title: 'More', color: "blue", audioFile: require('../assets/app/audio/it/blackberry.mp3')},
      { key: "bluebird", title: 'Uccellino', color: "blue", audioFile: require('../assets/app/audio/it/bluebird.mp3')},
      { key: "grass", title: 'Erba', color: "green", audioFile: require('../assets/app/audio/it/bluebird.mp3')},
      { key: "banana", title: 'Banana', color: "yellow", audioFile: require('../assets/app/audio/it/banana.mp3')},
      { key: "corn", title: 'Pannocchia', color: "yellow", audioFile: require('../assets/app/audio/it/corn.mp3')},
      { key: "duck", title: 'Papera', color: "yellow", audioFile: require('../assets/app/audio/it/duck.mp3')},
      { key: "lemon", title: 'Limone', color: "yellow", audioFile: require('../assets/app/audio/it/lemon.mp3')},
      { key: "sun", title: 'Sole', color: "yellow", audioFile: require('../assets/app/audio/it/sun.mp3')},
    ],
  },
  de: {
    functionality: {
      backToLanguageSelection: 'Zurück zur Sprachauswahl',
      colorCategories: 'Farbkategorien',
    },
    colors: [
      {key: "red", title: 'Rot'},
      {key: "blue", title: 'Blau'},
      {key: "green", title: 'Grün'},
      {key: "yellow", title: 'Gelb'},
    ],
    items: [
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/de/tomato.mp3')},
      { key: "cherry", title: 'Ciliegia', color: "red", audioFile: require('../assets/app/audio/de/cherry.mp3')},
      { key: "ladybug", title: 'Coccinella', color: "red", audioFile: require('../assets/app/audio/de/ladybug.mp3')},
      { key: "firetruck", title: 'Camion dei Pompieri', color: "red", audioFile: require('../assets/app/audio/de/fire_truck.mp3')},
      { key: "strawberry", title: 'Fragola', color: "red", audioFile: require('../assets/app/audio/de/strawberry.mp3')},
    ],
  },
  es: {
    functionality: {
      backToLanguageSelection: 'Volver a la selección de idioma',
      colorCategories: 'Categorías de color',
    },
    colors: [
      {key: "red", title: 'Rojo'},
      {key: "blue", title: 'Azul'},
      {key: "green", title: 'Verde'},
      {key: "yellow", title: 'Amarillo'},
    ],
    items: [
      { key: "tomato", title: 'Tomate', color: "red", audioFile: require('../assets/app/audio/es/tomato.mp3')},
      { key: "cherry", title: 'Cereza', color: "red", audioFile: require('../assets/app/audio/es/cherry.mp3')},
      { key: "ladybug", title: 'Mariquita', color: "red", audioFile: require('../assets/app/audio/es/ladybug.mp3')},
      { key: "firetruck", title: 'Camión de bomberos', color: "red", audioFile: require('../assets/app/audio/es/fire_truck.mp3')},
      { key: "strawberry", title: 'Fresa', color: "red", audioFile: require('../assets/app/audio/es/strawberry.mp3')},
    ],
  },
  // Add similar structures for other languages
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