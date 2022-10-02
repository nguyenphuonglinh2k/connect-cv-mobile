import React from "react";
import { StyleSheet, View, Text } from "react-native";
import JobList from "./JobList";

const RecentJobs = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Recent Jobs</Text>
      <JobList />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
});

export default RecentJobs;
