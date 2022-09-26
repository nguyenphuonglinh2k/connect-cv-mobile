import { TextButton } from "components/common";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import JobList from "./JobList";

const RecommendedJobs = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Recommended Jobs</Text>
        <TextButton>More</TextButton>
      </View>
      <JobList />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
});

export default RecommendedJobs;
