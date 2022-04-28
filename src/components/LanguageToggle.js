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
        onClick={() => handleLanguageSelection("english")}
      >
        English
      </button>
      <button
        style={BUTTON_STYLE}
        onClick={() => handleLanguageSelection("spanish")}
      >
        Español
      </button>
      <button
        style={BUTTON_STYLE}
        onClick={() => handleLanguageSelection("french")}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageToggle;
