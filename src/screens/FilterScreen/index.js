import React from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SelectBox from "./SelectBox";

const FilterScreen = () => {
  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Filter",
      }}
    >
      <View style={styles.wrapper}>
        <SelectBox label="Location" value="aaaa" />
        <SelectBox label="Salary" value="aaaa" style={styles.mt} />
        <SelectBox label="Career" value="aaaa" style={styles.mt} />
        <SelectBox label="Ways of working" value="aaaa" style={styles.mt} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
  mt: {
    marginTop: 12,
  },
});

export default FilterScreen;
