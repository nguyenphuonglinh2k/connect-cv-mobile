import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TextButton = ({ children, textStyle, ...otherProps }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...otherProps}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

TextButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 12,
    color: "#673ab7",
  },
});

export default TextButton;
