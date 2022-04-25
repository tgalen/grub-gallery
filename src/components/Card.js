const CARD_STYLE = {
  listStyleType: "none",
  position: "relative",
  display: "block",
  height: "300px",
  width: "240px",
  overflow: "hidden",
  borderRadius: "15px",
  margin: "0.5%",
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
  borderRadius: "15px",
  backgroundColor: "pink",
};

const Card = ({ img, name, price, type }) => {
  return (
    <li style={CARD_STYLE}>
      <img style={IMG_STYLE} src={img} alt={name} />
      <div style={CARD_OVERLAY}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <h7>{type}</h7>
      </div>
    </li>
  );
};

export default Card;