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
      //red
      { key: "tomato", title: 'Pomodoro', color: "red", audioFile: require('../assets/app/audio/en/tomato.mp3')},
      { key: "cherry", title: 'Ciliegia', color: "red", audioFile: require('../assets/app/audio/en/cherry.mp3')},
      { key: "ladybug", title: 'Coccinella', color: "red", audioFile: require('../assets/app/audio/en/ladybug.mp3')},
      { key: "firetruck", title: 'Camion dei Pompieri', color: "red", audioFile: require('../assets/app/audio/en/fire_truck.mp3')},
      { key: "strawberry", title: 'Fragola', color: "red", audioFile: require('../assets/app/audio/en/strawberry.mp3')},

      //blue
      { key: "baloon", title: 'Baloon', color: "blue", audioFile: require('../assets/app/audio/en/baloon.mp3')},
      { key: "bird", title: 'Bird', color: "blue", audioFile: require('../assets/app/audio/en/bluebird.mp3')},
      { key: "blueberries", title: 'Blueberries', color: "blue", audioFile: require('../assets/app/audio/en/blueberries.mp3')},
      { key: "sea", title: 'Sea', color: "blue", audioFile: require('../assets/app/audio/en/sea.mp3')},
      { key: "whale", title: 'Whale', color: "blue", audioFile: require('../assets/app/audio/en/whale.mp3')},

      //green
      { key: "apple", title: 'Apple', color: "green", audioFile: require('../assets/app/audio/en/apple.mp3')},
      { key: "broccoli", title: 'Broccoli', color: "green", audioFile: require('../assets/app/audio/en/broccoli.mp3')},
      { key: "frog", title: 'Frog', color: "green", audioFile: require('../assets/app/audio/en/frog.mp3')},
      { key: "grass", title: 'Grass', color: "green", audioFile: require('../assets/app/audio/en/grass.mp3')},
      { key: "turtle", title: 'Turtle', color: "green", audioFile: require('../assets/app/audio/en/turtle.mp3')},

      //yellow
      { key: "banana", title: 'Banana', color: "yellow", audioFile: require('../assets/app/audio/en/banana.mp3')},
      { key: "corn", title: 'Pannocchia', color: "yellow", audioFile: require('../assets/app/audio/en/corn.mp3')},
      { key: "duck", title: 'Papera', color: "yellow", audioFile: require('../assets/app/audio/en/duck.mp3')},
      { key: "lemon", title: 'Limone', color: "yellow", audioFile: require('../assets/app/audio/en/lemon.mp3')},
      //{ key: "sun", title: 'Sole', color: "yellow", audioFile: require('../assets/app/audio/en/sun.mp3')},
      { key: "schoolbus", title: 'Autobus', color: "yellow", audioFile: require('../assets/app/audio/en/schoolbus.mp3')},
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

      //blue
      { key: "baloon", title: 'Baloon', color: "blue", audioFile: require('../assets/app/audio/it/baloon.mp3')},
      { key: "bird", title: 'Bird', color: "blue", audioFile: require('../assets/app/audio/it/bluebird.mp3')},
      { key: "blueberries", title: 'Blueberries', color: "blue", audioFile: require('../assets/app/audio/it/blueberries.mp3')},
      { key: "sea", title: 'Sea', color: "blue", audioFile: require('../assets/app/audio/it/sea.mp3')},
      { key: "whale", title: 'Whale', color: "blue", audioFile: require('../assets/app/audio/it/whale.mp3')},
      
      //green
      { key: "apple", title: 'Apple', color: "green", audioFile: require('../assets/app/audio/it/apple.mp3')},
      { key: "broccoli", title: 'Broccoli', color: "green", audioFile: require('../assets/app/audio/it/broccoli.mp3')},
      { key: "frog", title: 'Frog', color: "green", audioFile: require('../assets/app/audio/it/frog.mp3')},
      { key: "grass", title: 'Grass', color: "green", audioFile: require('../assets/app/audio/it/grass.mp3')},
      { key: "turtle", title: 'Turtle', color: "green", audioFile: require('../assets/app/audio/it/turtle.mp3')},

      { key: "banana", title: 'Banana', color: "yellow", audioFile: require('../assets/app/audio/it/banana.mp3')},
      { key: "corn", title: 'Pannocchia', color: "yellow", audioFile: require('../assets/app/audio/it/corn.mp3')},
      { key: "duck", title: 'Papera', color: "yellow", audioFile: require('../assets/app/audio/it/duck.mp3')},
      { key: "lemon", title: 'Limone', color: "yellow", audioFile: require('../assets/app/audio/it/lemon.mp3')},
      //{ key: "sun", title: 'Sole', color: "yellow", audioFile: require('../assets/app/audio/it/sun.mp3')},
      { key: "schoolbus", title: 'Autobus', color: "yellow", audioFile: require('../assets/app/audio/it/schoolbus.mp3')},
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
      //blue
      { key: "baloon", title: 'Baloon', color: "blue", audioFile: require('../assets/app/audio/de/baloon.mp3')},
      { key: "bird", title: 'Bird', color: "blue", audioFile: require('../assets/app/audio/de/bluebird.mp3')},
      { key: "blueberries", title: 'Blueberries', color: "blue", audioFile: require('../assets/app/audio/de/blueberries.mp3')},
      { key: "sea", title: 'Sea', color: "blue", audioFile: require('../assets/app/audio/de/sea.mp3')},
      { key: "whale", title: 'Whale', color: "blue", audioFile: require('../assets/app/audio/de/whale.mp3')},
      //green
      { key: "apple", title: 'Apple', color: "green", audioFile: require('../assets/app/audio/de/apple.mp3')},
      { key: "broccoli", title: 'Broccoli', color: "green", audioFile: require('../assets/app/audio/de/broccoli.mp3')},
      { key: "frog", title: 'Frog', color: "green", audioFile: require('../assets/app/audio/de/frog.mp3')},
      { key: "grass", title: 'Grass', color: "green", audioFile: require('../assets/app/audio/de/grass.mp3')},
      { key: "turtle", title: 'Turtle', color: "green", audioFile: require('../assets/app/audio/de/turtle.mp3')},
      //yellow
      { key: "banana", title: 'Banane', color: "yellow", audioFile: require('../assets/app/audio/de/banana.mp3')},
      { key: "corn", title: 'Maiskolben', color: "yellow", audioFile: require('../assets/app/audio/de/corn.mp3')},
      { key: "duck", title: 'Ente', color: "yellow", audioFile: require('../assets/app/audio/de/duck.mp3')},
      { key: "lemon", title: 'Zitrone', color: "yellow", audioFile: require('../assets/app/audio/de/lemon.mp3')},
      //{ key: "sun", title: 'Sonne', color: "yellow", audioFile: require('../assets/app/audio/de/sun.mp3')},
      { key: "schoolbus", title: 'Schulbus', color: "yellow", audioFile: require('../assets/app/audio/de/schoolbus.mp3')},
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
      //blue
      { key: "baloon", title: 'Baloon', color: "blue", audioFile: require('../assets/app/audio/es/baloon.mp3')},
      { key: "bird", title: 'Bird', color: "blue", audioFile: require('../assets/app/audio/es/bluebird.mp3')},
      { key: "blueberries", title: 'Blueberries', color: "blue", audioFile: require('../assets/app/audio/es/blueberries.mp3')},
      { key: "sea", title: 'Sea', color: "blue", audioFile: require('../assets/app/audio/es/sea.mp3')},
      { key: "whale", title: 'Whale', color: "blue", audioFile: require('../assets/app/audio/es/whale.mp3')},
      
      //green
      { key: "apple", title: 'Apple', color: "green", audioFile: require('../assets/app/audio/es/apple.mp3')},
      { key: "broccoli", title: 'Broccoli', color: "green", audioFile: require('../assets/app/audio/es/broccoli.mp3')},
      { key: "frog", title: 'Frog', color: "green", audioFile: require('../assets/app/audio/es/frog.mp3')},
      { key: "grass", title: 'Grass', color: "green", audioFile: require('../assets/app/audio/es/grass.mp3')},
      { key: "turtle", title: 'Turtle', color: "green", audioFile: require('../assets/app/audio/es/turtle.mp3')},

      //yellow
      { key: "banana", title: 'Plátano', color: "yellow", audioFile: require('../assets/app/audio/es/banana.mp3')},
      { key: "corn", title: 'Mazorca de maíz', color: "yellow", audioFile: require('../assets/app/audio/es/corn.mp3')},
      { key: "duck", title: 'Pato', color: "yellow", audioFile: require('../assets/app/audio/es/duck.mp3')},
      { key: "lemon", title: 'Limón', color: "yellow", audioFile: require('../assets/app/audio/es/lemon.mp3')},
      //{ key: "sun", title: 'Sol', color: "yellow", audioFile: require('../assets/app/audio/es/sun.mp3')},
      { key: "schoolbus", title: 'Autobús', color: "yellow", audioFile: require('../assets/app/audio/es/schoolbus.mp3')},
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