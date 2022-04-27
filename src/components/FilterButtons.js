import { FOOD_TYPE } from "../constants";

const FILTER_BTN = {
  height: "20px",
  width: "100px",
  backgroundColor: "black",
  color: "white",
  margin: "10px",
  borderRadius: "4px",
};

const SELECTED_FILTER_BTN = {
  height: "20px",
  width: "100px",
  backgroundColor: "white",
  color: "black",
  margin: "10px",
  borderRadius: "4px",
};

const BTN_LANGUAGE = {
  meat: { english: "Meat", spanish: "Carne" },
  fish: { english: "Fish", spanish: "Pescado" },
  vegetarian: { english: "Vegetarian", spanish: "Vegetariana" },
};

const FilterButtons = ({
  isEnglish,
  handleMeatFilter,
  handleFishFilter,
  handleVegetarianFilter,
  typeFilter,
}) => {
  return (
    <div>
      <button
        onClick={handleMeatFilter}
        style={typeFilter === FOOD_TYPE.MEAT ? SELECTED_FILTER_BTN : FILTER_BTN}
      >
        {isEnglish ? BTN_LANGUAGE.meat.english : BTN_LANGUAGE.meat.spanish}
      </button>
      <button
        onClick={handleFishFilter}
        style={typeFilter === FOOD_TYPE.FISH ? SELECTED_FILTER_BTN : FILTER_BTN}
      >
        {isEnglish ? BTN_LANGUAGE.fish.english : BTN_LANGUAGE.fish.spanish}
      </button>
      <button
        onClick={handleVegetarianFilter}
        style={
          typeFilter === FOOD_TYPE.VEGETARIAN ? SELECTED_FILTER_BTN : FILTER_BTN
        }
      >
        {isEnglish
          ? BTN_LANGUAGE.vegetarian.english
          : BTN_LANGUAGE.vegetarian.spanish}
      </button>
    </div>
  );
};

export default FilterButtons;
