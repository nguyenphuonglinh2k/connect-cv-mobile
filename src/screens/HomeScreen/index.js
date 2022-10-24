import React from "react";
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

export default HomeScreen;
