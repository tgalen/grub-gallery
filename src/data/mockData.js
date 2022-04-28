import { FOOD_TYPE } from "../constants";

export const IMAGES = {
  chickenParm:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzZMT0g5DhYmyy7KT7i5HhkaE-RPnzBfLJg&usqp=CAU",
  chickenMarsala:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvek1ZI3h7TpOKBLQbN17PJe93Y9svY9yMEg&usqp=CAU",
  filetMignon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5rQ2ah2tR1cuAYtV70GbnBL25tLZHskQOg&usqp=CAU",
  salmon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNZSfDNfEL4FW4tXJxcdDMUUwsoSbbuEN5w&usqp=CAU",
  lobster:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0OZnKbgZsN6od_4rGTVJ_tGlHSYoH5AoWA&usqp=CAU",
  mahiMahi:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1xk5xJXn8mDCzWuB0d9PjbhEU15by-atmA&usqp=CAU",
  veggieBurger:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbI-u78pHvfAdcEN8AZn__aj8IvklwcGpRA&usqp=CAU",
  surfTurf:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH-e5zdtnb5zRywan_fVGmedNU_BGyT3-6w&usqp=CAU",
};

export const FOOD_ITEMS = [
  {
    name: {
      english: "Chicken Parmagiana",
      spanish: "Pollo Parmesano",
      french: "Poulet au Parmesan",
    },
    price: {
      english: { currency: "$", value: 20 },
      spanish: { currency: "₱", value: 400 },
      french: { currency: "€", value: 20 },
    },
    type: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    image: IMAGES.chickenParm,
  },
  {
    name: {
      english: "Chicken Marsala",
      spanish: "Pollo Marsalla",
      french: "Poulet Marsala",
    },
    price: {
      english: { currency: "$", value: 20 },
      spanish: { currency: "₱", value: 400 },
      french: { currency: "€", value: 20 },
    },
    type: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    image: IMAGES.chickenMarsala,
  },
  {
    name: {
      english: "Filet Mignon",
      spanish: "Filete Mignon",
      french: "Filet Mignon",
    },
    price: {
      english: { currency: "$", value: 40 },
      spanish: { currency: "₱", value: 800 },
      french: { currency: "€", value: 38 },
    },
    type: [FOOD_TYPE.MEAT, FOOD_TYPE.BEEF],
    image: IMAGES.filetMignon,
  },
  {
    name: {
      english: "Salmon",
      spanish: "Salmon",
      french: "Saumon",
    },
    price: {
      english: { currency: "$", value: 25 },
      spanish: { currency: "₱", value: 500 },
      french: { currency: "€", value: 25 },
    },
    type: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    image: IMAGES.salmon,
  },
  {
    name: {
      english: "Lobster",
      spanish: "Langosta",
      french: "Homard",
    },
    price: {
      english: { currency: "$", value: 50 },
      spanish: { currency: "₱", value: 1000 },
      french: { currency: "€", value: 43 },
    },
    type: [FOOD_TYPE.SEAFOOD, FOOD_TYPE.SHELLFISH],
    image: IMAGES.lobster,
  },
  {
    name: {
      english: "Mahi Mahi",
      spanish: "Trabajo Trabajo",
      french: "Travail Travail",
    },
    price: {
      english: { currency: "$", value: 25 },
      spanish: { currency: "₱", value: 500 },
      french: { currency: "€", value: 25 },
    },
    type: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    image: IMAGES.mahiMahi,
  },
  {
    name: {
      english: "Veggie Burger",
      spanish: "Hamburguesa Vegetariana",
      french: "Burger Végétarien",
    },
    price: {
      english: { currency: "$", value: 15 },
      spanish: { currency: "₱", value: 300 },
      french: { currency: "€", value: 15 },
    },
    type: [FOOD_TYPE.VEGETARIAN],
    image: IMAGES.veggieBurger,
  },
  {
    name: {
      english: "Surf & Turf",
      spanish: "Plato de Mar y Tierra",
      french: "Surf et Gazon",
    },
    price: {
      english: { currency: "$", value: 65 },
      spanish: { currency: "₱", value: 1300 },
      french: { currency: "€", value: 62 },
    },
    type: [
      FOOD_TYPE.BEEF,
      FOOD_TYPE.SHELLFISH,
      FOOD_TYPE.SEAFOOD,
      FOOD_TYPE.MEAT,
    ],
    image: IMAGES.surfTurf,
  },
];
