import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";

const SliderItem = ({ imageSrc, title, desc, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

SliderItem.propTypes = {
  imageSrc: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 145,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#212529",
    textAlign: "center",
    marginBottom: 12,
    maxWidth: 290,
  },
  desc: {
    color: "#7e7e7e",
    textAlign: "center",
  },
});

export default SliderItem;
