const FILTER_BTN = {
  height: "20px",
  width: "100px",
  backgroundColor: "black",
  color: "white",
  margin: "10px",
  borderRadius: "4px",
};

const FilterButtons = () => {
  return (
    <div>
      <button style={FILTER_BTN}>White Meat</button>
      <button style={FILTER_BTN}>Red Meat</button>
      <button style={FILTER_BTN}>Fish</button>
      <button style={FILTER_BTN}>Seafood</button>
      <button style={FILTER_BTN}>Shell Fish</button>
      <button style={FILTER_BTN}>Vegetarian</button>
    </div>
  );
};

export default FilterButtons;
