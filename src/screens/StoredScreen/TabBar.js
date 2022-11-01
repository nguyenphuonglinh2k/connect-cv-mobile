import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const TabBar = ({ selectedTab, setSelectedTab }) => {
  const onChangeActivatedTab = value => () => {
    setSelectedTab(value);
  };

  return (
    <View style={styles.wrapper}>
      {TAB_DATA.map(({ label, tabValue }) => {
        const isTabSelected = Boolean(selectedTab === tabValue);

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            key={tabValue}
            onPress={onChangeActivatedTab(tabValue)}
            style={[styles.tab, isTabSelected && styles.selectedTab]}
          >
            <Text
              style={[isTabSelected ? styles.selectedLabel : {}, styles.label]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

TabBar.propTypes = {
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
};

export const STORE_JOB_TAB_VALUES = {
  applied: 1,
  saved: 2,
};

export const TAB_DATA = [
  {
    label: "Applied",
    tabValue: STORE_JOB_TAB_VALUES.applied,
  },
  {
    label: "Saved",
    tabValue: STORE_JOB_TAB_VALUES.saved,
  },
];

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedLabel: {
    fontWeight: "bold",
    color: "#261543",
  },
  selectedTab: {
    borderBottomColor: "#673ab7",
    borderBottomWidth: 2,
  },
  tab: {
    paddingVertical: 8,
    flex: 1,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  label: {
    textAlign: "center",
  },
});
