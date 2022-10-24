import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const IconButton = ({ children, ...otherProps }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...otherProps}>
      {children}
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default IconButton;
