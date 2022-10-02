import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Banner from "./Banner";
import RecentJobs from "./RecentJobs";
import RecommendedJobs from "./RecommendedJobs";

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Banner />
      <RecommendedJobs />
      <RecentJobs />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
