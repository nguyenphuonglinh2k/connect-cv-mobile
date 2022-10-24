import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteName } from "const/path.const";
import {
  HomeScreen,
  JobDetailScreen,
  SignIn,
  SignUp,
  SearchScreen,
  FilterScreen,
} from "screens";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.signIn} component={SignIn} />
      <Stack.Screen name={RouteName.signUp} component={SignUp} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.search} component={SearchScreen} />
      <Stack.Screen name={RouteName.jobDetail} component={JobDetailScreen} />
      <Stack.Screen name={RouteName.filter} component={FilterScreen} />
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </View>
  );
};

export { AuthStack, HomeStack, ChatStack, SearchStack, ProfileStack };
