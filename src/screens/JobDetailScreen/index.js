import React from "react";
import { MainLayout } from "layouts";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import Salary from "./Salary";
import Description from "./Description";
import Actions from "./Actions";

const JobDetailScreen = () => {
  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Job Details",
      }}
    >
      <ScrollView style={styles.wrapper}>
        <Header data={JOB} />
        <Salary value={JOB.salary} />
        <Description value={JOB.description} />
      </ScrollView>

      <Actions />
    </MainLayout>
  );
};

const JOB = {
  logo: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/logo/logo.png",
  companyName: "Highspeed Studios",
  jobName: "Software Engineer",
  salary: "$500 - $1,000",
  location: "Jakarta, Indonesia",
  chips: ["Fulltime", "Remote Working"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
  },
});

export default JobDetailScreen;
