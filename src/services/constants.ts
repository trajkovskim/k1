/* eslint-disable max-len */
import Formula1BananaImage from 'assets/products/formula1-banana.png';
import Formula1ChocolateImage from 'assets/products/formula1-chocolate.png';
import Formula1CaffeLatteImage from 'assets/products/formula1-coffe-latte.png';
import Formula1CreamCookiesImage from 'assets/products/formula1-cream-cookies.png';
import Formula1ForestFruitImage from 'assets/products/formula1-forest-fruit.png';
import Formual1RaspberryWhiteChocolateSoyLactoseGlutenFreeImage from 'assets/products/formula1-raspberry-white-chocolate-soy-lactose-gluten-free.png';
import Formula1StrawberryImage from 'assets/products/formula1-strawberry.png';

import AloeMangoImage from 'assets/products/aloe-mango.png';

import MultivitaminFemaleImage from 'assets/products/female-multivitamin.png';
import MultivitaminMaleImage from 'assets/products/male-multivitamin.png';

import AppleOatsFiberDrinkImage from 'assets/products/apple-oats-fiber-drink.png';

import InstantTeaLemonImage from 'assets/products/instant-tea-lemon.jpeg';
import InstantTeaOriginalImage from 'assets/products/instant-tea-original.jpeg';
import InstantTeaPeachImage from 'assets/products/instant-tea-peach.jpeg';

import Herbalife24HydrateImage from 'assets/products/herbalife24-hydrate.png';
import Herbalife24ProteinBar from 'assets/products/herbalife24-protein-bar.jpeg';
import Herbalife24RebuildStrength from 'assets/products/herbalife24-rebuild-strength.png';

import ProteinBarChocolatePeanutImage from 'assets/products/protein-bar-chocolate-peanut.png';
import ProteinBarVanillaAlmondImage from 'assets/products/protein-bar-vanilla-almond.png';
import ProteinBarLemonImage from 'assets/products/protein-bars-lemon.jpg';

import Basic10DaysProgramImage from 'assets/programs/basic-10-days.png';
import Sport10DaysProgramImage from 'assets/programs/sport-10-days.png';
import Detox10DaysProgramImage from 'assets/programs/detox-10-days.png';

import Basic21DaysProgramImage from 'assets/programs/basic-21-days.png';
import Sport21DaysProgramImage from 'assets/programs/sport-21-days.png';
import Detox21DaysProgramImage from 'assets/programs/detox-21-days.png';

import Basic21DaysHealthyProgramImage from 'assets/programs/basic 21-days-healty.png';
import Detox21DaysMusculeMassProgramImage from 'assets/programs/detox-21-days muscule-mass.png';

import { Product, ProductType } from 'services/types';

