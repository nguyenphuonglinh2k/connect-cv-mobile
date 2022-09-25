import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const MenuIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        opacity="0.4"
        d="M16.0756 2H19.4616C20.8638 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8638 10.5345 19.4616 10.5345H16.0756C14.6733 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6733 2 16.0756 2Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
        fill={color}
      />
    </Svg>
  );
};

MenuIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

MenuIcon.defaultProps = {
  color: "#A19FA8",
  width: 24,
  height: 24,
};

export default MenuIcon;