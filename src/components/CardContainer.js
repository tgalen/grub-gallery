import Card from "./Card";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const CardContainer = ({ isEnglish, filteredFoodList }) => {
  return (
    <ul style={UL_STYLE}>
      {filteredFoodList.map((item) => {
        return (
          <Card
            key={item.name.english}
            img={item.image}
            name={item.name}
            price={item.price}
            type={item.type}
          />
        );
      })}
    </ul>
  );
};

export default CardContainer;
