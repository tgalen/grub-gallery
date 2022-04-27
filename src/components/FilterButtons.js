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
  MEAT: {
    ENGLISH: "Meat",
    SPANISH: "Carne",
    FRENCH: "Viande",
  },
  SEAFOOD: {
    ENGLISH: "Seafood",
    SPANISH: "Mariscos",
    FRENCH: "Fruit de mer",
  },
  VEGETARIAN: {
    ENGLISH: "Vegetarian",
    SPANISH: "Vegetariana",
    FRENCH: "Végétarien",
  },
};

const FilterButtons = ({
  currentLanguage,
  handleMeatFilter,
  handleSeafoodFilter,
  handleVegetarianFilter,
  typeFilter,
}) => {
  return (
    <div>
      <button
        onClick={handleMeatFilter}
        style={typeFilter === FOOD_TYPE.MEAT ? SELECTED_FILTER_BTN : FILTER_BTN}
      >
        {BTN_LANGUAGE.MEAT[currentLanguage]}
      </button>
      <button
        onClick={handleSeafoodFilter}
        style={
          typeFilter === FOOD_TYPE.SEAFOOD ? SELECTED_FILTER_BTN : FILTER_BTN
        }
      >
        {BTN_LANGUAGE.SEAFOOD[currentLanguage]}
      </button>
      <button
        onClick={handleVegetarianFilter}
        style={
          typeFilter === FOOD_TYPE.VEGETARIAN ? SELECTED_FILTER_BTN : FILTER_BTN
        }
      >
        {BTN_LANGUAGE.VEGETARIAN[currentLanguage]}
      </button>
    </div>
  );
};

export default FilterButtons;
