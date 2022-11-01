import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const OtherSignInMethod = props => {
  return (
    <View {...props}>
      <View style={styles.topWrapper}>
        <View style={styles.divider} />
        <Text style={styles.text}>Or sign in with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.bottomWrapper}>
        <LoginItem
          style={{ marginRight: 8 }}
          uri="https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/social/google.png"
        />
        <LoginItem
          style={{ marginLeft: 8 }}
          uri="https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/social/facebook.png"
        />
      </View>
    </View>
  );
};

const LoginItem = ({ uri, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.socialNetwork, style]}>
      <Image style={{ width: 28, height: 28 }} source={{ uri }} />
    </TouchableOpacity>
  );
};

LoginItem.propTypes = {
  uri: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#00000066",
    width: 50,
  },
  text: {
    color: "#6d27d1",
    marginHorizontal: 10,
  },
  bottomWrapper: {
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialNetwork: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 48,
    flex: 1,
  },
});

export default OtherSignInMethod;
