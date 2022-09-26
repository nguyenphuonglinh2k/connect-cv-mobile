import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Banner from "./Banner";
import RecommendedJobs from "./RecommendedJobs";

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Banner />
      <RecommendedJobs />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
