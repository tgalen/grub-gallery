import Card from "./Card";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const CardContainer = ({ isEnglish, FILTERED_FOOD_LIST }) => {
  return (
    <ul style={UL_STYLE}>
      {FILTERED_FOOD_LIST.map((item) => {
        return (
          <Card
            key={item.name.english}
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
