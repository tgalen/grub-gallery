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
            key={item.NAME.ENGLISH}
            img={item.IMAGE}
            name={item.NAME[currentLanguage]}
            price={item.PRICE[currentLanguage]}
            type={item.TYPE}
            currentLanguage={currentLanguage}
          />
        );
      })}
    </ul>
  );
};

export default CardContainer;
