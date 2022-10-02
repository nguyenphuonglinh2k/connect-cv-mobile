import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const Description = ({ value }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Job Description</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

Description.propTypes = {
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingBottom: 8,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  value: {
    color: "#7e7e7e",
  },
});

export default Description;
