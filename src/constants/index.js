import IMAGES from "./assets";

const FOOD_ITEMS = [
  {
    name: { english: "Chicken Parmagiana", spanish: "Pollo Parmesano" },
    price: { english: "$20", spanish: "400" },
    type: { english: ["White Meat", "Chicken"], spanish: ["Carne", "Pollo"] },
    image: IMAGES.chickenParm,
  },
  {
    name: { english: "Chicken Marsala", spanish: "Pollo Marsalla" },
    price: { english: "$20", spanish: "400" },
    type: { english: ["White Meat", "Chicken"], spanish: ["Carne", "Pollo"] },
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
    type: { english: ["Fish"], spanish: ["Pescado"] },
    image: IMAGES.salmon,
  },
  {
    name: { english: "Lobster", spanish: "Langosta" },
    price: { english: "$50", spanish: "1000" },
    type: {
      english: ["Seafood", "Shellfish"],
      spanish: ["Mariscos", "Crustaceo"],
    },
    image: IMAGES.lobster,
  },
];

export default FOOD_ITEMS;
