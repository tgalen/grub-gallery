const SEARCH_BTN_STYLE = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
};

const SearchBar = ({
  handleSearchBarOnChange,
  searchBarInput,
  handleSearchButton,
  handleClearSearch,
}) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Grub"
        value={searchBarInput}
        onChange={handleSearchBarOnChange}
      />
      <button style={SEARCH_BTN_STYLE} onClick={handleSearchButton}>
        Search
      </button>
      <button style={SEARCH_BTN_STYLE} onClick={handleClearSearch}>
        Clear Search
      </button>
    </div>
  );
};

export default SearchBar;
