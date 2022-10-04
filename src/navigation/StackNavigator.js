import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>auth</Text>
    </View>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>home</Text>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>search</Text>
    </View>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat</Text>
    </View>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { AuthStack, HomeStack, ChatStack, SearchStack, ProfileStack };
