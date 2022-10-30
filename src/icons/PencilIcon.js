import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const PencilIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M5.12123 4.41312C6.01885 3.39171 7.60971 3.39174 8.5073 4.41318V4.41318C9.25505 5.2641 9.25505 6.53782 8.5073 7.38874L4.05038 12.4606C3.56658 13.0112 2.89797 13.3656 2.17077 13.4569L0.624379 13.6512C0.266263 13.6963 -0.036307 13.3517 0.0035357 12.9442L0.207157 10.8602C0.268293 10.2345 0.524459 9.64377 0.939473 9.17152L5.12123 4.41312ZM11.6704 1.97823L10.2616 0.375057C9.82219 -0.125019 9.10947 -0.125019 8.67003 0.375057L8.65203 0.395535C7.9043 1.24644 7.9043 2.52013 8.65203 3.37103L9.01971 3.78944C9.72237 4.58905 10.9678 4.58905 11.6704 3.78944V3.78944C12.1099 3.2891 12.1099 2.47831 11.6704 1.97823Z"
        fill={color}
      />
    </Svg>
  );
};

PencilIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

PencilIcon.defaultProps = {
  color: "#292D32",
  width: 12,
  height: 14,
};

export default PencilIcon;
