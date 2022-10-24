import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CommonChip } from "components/common";

const InfoChips = props => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <CommonChip label={item} style={styles.item} />}
      keyExtractor={(_, i) => i}
      {...props}
    />
  );
};

InfoChips.propTypes = {};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  item: {
    marginHorizontal: 5,
  },
});

export default InfoChips;
