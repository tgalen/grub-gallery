const SEARCH_BTN_STYLE = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
};

const SearchBar = () => {
  return (
    <div>
      <input type="search" />
      <button style={SEARCH_BTN_STYLE}>Search</button>
    </div>
  );
};

export default SearchBar;
