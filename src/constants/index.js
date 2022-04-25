import IMAGES from "./assets";

const FOOD_ITEMS = [
  {
    name: { english: "Chicken Parmagiana", spanish: "Pollo Parmesano" },
    price: { english: "$20", spanish: "400" },
    type: { english: "White Meat, Chicken", spanish: "Carne, Pollo" },
    image: IMAGES.chickenParm,
  },
  {
    name: { english: "Chicken Marsala", spanish: "Pollo Marsalla" },
    price: { english: "$20", spanish: "400" },
    type: { english: "White Meat, Chicken", spanish: "Carne, Pollo" },
    image: IMAGES.chickenMarsala,
  },
  {
    name: { english: "Filet Mignon", spanish: "Filete Mignon" },
    price: { english: "$40", spanish: "800" },
    type: { english: "Red Meat, Beef", spanish: "Carne Rojo, Carne de Vaca" },
    image: IMAGES.filetMignon,
  },
];

export default FOOD_ITEMS;
