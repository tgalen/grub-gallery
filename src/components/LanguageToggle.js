const BUTTON_STYLE = {
  width: "150px",
  height: "25px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
};

const LanguageToggle = ({ isEnglish, handleLanguageToggle }) => {
  return isEnglish ? (
    <button style={BUTTON_STYLE} onClick={handleLanguageToggle}>
      Clic para Español
    </button>
  ) : (
    <button style={BUTTON_STYLE} onClick={handleLanguageToggle}>
      Click for English
    </button>
  );
};

export default LanguageToggle;
