import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

const Info = ({ data, style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <Text style={styles.label}>About Company</Text>
      <Text style={styles.info}>{data?.detail?.description}</Text>
    </View>
  );
};

Info.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.object,
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
