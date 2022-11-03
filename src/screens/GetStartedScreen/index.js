import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SliderItem from "./SliderItem";
import { ImageSource } from "assets/";
import { CommonButton } from "components";
import { useNavigation } from "@react-navigation/core";
import { RouteName } from "const/path.const";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  const handleGotoRoleOption = () => {
    navigation.navigate(RouteName.roleOption);
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView>
        <SliderItem {...SLIDER_DATA[0]} />
      </ScrollView>
      <CommonButton
        label="Get started"
        style={styles.button}
        labelStyle={styles.label}
        onPress={handleGotoRoleOption}
      />
    </View>
  );
};

const SLIDER_DATA = [
  {
    imageSrc: ImageSource.BusinessImage,
    title: "Find Your Dream Job Now",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
];

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#673ab71a",
  },
  label: {
    color: "#673ab7",
  },
});

export default GetStartedScreen;
