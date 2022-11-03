import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, SearchIcon, UserIcon, HeartIcon } from "icons";
import {
  HomeStack,
  StoredStack,
  SearchStack,
  ProfileStack,
} from "./StackNavigator";
import { PathConstant } from "const";
import { useNavigation } from "@react-navigation/core";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", e => {
      // Prevent default behavior
      e.preventDefault();

      // Do something manually
      navigation.popToTop({ immediate: true });
    });

    return unsubscribe;
  }, [navigation]);

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
        name={PathConstant.TabName.search}
        component={SearchStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.chat}
        component={StoredStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <HeartIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />
      <Tab.Screen
        name={PathConstant.TabName.profile}
        component={ProfileStack}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <UserIcon color={focused ? "#673ab7" : "#A19FA8"} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
