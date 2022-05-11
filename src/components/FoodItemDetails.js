import { useLocation } from "react-router-dom";

const headerStyle = {
  textAlign: "center",
};

const FoodItemDetails = ({ item }) => {
  //   const getItemFromRoute = window.location.href.split("/")[3].split("%");
  //   console.log(getItemFromRoute);

  //   const formatItemName = getItemFromRoute.map((string, index) => {
  //     if (index > 0) {
  //       return string.slice(2);
  //     }
  //     return string;
  //   });

  //   const dishName = formatItemName.join(" ");

  const location = useLocation();

  return (
    <div>
      <div style={headerStyle}>
        <h1>
          {location.state.name.english} | {location.state.name.spanish} |{" "}
          {location.state.name.french}{" "}
        </h1>
      </div>
    </div>
  );
};

export default FoodItemDetails;
