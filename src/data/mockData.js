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
};

export const FOOD_ITEMS = [
  {
    NAME: {
      ENGLISH: "Chicken Parmagiana",
      SPANISH: "Pollo Parmesano",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 20 },
      SPANISH: { CURRENCY: "₱", VALUE: 400 },
      FRENCH: { CURRENCY: "€", VALUE: 20 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    IMAGE: IMAGES.chickenParm,
  },
  {
    NAME: {
      ENGLISH: "Chicken Marsala",
      SPANISH: "Pollo Marsalla",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 20 },
      SPANISH: { CURRENCY: "₱", VALUE: 400 },
      FRENCH: { CURRENCY: "€", VALUE: 20 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    IMAGE: IMAGES.chickenMarsala,
  },
  {
    NAME: {
      ENGLISH: "Filet Mignon",
      SPANISH: "Filete Mignon",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 40 },
      SPANISH: { CURRENCY: "₱", VALUE: 800 },
      FRENCH: { CURRENCY: "€", VALUE: 38 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.BEEF],
    IMAGE: IMAGES.filetMignon,
  },
  {
    NAME: {
      ENGLISH: "Salmon",
      SPANISH: "Salmon",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 25 },
      SPANISH: { CURRENCY: "₱", VALUE: 500 },
      FRENCH: { CURRENCY: "€", VALUE: 25 },
    },
    TYPE: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    IMAGE: IMAGES.salmon,
  },
  {
    NAME: { ENGLISH: "Lobster", SPANISH: "Langosta", FRENCH: "look up french" },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 50 },
      SPANISH: { CURRENCY: "₱", VALUE: 1000 },
      FRENCH: { CURRENCY: "€", VALUE: 43 },
    },
    TYPE: [FOOD_TYPE.SEAFOOD, FOOD_TYPE.SHELLFISH],
    IMAGE: IMAGES.lobster,
  },
  {
    NAME: {
      ENGLISH: "Mahi Mahi",
      SPANISH: "Trabajo Trabajo",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 25 },
      SPANISH: { CURRENCY: "₱", VALUE: 500 },
      FRENCH: { CURRENCY: "€", VALUE: 25 },
    },
    TYPE: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    IMAGE: IMAGES.mahiMahi,
  },
  {
    NAME: {
      ENGLISH: "Veggie Burger",
      SPANISH: "Hamburguesa Vegetariana",
      FRENCH: "look up french",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 15 },
      SPANISH: { CURRENCY: "₱", VALUE: 300 },
      FRENCH: { CURRENCY: "€", VALUE: 15 },
    },
    TYPE: [FOOD_TYPE.VEGETARIAN],
    IMAGE: IMAGES.veggieBurger,
  },
  {
    NAME: {
      ENGLISH: "Surf & Turf",
      SPANISH: "Plato de Mar y Tierra",
      FRENCH: "Surf et Gazon",
    },
    PRICE: {
      ENGLISH: { CURRENCY: "$", VALUE: 65 },
      SPANISH: { CURRENCY: "₱", VALUE: 1300 },
      FRENCH: { CURRENCY: "€", VALUE: 62 },
    },
    TYPE: [FOOD_TYPE.BEEF, FOOD_TYPE.SHELLFISH, FOOD_TYPE.SEAFOOD],
    IMAGE:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH-e5zdtnb5zRywan_fVGmedNU_BGyT3-6w&usqp=CAU",
  },
];
