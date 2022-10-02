import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { MenuIcon } from "icons";
import { IconButton } from "components/common";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerRight, style, iconProps, ...otherProps }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.root, style]} {...otherProps}>
      <IconButton onPress={() => navigation.toggleDrawer()}>
        <MenuIcon color="white" {...iconProps} />
      </IconButton>

      {headerRight}
    </View>
  );
};

Header.propTypes = {
  headerRight: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconProps: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});

export default Header;
