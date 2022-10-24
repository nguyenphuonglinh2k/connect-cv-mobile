import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const ChevronIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M18.42 8.17969H12.19H6.57999C5.61999 8.17969 5.13999 9.33969 5.81999 10.0197L11 15.1997C11.83 16.0297 13.18 16.0297 14.01 15.1997L15.98 13.2297L19.19 10.0197C19.86 9.33969 19.38 8.17969 18.42 8.17969Z"
        fill={color}
      />
    </Svg>
  );
};

ChevronIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ChevronIcon.defaultProps = {
  color: "#697381",
  width: 24,
  height: 24,
};

export default ChevronIcon;
