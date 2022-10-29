import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import ArrowIcon from "icons/ArrowIcon";

const SeeJobAction = ({ style, ...otherProps }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, style]} {...otherProps}>
        <Text style={styles.label}>{`21 Available Jobs`}</Text>
        <ArrowIcon style={styles.icon} color="white" />
      </TouchableOpacity>
    </View>
  );
};

SeeJobAction.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  button: {
    backgroundColor: "#673ab7",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 44,
  },
  label: {
    color: "white",
    fontWeight: "500",
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
});

export default SeeJobAction;
