import React from "react";
// import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import CommonButton from "components/CommonButton";

const Actions = () => {
  return (
    <View style={styles.wrapper}>
      <CommonButton
        label="Cancel"
        style={styles.firstButton}
        labelStyle={styles.label}
      />
      <CommonButton label="Apply" style={{ flex: 1, marginLeft: 4 }} />
    </View>
  );
};

Actions.propTypes = {};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 15,
  },
  firstButton: {
    flex: 1,
    marginRight: 4,
    backgroundColor: "#673ab71a",
  },
  label: {
    color: "#673ab7",
  },
});

export default Actions;
