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
      <button onClick={() => handleLanguageSelection("English")}>
        English
      </button>
      <button onClick={() => handleLanguageSelection("Spanish")}>
        Español
      </button>
      <button onClick={() => handleLanguageSelection("French")}>
        Français
      </button>
    </div>
  );
};

export default LanguageToggle;
