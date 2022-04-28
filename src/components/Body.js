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
  const [currentLanguage, setLanguage] = useState("english");

  // filter button state
  const [typeFilter, setTypeFilter] = useState(FOOD_TYPE.ALL);

  // search bar states
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // handle language slection
  const handleLanguageSelection = (language) => {
    setLanguage(language);
  };

  // handle search features
  const handleSearchBarOnChange = (e) => {
    setSearchBarInput(e.target.value.trim().toLowerCase());
  };

  const handleSearchButton = () => {
    setSearchTerm(searchBarInput);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchBarInput("");
  };

  // handle filter buttons
  const handleMeatFilter = () => {
    typeFilter === FOOD_TYPE.MEAT
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.MEAT);
  };

  const handleSeafoodFilter = () => {
    typeFilter === FOOD_TYPE.SEAFOOD
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.SEAFOOD);
  };

  const handleVegetarianFilter = () => {
    typeFilter === FOOD_TYPE.VEGETARIAN
      ? setTypeFilter(FOOD_TYPE.ALL)
      : setTypeFilter(FOOD_TYPE.VEGETARIAN);
  };

  // filter the complete list of food per filter buttons
  const filteredFoodList = FOOD_ITEMS.filter((item) => {
    const containsFilters =
      typeFilter === FOOD_TYPE.ALL || item.type.includes(typeFilter);

    const containsSearchTerm =
      searchTerm === "" ||
      item.name[currentLanguage].toLowerCase().includes(searchTerm);

    return containsFilters && containsSearchTerm;
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
        <SearchBar
          handleSearchBarOnChange={handleSearchBarOnChange}
          handleClearSearch={handleClearSearch}
          handleSearchButton={handleSearchButton}
          searchBarInput={searchBarInput}
        />
      </div>
      <div style={FILTER_BTNS_WRAPPER_STYLE}>
        <FilterButtons
          currentLanguage={currentLanguage}
          handleMeatFilter={handleMeatFilter}
          handleSeafoodFilter={handleSeafoodFilter}
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
