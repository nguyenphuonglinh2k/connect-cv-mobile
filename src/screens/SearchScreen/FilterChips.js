import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Chip from "./Chip";

const FilterChips = () => {
  const searchTag = useSelector(({ jobRedux }) => jobRedux.searchTag);

  return (
    Boolean(searchTag) && (
      <View style={styles.wrapper}>
        <Chip label={searchTag} />
      </View>
    )
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
