import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import CardContainer from "./CardContainer";
import LanguageToggle from "./LanguageToggle";
import { FILTER_TYPE, FOOD_ITEMS } from "../constants";

const LANGUAGE_BTN_WRAPPER = {
  margin: "auto",
  textAlign: "center",
  marginTop: "50px",
};

const SEARCH_BAR_WRAPPER = {
  textAlign: "center",
  marginTop: "20px",
};

const FILTER_BTNS_WRAPPER = {
  textAlign: "center",
  marginTop: "20px",
};

const Body = () => {
  // language toggle
  const [isEnglish, setEnglish] = useState(true);

  // filter state
  const [typeFilter, setTypeFilter] = useState(FILTER_TYPE.ALL);

  // language toggle function
  const handleLanguageToggle = () => {
    setEnglish(!isEnglish);
  };

  // handle filter buttons
  const handleMeatFilter = () => {
    setTypeFilter(FILTER_TYPE.MEAT);
  };

  const handleFishFilter = () => {
    setTypeFilter(FILTER_TYPE.FISH);
  };

  const handleVegetarianFilter = () => {
    setTypeFilter(FILTER_TYPE.VEGETARIAN);
  };

  // filter the complete list of food per filter buttons
  const FILTERED_FOOD_LIST = FOOD_ITEMS.filter((item) => {
    if (typeFilter === "all") {
      return item;
    }
    if (item.type.english[0].includes(typeFilter)) return item;
  });

  return (
    <div>
      <div style={LANGUAGE_BTN_WRAPPER}>
        <LanguageToggle
          isEnglish={isEnglish}
          handleLanguageToggle={handleLanguageToggle}
        />
      </div>
      <div style={SEARCH_BAR_WRAPPER}>
        <SearchBar />
      </div>
      <div style={FILTER_BTNS_WRAPPER}>
        <FilterButtons
          isEnglish={isEnglish}
          handleMeatFilter={handleMeatFilter}
          handleFishFilter={handleFishFilter}
          handleVegetarianFilter={handleVegetarianFilter}
        />
      </div>
      <CardContainer
        isEnglish={isEnglish}
        FILTERED_FOOD_LIST={FILTERED_FOOD_LIST}
      />
    </div>
  );
};

export default Body;
