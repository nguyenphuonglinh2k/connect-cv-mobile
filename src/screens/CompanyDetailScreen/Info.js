import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

const Info = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <Text style={styles.label}>About Company</Text>
      <Text style={styles.info}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      </Text>
    </View>
  );
};

Info.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    marginBottom: 8,
  },
  label: {
    color: "#212529",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 8,
  },
  info: {
    color: "#7e7e7e",
  },
});

export default Info;
