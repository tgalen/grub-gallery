import { Link } from "react-router-dom";

const HEADER_STYLE = {
  textAlign: "center",
  position: "relative",
};

const NAV_CONTAINER = {
  position: "absolute",
  right: "5%",
  top: "1%",
};

const LINK_STYLE = {
  color: "black",
  margin: "5px",
  textDecoration: "none",
};

const Header = () => {
  return (
    <div style={HEADER_STYLE}>
      <h1>Grub Gallery</h1>
      <div style={NAV_CONTAINER}>
        <Link to="/" style={LINK_STYLE}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/about" style={LINK_STYLE}>
          {" "}
          About{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
