import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Image, Text } from "react-native";
import CoinIcon from "icons/CoinIcon";

const CardJobItem = ({ data, style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <Image source={{ uri: data?.logo }} style={styles.logo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.jobName}>{data?.jobName}</Text>
        <Text style={styles.location}>{data?.location}</Text>

        <IconTextRow icon={<CoinIcon />} value={data?.salary} />
      </View>
    </View>
  );
};

const IconTextRow = ({ icon, value, style, textStyle, ...otherProps }) => {
  return (
    <View style={[styles.iconTextWrapper, style]} {...otherProps}>
      {icon}
      <Text style={[styles.iconTextValue, textStyle]}>{value}</Text>
    </View>
  );
};

IconTextRow.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CardJobItem.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    companyName: PropTypes.string,
    jobName: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
  }),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginRight: 20,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  location: {
    marginBottom: 10,
    color: "#7e7e7e",
  },
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTextValue: {
    color: "#7e7e7e",
    marginLeft: 10,
  },
});

export default CardJobItem;
