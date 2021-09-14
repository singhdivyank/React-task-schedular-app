import PropTypes from "prop-types";
import { useLocation } from "react-router"; // to hide add button upon clicking about
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "Green" : "Orange"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  ); // show button when pathname is '/'
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/* styling the heading -- css in JS */
// <h1 style={headingStyle}>{title}</h1>
/*const headingStyle = {
    color: "red", backgroundColor: "black"
}*/

export default Header;
