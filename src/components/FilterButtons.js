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
      <button style={FILTER_BTN}>Meat</button>
      <button style={FILTER_BTN}>Fish</button>
      <button style={FILTER_BTN}>Vegetarian</button>
    </div>
  );
};

export default FilterButtons;
