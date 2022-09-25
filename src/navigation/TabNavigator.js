import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, SearchIcon, EmailIcon, MenuIcon } from "icons";
import {
  HomeStack,
  ChatStack,
  SearchStack,
  ProfileStack,
} from "./StackNavigator";
import { PathConstant } from "const";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
      initialRouteName={PathConstant.TabName.home}
    >
      <Tab.Screen
        name={PathConstant.TabName.home}
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.explore}
        component={SearchStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.chat}
        component={ChatStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <EmailIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />
      <Tab.Screen
        name={PathConstant.TabName.profile}
        component={ProfileStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <MenuIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
