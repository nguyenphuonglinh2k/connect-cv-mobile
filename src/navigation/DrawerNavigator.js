import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: "75%" },
      }}
      CustomDrawerContent={<Text>Drawer</Text>}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
