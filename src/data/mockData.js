import { FOOD_TYPE } from "../constants";

export const IMAGES = {
  chickenParm:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiR2LhzhdVVg8QRpDH2S1ErzHVELdzkLWvfA&usqp=CAU",
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_mT7f0FBGhRvyTSmsZGRBMvqAeUB0MkbgRSDv6p6HionOdQLRv-8XjPzyQipD7rhzv8&usqp=CAU",
};

export const FOOD_ITEMS = [
  {
    NAME: {
      ENGLISH: "Chicken Parmagiana",
      SPANISH: "Pollo Parmesano",
      FRENCH: "",
    },
    PRICE: {
      ENGLISH: { currency: "$", value: 20 },
      SPANISH: { currency: "₱", value: 400 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    IMAGE: IMAGES.chickenParm,
  },
  {
    NAME: { ENGLISH: "Chicken Marsala", SPANISH: "Pollo Marsalla", FRENCH: "" },
    PRICE: {
      ENGLISH: { currency: "$", value: 20 },
      SPANISH: { currency: "₱", value: 400 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.CHICKEN, FOOD_TYPE.ITALIAN],
    IMAGE: IMAGES.chickenMarsala,
  },
  {
    NAME: { ENGLISH: "Filet Mignon", SPANISH: "Filete Mignon", FRENCH: "" },
    PRICE: {
      ENGLISH: { currency: "$", value: 40 },
      SPANISH: { currency: "₱", value: 800 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.MEAT, FOOD_TYPE.BEEF],
    IMAGE: IMAGES.filetMignon,
  },
  {
    NAME: { ENGLISH: "Salmon", SPANISH: "Salmon", FRENCH: "" },
    PRICE: {
      ENGLISH: { currency: "$", PRICE: "₱" },
      SPANISH: { currency: "₱", value: 500 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    IMAGE: IMAGES.salmon,
  },
  {
    NAME: { ENGLISH: "Lobster", SPANISH: "Langosta", FRENCH: "" },
    PRICE: {
      ENGLISH: { currency: "$", value: 50 },
      SPANISH: { currency: "₱", value: 1000 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.SEAFOOD, FOOD_TYPE.SHELLFISH],
    IMAGE: IMAGES.lobster,
  },
  {
    NAME: { ENGLISH: "Mahi Mahi", SPANISH: "Trabajo Trabajo", FRENCH: "" },
    PRICE: {
      ENGLISH: { currency: "$", value: 25 },
      SPANISH: { currency: "₱", value: 500 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.FISH, FOOD_TYPE.SEAFOOD],
    IMAGE: IMAGES.mahiMahi,
  },
  {
    NAME: {
      ENGLISH: "Veggie Burger",
      SPANISH: "Hamburguesa Vegetariana",
      FRENCH: "",
    },
    PRICE: {
      ENGLISH: { currency: "$", value: 15 },
      SPANISH: { currency: "₱", value: 300 },
      FRENCH: { currency: "", value: 1 },
    },
    TYPE: [FOOD_TYPE.VEGETARIAN],
    IMAGE: IMAGES.veggieBurger,
  },
];
