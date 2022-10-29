import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, View, Text } from "react-native";
import StarIcon from "icons/StarIcon";

const Header = ({ style, ...otherProps }) => {
  return (
    <View {...otherProps}>
      <View style={styles.bannerWrapper}>
        <Image
          source={{
            uri: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/bg1.png",
          }}
          style={styles.banner}
        />
        <Image
          source={{
            uri: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/logo/company-logo2.png",
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.info}>
        <View>
          <Text style={styles.name}>Highspeed Studios</Text>
          <Text style={styles.location}>Medan, Indonesia</Text>
        </View>
        <View style={styles.rateWrapper}>
          <StarIcon />
          <Text style={styles.rateNumber}>5.0</Text>
        </View>
      </View>
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  bannerWrapper: {
    position: "relative",
    marginBottom: 30,
  },
  banner: {
    width: "100%",
    height: 240,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 8,
    position: "absolute",
    left: 15,
    bottom: -30,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  name: {
    color: "#212529",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 8,
  },
  location: {
    color: "#7e7e7e",
  },
  rateWrapper: {
    alignItems: "flex-end",
  },
  rateNumber: {
    fontSize: 20,
    color: "#F0A901",
    fontWeight: "600",
  },
});

export default Header;
