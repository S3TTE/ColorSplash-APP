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
    { id: 1, image: require('../assets/app/images/cherry.png'), key: "cherry"},
    { id: 2, image: require('../assets/app/images/tomato.png'), key: "tomato"},
    { id: 3, image: require('../assets/app/images/ladybug.png'), key: "ladybug"},
    { id: 4, image: require('../assets/app/images/strawberry.png'), key: "strawberry"},
    { id: 5, image: require('../assets/app/images/firetruck.png'), key: "firetruck"},
  ],
  blue: [
    { id: 1, image: require('../assets/app/images/whale.png'), key: "whale"},
    { id: 2, image: require('../assets/app/images/blueberries.png'), key: "blueberries"},
    { id: 3, image: require('../assets/app/images/baloon.png'), key: "baloon"},
    { id: 4, image: require('../assets/app/images/bird.png'), key: "bird"},
    { id: 5, image: require('../assets/app/images/sea.png'), key: "sea"},
  ],
  green: [
    { id: 1, image: require('../assets/app/images/apple.png'), key: "apple"},
    { id: 2, image: require('../assets/app/images/turtle.png'), key: "turtle"},
    { id: 3, image: require('../assets/app/images/frog.png'), key: "frog"},
    { id: 4, image: require('../assets/app/images/broccoli.png'), key: "broccoli"},
    { id: 5, image: require('../assets/app/images/grass.png'), key: "grass"},
  ],
  yellow: [
    { id: 1, image: require('../assets/app/images/banana.png'), key: "banana"},
    { id: 2, image: require('../assets/app/images/corn.png'), key: "corn"},
    { id: 3, image: require('../assets/app/images/lemon.png'), key: "lemon"},
    { id: 4, image: require('../assets/app/images/duck.png'), key: "duck"},
    { id: 5, image: require('../assets/app/images/schoolbus.png'), key: "schoolbus"},
    //{ id: 5, image: require('../assets/app/images/sun.png'), key: "sun"},
  ],
};
