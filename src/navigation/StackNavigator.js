import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteName } from "const/path.const";
import {
  HomeScreen,
  JobDetailScreen,
  SignInScreen,
  SignUpScreen,
  SearchScreen,
  FilterScreen,
  Profile,
  CompanyDetailScreen,
  StoredScreen,
  EditProfileScreen,
  RoleOptionScreen,
  GetStartedScreen,
  AvailableJobsScreen,
} from "screens";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.getStarted} component={GetStartedScreen} />

      <Stack.Screen name={RouteName.roleOption} component={RoleOptionScreen} />
      <Stack.Screen name={RouteName.signIn} component={SignInScreen} />
      <Stack.Screen name={RouteName.signUp} component={SignUpScreen} />
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
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RouteName.search}
    >
      <Stack.Screen name={RouteName.search} component={SearchScreen} />
      <Stack.Screen
        name={RouteName.companyDetail}
        component={CompanyDetailScreen}
      />
      <Stack.Screen name={RouteName.jobDetail} component={JobDetailScreen} />
      <Stack.Screen name={RouteName.filter} component={FilterScreen} />
      <Stack.Screen
        name={RouteName.availableJobs}
        component={AvailableJobsScreen}
      />
    </Stack.Navigator>
  );
};

const StoredStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.storedJob} component={StoredScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.profile} component={Profile} />
      <Stack.Screen
        name={RouteName.editProfile}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};

export { AuthStack, HomeStack, StoredStack, SearchStack, ProfileStack };
