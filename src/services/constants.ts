import Formula1BananaImage from 'assets/products/formula1-banana.png';
import Formula1ChocolateImage from 'assets/products/formula1-chocolate.png';
import Formula1CaffeLatteImage from 'assets/products/formula1-coffe-latte.png';
import Formula1CreamCookiesImage from 'assets/products/formula1-cream-cookies.png';
import Formula1ForestFruitImage from 'assets/products/formula1-forest-fruit.png';
// eslint-disable-next-line max-len
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
    title: 'Basic 10 days Program',
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic10DaysProgramImage,
  },
  {
    title: 'Basic 21 days Program',
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic21DaysProgramImage,
  },
  {
    title: 'Basic 21 days Healthy Program',
    types: [ProductType.PROGRAM],
    price: 3099,
    image: Basic21DaysHealthyProgramImage,
  },
  {
    title: 'Sport 10 days Program',
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Sport10DaysProgramImage,
  },
  {
    title: 'Sport 21 days Program',
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Sport21DaysProgramImage,
  },
  {
    title: 'Detox 10 days Program',
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox10DaysProgramImage,
  },
  {
    title: 'Detox 21 days Program',
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox21DaysProgramImage,
  },
  {
    title: 'Detox 21 days Muscule mass Program',
    types: [ProductType.PROGRAM],
    price: 2958,
    image: Detox21DaysMusculeMassProgramImage,
  },
  {
    title: 'Formula 1 - Smooth Chocolate',
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1ChocolateImage,
  },
  {
    title: 'Formula 1 - Strawberry Delight',
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1StrawberryImage,
  },
  {
    title: 'Formula 1 - Vanila Creme',
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1StrawberryImage,
  },
  {
    title: 'Formula 1 - Banana Cream',
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1BananaImage,
  },
  {
    title: 'Formula 1 - CaffeLatte',
    types: [ProductType.PROTEIN_MIX],
    price: 2958,
    image: Formula1CaffeLatteImage,
  },
  {
    title: 'Formula 1 - Fruits of the forest',
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1ForestFruitImage,
  },
  {
    title: 'Formula 1 - Cookie Crunch',
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formula1CreamCookiesImage,
  },
  {
    title: 'Formula 1 - Raspberry and White chocolate (soy, lactose, gluten free)',
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formual1RaspberryWhiteChocolateSoyLactoseGlutenFreeImage,
  },
  {
    title: 'Formula 1 - Raspberry and White chocolate (soy, lactose, gluten free)',
    types: [ProductType.PROTEIN_MIX],
    price: 3099,
    image: Formual1RaspberryWhiteChocolateSoyLactoseGlutenFreeImage,
  },
  {
    title: 'Herbal Aloe - Mango',
    types: [ProductType.DRINKS],
    price: 2578,
    image: AloeMangoImage,
  },
  {
    title: 'Apple, oats, fiber drink (Sugar free)',
    types: [ProductType.DRINKS],
    price: 1867,
    image: AppleOatsFiberDrinkImage,
  },
  {
    title: 'Instant tea - Lemon',
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaLemonImage,
  },
  {
    title: 'Instant tea - Peach',
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaPeachImage,
  },
  {
    title: 'Instant tea - Original',
    types: [ProductType.THERMOJETICS],
    price: 1862,
    image: InstantTeaOriginalImage,
  },
  {
    title: 'Multivitamin - Male',
    types: [ProductType.VITAMIN],
    price: 1862,
    image: MultivitaminMaleImage,
  },
  {
    title: 'Multivitamin - Female',
    types: [ProductType.VITAMIN],
    price: 1862,
    image: MultivitaminFemaleImage,
  },
  {
    title: 'Herbalife 24 - Rebuild',
    types: [ProductType.SPORT],
    price: 1862,
    image: Herbalife24RebuildStrength,
  },
  {
    title: 'Herbalife 24 - Protein bar',
    types: [ProductType.SPORT, ProductType.PROTEIN_BARS],
    price: 1862,
    image: Herbalife24ProteinBar,
  },
  {
    title: 'Herbalife 24 - Hydrate',
    types: [ProductType.SPORT],
    price: 1862,
    image: Herbalife24HydrateImage,
  },
  {
    title: 'Protein bar - Chocolate & Peanut',
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarChocolatePeanutImage,
  },
  {
    title: 'Protein bar - Vanilla & Almond',
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarVanillaAlmondImage,
  },
  {
    title: 'Protein bar - Lemon',
    types: [ProductType.PROTEIN_BARS],
    price: 1862,
    image: ProteinBarLemonImage,
  },
].map((product, index) => ({ id: index, ...product }));
