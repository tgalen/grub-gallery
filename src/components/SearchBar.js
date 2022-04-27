const SEARCH_BTN_STYLE = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
};

const SearchBar = ({
  handleSearchBarOnChange,
  searchBarInput,
  handleSearchButton,
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
      <button style={SEARCH_BTN_STYLE}>Clear Search</button>
    </div>
  );
};

export default SearchBar;
