import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import CoinIcon from "icons/CoinIcon";

const Salary = ({ value, style, ...otherProps }) => {
  return (
    <View style={styles.wrapper} {...otherProps}>
      <View style={styles.iconWrapper}>
        <CoinIcon height={25} width={25} />
      </View>
      <View>
        <Text style={styles.label}>Salary</Text>
        <Text style={styles.value}>{`${value}/month`}</Text>
      </View>
    </View>
  );
};

Salary.propTypes = {
  value: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Salary.defaultProps = {};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 24,
  },
  iconWrapper: {
    marginRight: 16,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#673ab71a",
    borderWidth: 1,
    borderColor: "#673ab733",
    borderRadius: 27,
  },
  label: {
    color: "#6F6F6F",
    marginBottom: 8,
  },
  value: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
});

export default Salary;
