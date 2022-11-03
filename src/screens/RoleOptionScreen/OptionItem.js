import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OptionItem = ({ imageSource, title, desc, style, ...otherProps }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapper, style]}
      {...otherProps}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

OptionItem.propTypes = {
  imageSource: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 77,
    width: 77,
    marginRight: 24,
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#673ab7",
    textTransform: "uppercase",
  },
  desc: {
    color: "#7e7e7e",
  },
});

export default OptionItem;
