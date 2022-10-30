import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import PropTypes from "prop-types";

const CircleXMarkIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <G clipPath="url(#clip0_1_5)">
        <Path
          d="M10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594V6.83594Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_5">
          <Rect height={height} width={width} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

CircleXMarkIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CircleXMarkIcon.defaultProps = {
  color: "#673AB7",
  width: 20,
  height: 20,
};

export default CircleXMarkIcon;
