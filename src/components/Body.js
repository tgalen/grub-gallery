import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import CardContainer from "./CardContainer";
import LanguageToggle from "./LanguageToggle";
import { FOOD_TYPE } from "../constants";
import { FOOD_ITEMS } from "../data/mockData";

const LANGUAGE_BTN_WRAPPER_STYLE = {
  margin: "auto",
  textAlign: "center",
  marginTop: "50px",
};

const SEARCH_BAR_WRAPPER_STYLE = {
  textAlign: "center",
  marginTop: "20px",
};

const FILTER_BTNS_WRAPPER_STYLE = {
  textAlign: "center",
  marginTop: "20px",
};

const Body = () => {
  // current language
  const [currentLanguage, setLanguage] = useState("ENGLISH");
  console.log(FOOD_ITEMS[0].NAME[currentLanguage]);

  // filter state
  const [typeFilter, setTypeFilter] = useState(FOOD_TYPE.ALL);

  // handle language slection
  const handleLanguageSelection = (language) => {
    setLanguage(language);
  };

  // handle filter buttons
  const handleMeatFilter = () => {
    typeFilter === FOOD_TYPE.MEAT
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.MEAT);
  };

  const handleFishFilter = () => {
    typeFilter === FOOD_TYPE.FISH
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.FISH);
  };

  const handleVegetarianFilter = () => {
    typeFilter === FOOD_TYPE.VEGETARIAN
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.VEGETARIAN);
  };

  // filter the complete list of food per filter buttons
  const filteredFoodList = FOOD_ITEMS.filter((item) => {
    if (typeFilter === FOOD_TYPE.ALL) {
      return item;
    }
    if (item.TYPE.includes(typeFilter)) return item;
  });

  return (
    <div>
      <div style={LANGUAGE_BTN_WRAPPER_STYLE}>
        <LanguageToggle
          handleLanguageSelection={handleLanguageSelection}
          currentLanguage={currentLanguage}
        />
      </div>
      <div style={SEARCH_BAR_WRAPPER_STYLE}>
        <SearchBar />
      </div>
      <div style={FILTER_BTNS_WRAPPER_STYLE}>
        <FilterButtons
          currentLanguage={currentLanguage}
          handleMeatFilter={handleMeatFilter}
          handleFishFilter={handleFishFilter}
          handleVegetarianFilter={handleVegetarianFilter}
          typeFilter={typeFilter}
        />
      </div>
      <CardContainer
        currentLanguage={currentLanguage}
        filteredFoodList={filteredFoodList}
      />
    </div>
  );
};

export default Body;
