import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const CommonChip = ({ label, style, labelStyle, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

CommonChip.propTypes = {
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E1D3FF",
    borderRadius: 40,
  },
  label: {
    color: "#673ab7",
    textAlign: "center",
    fontSize: 13,
  },
});

export default memo(CommonChip);