export const products: Product[] = [
  {
    title: [
      { language: 'en', text: 'Basic 10 days Program' },
      { language: 'mk', text: 'Основна програма за 10 дена' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Основна програма за 10 дена, Основна програма за 10 дена, Основна програма за 10 дена, Основна програма за 10 дена, Основна програма за 10 дена, Основна програма за 10 дена',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic10DaysProgramImage,
    featured: true,
  },
  {
    title: [
      { language: 'en', text: 'Sport 10 days Program' },
      { language: 'mk', text: 'Програма за спорт 10 дена' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Програма за спорт 10 дена, Програма за спорт 10 дена, Програма за спорт 10 дена, Програма за спорт 10 дена, Програма за спорт 10 дена, Програма за спорт 10 дена',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Sport10DaysProgramImage,
    featured: true,
  },
  {
    title: [
      { language: 'en', text: 'Detox 10 days Program' },
      { language: 'mk', text: 'Програма за детоксикација 10 дена' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Програма за детоксикација 10 дена, Програма за детоксикација 10 дена, Програма за детоксикација 10 дена, Програма за детоксикација 10 дена, Програма за детоксикација 10 дена, Програма за детоксикација 10 дена',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox10DaysProgramImage,
    featured: true,
  },
  {
    title: [
      { language: 'en', text: 'Basic 21 days Program' },
      { language: 'mk', text: 'Основна програма за 21 ден' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Основна програма за 21 ден, Основна програма за 21 ден, Основна програма за 21 ден, Основна програма за 21 ден, Основна програма за 21 ден, Основна програма за 21 ден',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic21DaysProgramImage,
  },
  {
    title: [
      { language: 'en', text: 'Basic 21 days Healthy Program' },
      { language: 'mk', text: 'Основна здрава програма 21 ден' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Основна здрава програма 21 ден, Основна здрава програма 21 ден, Основна здрава програма 21 ден, Основна здрава програма 21 ден, Основна здрава програма 21 ден, Основна здрава програма 21 ден',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic21DaysHealthyProgramImage,
  },
  {
    title: [
      { language: 'en', text: 'Sport 21 days Program' },
      { language: 'mk', text: 'Спорт 21 ден програма' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Спорт 21 ден програма, Спорт 21 ден програма, Спорт 21 ден програма, Спорт 21 ден програма, Спорт 21 ден програма, Спорт 21 ден програма',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Sport21DaysProgramImage,
  },
  {
    title: [
      { language: 'en', text: 'Detox 21 days Program' },
      { language: 'mk', text: 'Програма за детоксикација 21 ден' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Програма за детоксикација 21 ден, Програма за детоксикација 21 ден, Програма за детоксикација 21 ден, Програма за детоксикација 21 ден, Програма за детоксикација 21 ден, Програма за детоксикација 21 ден',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox21DaysProgramImage,
  },
  {
    title: [
      { language: 'en', text: 'Detox 21 days Muscule mass Program' },
      { language: 'mk', text: 'Детокс 21 дена програма за мускулна маса' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Детокс 21 дена програма за мускулна маса, Детокс 21 дена програма за мускулна маса, Детокс 21 дена програма за мускулна маса, Детокс 21 дена програма за мускулна маса, Детокс 21 дена програма за мускулна маса, Детокс 21 дена програма за мускулна маса',
      },
    ],
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox21DaysMusculeMassProgramImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Smooth Chocolate' },
      { language: 'mk', text: 'Формула 1 - мазно чоколадо' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - мазно чоколадо, Формула 1 - мазно чоколадо, Формула 1 - мазно чоколадо, Формула 1 - мазно чоколадо, Формула 1 - мазно чоколадо, Формула 1 - мазно чоколадо',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1ChocolateImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Strawberry Delight' },
      { language: 'mk', text: 'Формула 1 - задоволство од јагода' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - задоволство од јагода, Формула 1 - задоволство од јагода, Формула 1 - задоволство од јагода, Формула 1 - задоволство од јагода, Формула 1 - задоволство од јагода, Формула 1 - задоволство од јагода',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1StrawberryImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Vanila Creme' },
      { language: 'mk', text: 'Формула 1 - крем од ванила' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - крем од ванила, Формула 1 - крем од ванила, Формула 1 - крем од ванила, Формула 1 - крем од ванила, Формула 1 - крем од ванила, Формула 1 - крем од ванила',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1StrawberryImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Banana Cream' },
      { language: 'mk', text: 'Формула 1 - крем за банана' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - крем за банана, Формула 1 - крем за банана, Формула 1 - крем за банана, Формула 1 - крем за банана, Формула 1 - крем за банана, Формула 1 - крем за банана',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1BananaImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - CaffeLatte' },
      { language: 'mk', text: 'Формула 1 - Кафелат' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - Кафелат, Формула 1 - Кафелат, Формула 1 - Кафелат, Формула 1 - Кафелат, Формула 1 - Кафелат, Формула 1 - Кафелат',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1CaffeLatteImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Fruits of the forest' },
      { language: 'mk', text: 'Формула 1 - овошје на шумата' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - овошје на шумата, Формула 1 - овошје на шумата, Формула 1 - овошје на шумата, Формула 1 - овошје на шумата, Формула 1 - овошје на шумата, Формула 1 - овошје на шумата',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1ForestFruitImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Cookie Crunch' },
      { language: 'mk', text: 'Формула 1 - криза на колачиња' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Формула 1 - криза на колачиња, Формула 1 - криза на колачиња, Формула 1 - криза на колачиња, Формула 1 - криза на колачиња, Формула 1 - криза на колачиња, Формула 1 - криза на колачиња',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1CreamCookiesImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Raspberry and White chocolate (soy, lactose, gluten free)' },
      { language: 'mk', text: 'Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен)' },
    ],
    description: [
      { language: 'en', text: 'Description)' },
      {
        language: 'mk',
        text: 'Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен)',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formual1RaspberryWhiteChocolateSoyLactoseGlutenFreeImage,
  },
  {
    title: [
      { language: 'en', text: 'Formula 1 - Raspberry and White chocolate (soy, lactose, gluten free)' },
      { language: 'mk', text: 'Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен)' },
    ],
    description: [
      { language: 'en', text: 'Description)' },
      {
        language: 'mk',
        text: 'Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен, Формула 1 - малина и бело чоколадо (соја, лактоза, без глутен)',
      },
    ],
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formual1RaspberryWhiteChocolateSoyLactoseGlutenFreeImage,
  },
  {
    title: [
      { language: 'en', text: 'Herbal Aloe - Mango' },
      { language: 'mk', text: 'Хербален алое - манго' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Хербален алое - манго, Хербален алое - манго, Хербален алое - манго, Хербален алое - манго, Хербален алое - манго, Хербален алое - манго',
      },
    ],
    types: [ProductType.DRINKS],
    price: 2578,
    image: AloeMangoImage,
  },
  {
    title: [
      { language: 'en', text: 'Apple, oats, fiber drink (Sugar free)' },
      { language: 'mk', text: 'Јаболко, овес, пијалок со влакна (без шеќер)' },
    ],
    description: [
      { language: 'en', text: 'Description)' },
      {
        language: 'mk',
        text: 'Јаболко, овес, пијалок со влакна (без шеќер, Јаболко, овес, пијалок со влакна (без шеќер, Јаболко, овес, пијалок со влакна (без шеќер, Јаболко, овес, пијалок со влакна (без шеќер, Јаболко, овес, пијалок со влакна (без шеќер, Јаболко, овес, пијалок со влакна (без шеќер)',
      },
    ],
    types: [ProductType.DRINKS],
    price: 1867,
    image: AppleOatsFiberDrinkImage,
  },
  {
    title: [
      { language: 'en', text: 'Instant tea - Lemon' },
      { language: 'mk', text: 'Инстант чај - лимон' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Инстант чај - лимон, Инстант чај - лимон, Инстант чај - лимон, Инстант чај - лимон, Инстант чај - лимон, Инстант чај - лимон',
      },
    ],
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaLemonImage,
  },
  {
    title: [
      { language: 'en', text: 'Instant tea - Peach' },
      { language: 'mk', text: 'Инстант чај - праска' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Инстант чај - праска, Инстант чај - праска, Инстант чај - праска, Инстант чај - праска, Инстант чај - праска, Инстант чај - праска',
      },
    ],
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaPeachImage,
  },
  {
    title: [
      { language: 'en', text: 'Instant tea - Original' },
      { language: 'mk', text: 'Инстант чај - оригинал' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Инстант чај - оригинал, Инстант чај - оригинал, Инстант чај - оригинал, Инстант чај - оригинал, Инстант чај - оригинал, Инстант чај - оригинал',
      },
    ],
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaOriginalImage,
  },
  {
    title: [
      { language: 'en', text: 'Multivitamin - Male' },
      { language: 'mk', text: 'Мултивитамин - машки' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Мултивитамин - машки, Мултивитамин - машки, Мултивитамин - машки, Мултивитамин - машки, Мултивитамин - машки, Мултивитамин - машки',
      },
    ],
    types: [ProductType.VITAMIN],
    price: 1862,
    image: MultivitaminMaleImage,
  },
  {
    title: [
      { language: 'en', text: 'Multivitamin - Female' },
      { language: 'mk', text: 'Мултивитамин - женски' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Мултивитамин - женски, Мултивитамин - женски, Мултивитамин - женски, Мултивитамин - женски, Мултивитамин - женски, Мултивитамин - женски',
      },
    ],
    types: [ProductType.VITAMIN],
    price: 1862,
    image: MultivitaminFemaleImage,
  },
  {
    title: [
      { language: 'en', text: 'Herbalife 24 - Rebuild' },
      { language: 'mk', text: 'Herbalife 24 - обновете' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Herbalife 24 - обновете, Herbalife 24 - обновете, Herbalife 24 - обновете, Herbalife 24 - обновете, Herbalife 24 - обновете, Herbalife 24 - обновете',
      },
    ],
    types: [ProductType.SPORT],
    price: 1862,
    image: Herbalife24RebuildStrength,
  },
  {
    title: [
      { language: 'en', text: 'Herbalife 24 - Protein bar' },
      { language: 'mk', text: 'Herbalife 24 - протеински бар' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Herbalife 24 - протеински бар, Herbalife 24 - протеински бар, Herbalife 24 - протеински бар, Herbalife 24 - протеински бар, Herbalife 24 - протеински бар, Herbalife 24 - протеински бар',
      },
    ],
    types: [ProductType.SPORT, ProductType.PROTEIN_BARS],
    price: 1862,
    image: Herbalife24ProteinBar,
  },
  {
    title: [
      { language: 'en', text: 'Herbalife 24 - Hydrate' },
      { language: 'mk', text: 'Herbalife 24 - хидрат' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Herbalife 24 - хидрат, Herbalife 24 - хидрат, Herbalife 24 - хидрат, Herbalife 24 - хидрат, Herbalife 24 - хидрат, Herbalife 24 - хидрат',
      },
    ],
    types: [ProductType.SPORT],
    price: 1862,
    image: Herbalife24HydrateImage,
  },
  {
    title: [
      { language: 'en', text: 'Protein bar - Chocolate & Peanut' },
      { language: 'mk', text: 'Протеински бар - чоколадо и кикирики' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Протеински бар - чоколадо и кикирики, Протеински бар - чоколадо и кикирики, Протеински бар - чоколадо и кикирики, Протеински бар - чоколадо и кикирики, Протеински бар - чоколадо и кикирики, Протеински бар - чоколадо и кикирики',
      },
    ],
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarChocolatePeanutImage,
  },
  {
    title: [
      { language: 'en', text: 'Protein bar - Vanilla & Almond' },
      { language: 'mk', text: 'Протеински бар - ванила и бадем' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Протеински бар - ванила и бадем, Протеински бар - ванила и бадем, Протеински бар - ванила и бадем, Протеински бар - ванила и бадем, Протеински бар - ванила и бадем, Протеински бар - ванила и бадем',
      },
    ],
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarVanillaAlmondImage,
  },
  {
    title: [
      { language: 'en', text: 'Protein bar - Lemon' },
      { language: 'mk', text: 'Протеински бар - лимон' },
    ],
    description: [
      { language: 'en', text: 'Description' },
      {
        language: 'mk',
        text: 'Протеински бар - лимон, Протеински бар - лимон, Протеински бар - лимон, Протеински бар - лимон, Протеински бар - лимон, Протеински бар - лимон',
      },
    ],
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarLemonImage,
  },
].map((product, index) => ({ id: index, ...product }));
