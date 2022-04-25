import IMAGES from "./assets";

export const FILTER_TYPE = {
  ALL: "all",
  MEAT: "Meat",
  FISH: "Fish",
  VEGETARIAN: "Vegetarian",
};

export const FOOD_ITEMS = [
  {
    name: { english: "Chicken Parmagiana", spanish: "Pollo Parmesano" },
    price: { english: "$20", spanish: "400" },
    type: {
      english: ["White Meat", "Chicken"],
      spanish: ["Carne", "Pollo"],
    },
    image: IMAGES.chickenParm,
  },
  {
    name: { english: "Chicken Marsala", spanish: "Pollo Marsalla" },
    price: { english: "$20", spanish: "400" },
    type: {
      english: ["White Meat", "Chicken"],
      spanish: ["Carne", "Pollo"],
    },
    image: IMAGES.chickenMarsala,
  },
  {
    name: { english: "Filet Mignon", spanish: "Filete Mignon" },
    price: { english: "$40", spanish: "800" },
    type: {
      english: ["Red Meat", "Beef"],
      spanish: ["Carne Rojo", "Carne de Vaca"],
    },
    image: IMAGES.filetMignon,
  },
  {
    name: { english: "Salmon", spanish: "Salmon" },
    price: { english: "$30", spanish: "500" },
    type: {
      english: ["Fish", "Seafood"],
      spanish: ["Pescado", "Mariscos"],
    },
    image: IMAGES.salmon,
  },
  {
    name: { english: "Lobster", spanish: "Langosta" },
    price: { english: "$50", spanish: "1000" },
    type: {
      english: ["Shellfish", "Seafood"],
      spanish: ["Crustaceo", "Mariscos"],
    },
    image: IMAGES.lobster,
  },
  {
    name: { english: "Mahi Mahi", spanish: "Trabajo Trabajo" },
    price: { english: "$30", spanish: "500" },
    type: {
      english: ["Fish", "Seafood"],
      spanish: ["Pescado", "Mariscos"],
    },
    image: IMAGES.mahiMahi,
  },
  {
    name: {
      english: "Veggie Burger",
      spanish: "Hamburguesa Vegetariana",
    },
    price: { english: "$15", spanish: "300" },
    type: {
      english: ["Vegetarian"],
      spanish: ["Vegetariana"],
    },
    image: IMAGES.veggieBurger,
  },
];
