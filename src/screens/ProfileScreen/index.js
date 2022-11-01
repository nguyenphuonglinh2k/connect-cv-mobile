import { useNavigation } from "@react-navigation/core";
import { IconButton } from "components/common";
import { RouteName } from "const/path.const";
import PencilIcon from "icons/PencilIcon";
import { MainLayout } from "layouts";
import React from "react";
import { ScrollView } from "react-native";
import About from "./About";
import Contact from "./Contact";
import MyResume from "./MyResume";
import Skills from "./Skills";

const ProfileStack = () => {
  const navigation = useNavigation();

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
