import { useRoute } from "@react-navigation/core";
import { MainLayout } from "layouts";
import React from "react";
import Jobs from "./Jobs";
import { View } from "react-native";

const AvailableJobsScreen = () => {
  const router = useRoute();
  const companyName = router.params.companyName;

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: `${companyName} Company's Jobs`,
      }}
    >
      <View style={{ flex: 1 }}>
        <Jobs />
      </View>
    </MainLayout>
  );
};

export default AvailableJobsScreen;
