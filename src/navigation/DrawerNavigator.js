import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextButton } from "components/common";
import clientStorage from "utils/clientStorage";
import { AppConstant } from "const/index";
import { useDispatch } from "react-redux";
import AuthActions from "reduxStore/auth.redux";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: "75%" },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = props => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(
      AuthActions.authSuccess({
        isLoggedIn: false,
      }),
    );
    clientStorage.remove(AppConstant.AUTH_TOKEN_KEY);
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10,
      }}
      {...props}
    >
      <View style={styles.greetWrapper}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/author/pic1.png",
          }}
        />
        <View>
          <Text style={styles.greet}>Good Morning</Text>
          <Text style={styles.name}>Henry Kanwil</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <TextButton onPress={handleLogout} textStyle={styles.logoutText}>
          Log out
        </TextButton>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  greetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#48A9F8",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  greet: {
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22,
    marginRight: 8,
    borderColor: "white",
    borderWidth: 2,
  },
  logoutText: {
    color: "#ff586e",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default DrawerNavigator;
