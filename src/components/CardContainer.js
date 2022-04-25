import FOOD_ITEMS from "../constants";
import Card from "./Card";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const CardContainer = ({ isEnglish }) => {
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
