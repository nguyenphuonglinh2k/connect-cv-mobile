import { useNavigation } from "@react-navigation/native";
import { TextButton } from "components/common";
import { RouteName, TabName } from "const/path.const";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import JobList from "./JobList";

const RecommendedJobs = () => {
  const navigation = useNavigation();

  const handleGotoSearch = () => {
    navigation.navigate(TabName.search, { screen: RouteName.search });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Recommended Jobs</Text>
        <TextButton onPress={handleGotoSearch}>More</TextButton>
      </View>
      <JobList />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default RecommendedJobs;
