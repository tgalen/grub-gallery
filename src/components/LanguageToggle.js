const BUTTON_STYLE = {
  width: "150px",
  height: "25px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
};

const LanguageToggle = ({ handleLanguageSelection }) => {
  return (
    <div>
      <button
        style={BUTTON_STYLE}
        onClick={() => handleLanguageSelection("ENGLISH")}
      >
        English
      </button>
      <button
        style={BUTTON_STYLE}
        onClick={() => handleLanguageSelection("SPANISH")}
      >
        Español
      </button>
      <button
        style={BUTTON_STYLE}
        onClick={() => handleLanguageSelection("FRENCH")}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageToggle;
