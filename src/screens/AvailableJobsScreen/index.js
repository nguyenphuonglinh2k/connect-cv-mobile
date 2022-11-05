import { MainLayout } from "layouts";
import React, { useCallback, useEffect, useState } from "react";
import Jobs from "./Jobs";
import { View } from "react-native";
import { useRoute } from "@react-navigation/core";
import { JobService } from "services/index";
import { ApiConstant } from "const/index";
import { toCamel } from "utils/index";
import LoadingSpinner from "components/LoadingSpinner";

const AvailableJobsScreen = () => {
  const route = useRoute();
  const companyId = route.params.companyId;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetCompanyInfo = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await JobService.getJobsOfCompany(companyId);

      if (response.data?.status === ApiConstant.STT_OK) {
        const responseData = toCamel(response.data.data.data);
        setData(responseData);
      }
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    if (companyId) {
      handleGetCompanyInfo();
    }
  }, [handleGetCompanyInfo, companyId]);

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: `Company's Jobs`,
      }}
    >
      <View style={{ flex: 1 }}>
        <Jobs data={data} />
      </View>

      <LoadingSpinner isVisible={isLoading} />
    </MainLayout>
  );
};

export default AvailableJobsScreen;
