import Card from "./Card";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const CardContainer = ({ currentLanguage, filteredFoodList }) => {
  return (
    <ul style={UL_STYLE}>
      {filteredFoodList.map((item) => {
        return (
          <Card
            key={item.name.english}
            img={item.image}
            name={item.name[currentLanguage]}
            price={item.price[currentLanguage]}
            type={item.type}
            currentLanguage={currentLanguage}
          />
        );
      })}
    </ul>
  );
};

export default CardContainer;
