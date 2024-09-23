/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colorCategory = [
  { id: 'red', title: 'Red', color: '#FF0000' },
  { id: 'blue', title: 'Blue', color: '#0000FF' },
  { id: 'green', title: 'Green', color: '#00FF00' },
  { id: 'yellow', title: 'Yellow', color: '#FFFF00' },
];

// Add translations for color categories
export const colorCategoryTranslations = {
  en: {
    red: 'Red',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow'
  },
  it: {
    red: 'Rosso',
    blue: 'Blu',
    green: 'Verde',
    yellow: 'Giallo'
  },
  de: {
    red: 'Rot',
    blue: 'Blau',
    green: 'Grün',
    yellow: 'Gelb'
  },
  es: {
    red: 'Rojo',
    blue: 'Azul',
    green: 'Verde',
    yellow: 'Amarillo'
  }
};

export const colorData = {
  red: [
    { id: 1, title: 'Tomato', image: require('../assets/app/images/dog.jpg'), key: "tomato"},
    { id: 2, title: 'Ketchup', image: require('../assets/app/images/dog.jpg'), key: "tomato"},
    { id: 3, title: 'Apple', image: require('../assets/app/images/cat.jpg'), key: "apple"},
  ],
  blue: [
    { id: 1, title: 'Water', image: require('../assets/app/images/cat.jpg'), key: "water"},
    { id: 2, title: 'Ice', image: require('../assets/app/images/cat.jpg'), key: "tomato"},
    { id: 3, title: 'Sky', image: require('../assets/app/images/cat.jpg'), key: "tomato"},
  ],
  green: [
    { id: 1, title: 'Grass', image: require('../assets/app/images/cat.jpg'), key: "tomato"},
    { id: 2, title: 'Leaf', image: require('../assets/app/images/dog.jpg'), key: "tomato"},
  ],
  yellow: [
    { id: 1, title: 'Sun', image: require('../assets/app/images/cat.jpg'), key: "tomato"},
    { id: 2, title: 'Banana', image: require('../assets/app/images/dog.jpg'), key: "tomato"},
  ],
};
