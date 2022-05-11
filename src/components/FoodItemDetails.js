import { useLocation } from "react-router-dom";

const headerStyle = {
  textAlign: "center",
  marginTop: "5%",
};

const itemConstainerStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const imageContainer = {
  display: "inline-block",
  width: "250px",
  height: "250px",
};
const infoStyle = {
  width: "250px",
  height: "250px",
  backgroundColor: "lightgray",
  display: "inline-block",
};

const TYPE_TAG = {
  display: "inline-block",
  width: "15%",
  minWidth: "fit-content",
  backgroundColor: "lightblue",
  fontSize: "13px",
  borderStyle: "solid",
  border: "1px solid black",
  padding: "2px",
};

const FoodItemDetails = () => {
  const location = useLocation();
  const foodItem = location.state;
  const language = foodItem.language;

  return (
    <div>
      <div style={headerStyle}>
        <h3>{foodItem.name[language]}</h3>
      </div>
      <div style={itemConstainerStyle}>
        <div style={imageContainer}>
          <img
            alt={foodItem.name.english}
            src={foodItem.image}
            width="200px"
            height="250px"
          />
        </div>
        <div style={infoStyle}>
          Price: {foodItem.price[language].currency}
          {foodItem.price[language].value}
          <br />
          Type:{" "}
          <ul>
            {foodItem.type.map((type) => {
              return (
                <div key={Math.floor(Math.random() * 100000)} style={TYPE_TAG}>
                  {type[language]}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
