import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import CardContainer from "./CardContainer";
import LanguageToggle from "./LanguageToggle";

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
  const [isEnglish, setEnglish] = useState(true);

  const handleLanguageToggle = () => {
    setEnglish(!isEnglish);
  };

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
        <FilterButtons />
      </div>
      <CardContainer isEnglish={isEnglish} />
    </div>
  );
};

export default Body;
