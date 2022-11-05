import { useRoute } from "@react-navigation/core";
import LoadingSpinner from "components/LoadingSpinner";
import { ApiConstant } from "const/index";
import { MainLayout } from "layouts";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { CompanyService } from "services/index";
import { toCamel } from "utils/index";
import Contact from "./Contact";
import Header from "./Header";
import Info from "./Info";
import SeeJobAction from "./SeeJobAction";

const CompanyDetailScreen = () => {
  const route = useRoute();
  const companyId = route.params.companyId;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const handleGetCompanyInfo = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await CompanyService.getCompanyDetail(companyId);

      if (response.data?.status === ApiConstant.STT_OK) {
        const responseData = toCamel(response.data.data[0]);
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
        title: "Company Details",
      }}
    >
      <ScrollView>
        <Header data={data} />
        <Contact data={data} />
        <Info data={data} />
      </ScrollView>
      <SeeJobAction data={data} />

      <LoadingSpinner isVisible={isLoading} />
    </MainLayout>
  );
};

export default CompanyDetailScreen;
