import { MainLayout } from "layouts";
import React from "react";
import { ScrollView } from "react-native";
import Contact from "./Contact";
import Header from "./Header";
import Info from "./Info";
import SeeJobAction from "./SeeJobAction";

const CompanyDetailScreen = () => {
  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Company Details",
      }}
    >
      <ScrollView>
        <Header />
        <Contact />
        <Info />
      </ScrollView>
      <SeeJobAction />
    </MainLayout>
  );
};

export default CompanyDetailScreen;
