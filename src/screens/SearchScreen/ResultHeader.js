import { useNavigation } from "@react-navigation/core";
import { IconButton } from "components/common";
import { RouteName } from "const/path.const";
import FilterIcon from "icons/FilterIcon";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import FilterChips from "./FilterChips";

const ResultHeader = () => {
  const navigation = useNavigation();

  const [total] = useSelector(({ jobRedux }) => [jobRedux.total]);

  const handleNavigateToFilterScreen = () => {
    navigation.navigate(RouteName.filter);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.resultTxt}>Results</Text>
        <IconButton
          style={styles.iconWrapper}
          onPress={handleNavigateToFilterScreen}
        >
          <FilterIcon />
        </IconButton>
      </View>
      <Text style={styles.subText}>
        {total} {total > 1 ? "jobs" : "job"} founded
      </Text>
      <FilterChips />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
  },
  subText: {
    color: "#7e7e7e",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#00aeff1a",
  },
});

export default ResultHeader;
