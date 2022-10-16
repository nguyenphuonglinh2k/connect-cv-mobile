import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ContainedButton = ({
  title,
  onPress,
  style,
  disabled,
  ...otherProps
}) => {

  return (
    <TouchableOpacity
      onPress={!disabled && onPress}
      activeOpacity={0.5}
      style={[{ width: '100%' }, style]}
      {...otherProps}
    >
      <Text style={[{ color: "#fff", fontWeight: 'bold', fontSize: 18 },]}>{title}</Text>

    </TouchableOpacity>
  );
};

export default ContainedButton;

ContainedButton.propTypes = {
  title: PropTypes.string,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};
