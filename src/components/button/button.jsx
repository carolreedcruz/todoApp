import PropTypes from "prop-types";
import "./button.css";

const Button = ({ text, backgroundColor, fontWeight, onClick }) => {
  const fontWeights = {
    tunn: "300",
    normal: "400",
    tjock: "700",
  };

  const backgroundColors = {
    white: "#FFFFFF",
    red: "#F44336",
    blue: "#2196F3",
    yellow: "#FFEB3B",
    roseGold: "#B76E79",
  };

  return (
    <button
      style={{
        backgroundColor: backgroundColors[backgroundColor],
        fontWeight: fontWeights[fontWeight],
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf([
    "black",
    "ed",
    "blue",
    "yellow",
    "roseGold",
  ]),
  fontWeight: PropTypes.oneOf(["tunn", "normal", "tjock"]),
  onClick: PropTypes.func,
};

export default Button;
