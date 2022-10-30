import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CircleXMarkIcon from "icons/CircleXMarkIcon";

const Chip = ({ label, style, labelStyle, ...otherProps }) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...otherProps}>
      <CircleXMarkIcon />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

Chip.propTypes = {
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 12,
    borderRadius: 40,
    backgroundColor: "#673ab71a",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  label: {
    color: "#673ab7",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 12,
    marginLeft: 8,
  },
});

export default memo(Chip);
