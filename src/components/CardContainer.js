import IMAGES from "../assets";
import Card from "./Card";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const CardContainer = ({ isEnglish }) => {
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

  return (
    <ul style={UL_STYLE}>
      {FOOD_ITEMS.map((item) => {
        return (
          <Card
            img={item.image}
            name={isEnglish ? item.name.english : item.name.spanish}
            price={isEnglish ? item.price.english : item.price.spanish}
            type={isEnglish ? item.type.english : item.type.spanish}
          />
        );
      })}
    </ul>
  );
};

export default CardContainer;
