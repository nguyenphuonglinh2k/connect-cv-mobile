import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CommonButton = ({ label, style, labelStyle, ...otherProps }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...otherProps}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CommonButton.defaultProps = {};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#673ab7",
    borderRadius: 44,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontWeight: "500",
  },
});

export default CommonButton;
