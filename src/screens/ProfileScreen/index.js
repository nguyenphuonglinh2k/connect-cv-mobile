import React, { useCallback, useEffect } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/core";
import { IconButton } from "components/common";
import { RouteName } from "const/path.const";
import PencilIcon from "icons/PencilIcon";
import { MainLayout } from "layouts";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import UserActions from "reduxStore/user.redux";
import About from "./About";
import Contact from "./Contact";
import MyResume from "./MyResume";
import Skills from "./Skills";

const ProfileStack = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const handleGetUserInfo = useCallback(() => {
    dispatch(UserActions.getUserInfoRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isFocused) {
      handleGetUserInfo();
    }
  }, [isFocused, handleGetUserInfo]);

  return (
    <MainLayout
      headerProps={{
        iconProps: { color: "#A19FA8" },
        style: { backgroundColor: "#f0f0f0" },
        headerRight: (
          <IconButton
            onPress={() => navigation.navigate(RouteName.editProfile)}
          >
            <PencilIcon />
          </IconButton>
        ),
      }}
    >
      <ScrollView>
        <About />
        <Contact />
        <MyResume />
        <Skills />
      </ScrollView>
    </MainLayout>
  );
};

export default ProfileStack;
