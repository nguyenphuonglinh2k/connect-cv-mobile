import React from "react";
import { StyleSheet, View } from "react-native";
import Chip from "./Chip";

const FilterChips = () => {
  return (
    <View style={styles.wrapper}>
      <Chip label="Fulltime" />
    </View>
  );
};

FilterChips.propTypes = {};

FilterChips.defaultProps = {};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 8,
  },
});

export default FilterChips;
