import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { MenuIcon } from "icons";
import { IconButton } from "components/common";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerRight }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <IconButton onPress={() => navigation.toggleDrawer()}>
        <MenuIcon color="white" />
      </IconButton>

      {headerRight}
    </View>
  );
};

Header.propTypes = {
  headerRight: PropTypes.node,
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
