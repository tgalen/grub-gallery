const CARD_STYLE = {
  listStyleType: "none",
  position: "relative",
  display: "block",
  height: "300px",
  width: "240px",
  overflow: "hidden",
  borderRadius: "15px",
  margin: "0.5%",
  border: "0.5px solid black",
  textDecoration: "none",
  color: "black",
};

const IMG_STYLE = {
  width: "100%",
  height: "auto",
};

const CARD_OVERLAY = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1",
  // borderRadius: "15px",
  backgroundColor: "mintCream",
  // maxHeight: "100px",
};

const TAG_CONTAINER_STYLE = {
  // display: "inline-block",
};

const TYPE_TAG = {
  display: "inline-block",
  width: "15%",
  minWidth: "fit-content",
  backgroundColor: "lightblue",
  fontSize: "13px",
  margin: "3px",
  borderStyle: "solid",
  border: "1px solid black",
  marginBottom: "4px",
  borderRadius: "2px",
  padding: "2px",
};

const Card = ({ item, currentLanguage }) => {
  return (
    <li style={CARD_STYLE}>
      <img
        style={IMG_STYLE}
        src={item.image}
        alt={item.name[currentLanguage]}
      />
      <div style={CARD_OVERLAY}>
        <h3>{item.name[currentLanguage]}</h3>
        <h5>
          {item.price[currentLanguage].currency}
          {item.price[currentLanguage].value}
        </h5>
        <div style={TAG_CONTAINER_STYLE}>
          {item.type.map((descirption) => {
            return (
              <div key={Math.floor(Math.random() * 100000)} style={TYPE_TAG}>
                {descirption[currentLanguage]}
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

// img={item.image}
// name={item.name[currentLanguage]}
// price={item.price[currentLanguage]}
// type={item.type}

export default Card;
