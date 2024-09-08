import Formual1Image from 'assets/formula1.webp';

export const PAGE_MAX_WIDTH = '1600px';

enum Type {
  PROTEIN_MIX,
  THERMOJETICS,
  DRINKS,
}

export const products: {
  id: number;
  title: string;
  type: Type;
  price: number;
  image: string;
}[] = [
  {
    id: 1,
    title: 'Formula 1 - Smooth Chocolate',
    type: Type.PROTEIN_MIX,
    price: 3099,
    image: Formual1Image,
  },
  {
    id: 2,
    title: 'Formula 1 - Strawberry Delight',
    type: Type.PROTEIN_MIX,
    price: 2958,
    image: Formual1Image,
  },
  {
    id: 3,
    title: 'Formula 1 - Vanila Creme',
    type: Type.PROTEIN_MIX,
    price: 2958,
    image: Formual1Image,
  },
  {
    id: 4,
    title: 'Formula 1 - Banana Cream',
    type: Type.PROTEIN_MIX,
    price: 2958,
    image: Formual1Image,
  },
  {
    id: 5,
    title: 'Formula 1 - CaffeLatte',
    type: Type.PROTEIN_MIX,
    price: 2958,
    image: Formual1Image,
  },
  {
    id: 6,
    title: 'Formula 1 - Fruits of the forest',
    type: Type.PROTEIN_MIX,
    price: 3099,
    image: Formual1Image,
  },
  {
    id: 7,
    title: 'Formula 1 - Cookie Crunch',
    type: Type.PROTEIN_MIX,
    price: 3099,
    image: Formual1Image,
  },
  {
    id: 8,
    title: 'Formula 1 - Raspberry and White chocolate (soy, lactose, gluten free)',
    type: Type.PROTEIN_MIX,
    price: 3099,
    image: Formual1Image,
  },
  {
    id: 9,
    title: 'Herbal Aloe - Mango',
    type: Type.DRINKS,
    price: 2578,
    image: Formual1Image,
  },
  {
    id: 10,
    title: 'Apple, oats, fiber drink (Sugar free)',
    type: Type.DRINKS,
    price: 1867,
    image: Formual1Image,
  },
  {
    id: 11,
    title: 'Instant tea - Lemon',
    type: Type.THERMOJETICS,
    price: 1862,
    image: Formual1Image,
  },
];
