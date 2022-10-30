import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Banner = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#673ab7", "#9a70e5"]}
      style={styles.banner}
    >
      <Text style={styles.signInText}>Create An Account</Text>
      <Text style={styles.desc}>Please fill registration form below</Text>
      <View style={styles.circle} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  banner: {
    minHeight: 140,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  signInText: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  desc: {
    color: "#ffffffb3",
    fontSize: 16,
  },
  circle: {
    width: 200,
    height: 200,
    borderWidth: 40,
    borderRadius: 100,
    borderColor: "white",
    opacity: 0.1,
    position: "absolute",
    top: 30,
    right: -80,
  },
});

export default Banner;
