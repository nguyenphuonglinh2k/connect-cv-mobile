import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ImageSource } from "assets";
import OptionItem from "./OptionItem";
import { useNavigation } from "@react-navigation/core";
import { RouteName } from "const/path.const";

const RoleOptionScreen = () => {
  const navigation = useNavigation();

  const handleGotoLogin = () => {
    navigation.navigate(RouteName.signIn);
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={{ alignItems: "center" }}>
        <Image source={ImageSource.LogoImage} style={styles.logo} />
        <Text style={styles.appName}>Jobie</Text>
      </View>

      <Text style={styles.label}>Continue as</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>
      <OptionItem
        title="JOB SEEKERS"
        desc="Finding a job here never been easier than before"
        imageSource={ImageSource.GirlImage}
        style={styles.jobSeekerItem}
        onPress={handleGotoLogin}
      />
      <OptionItem
        title="COMPANY"
        desc="Let’s recruit your great candidate faster here"
        imageSource={ImageSource.BoyImage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: "#f7f7f7",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  appName: {
    color: "#212529",
    fontSize: 38,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 50,
  },
  label: {
    color: "#212529",
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 8,
  },
  desc: {
    color: "#7e7e7e",
  },
  jobSeekerItem: {
    marginVertical: 20,
  },
});

export default RoleOptionScreen;
