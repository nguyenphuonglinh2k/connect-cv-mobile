import React, { useCallback, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SearchInput from "components/SearchInput";
import TabBar, { STORE_JOB_TAB_VALUES } from "./TabBar";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import LoadingSpinner from "components/LoadingSpinner";
import { JobService } from "services/index";
import { ApiConstant } from "const/index";
import { toCamel } from "utils/index";
import { useToast } from "react-native-toast-notifications";
import { useIsFocused } from "@react-navigation/core";

const StoredScreen = () => {
  const toast = useToast();
  const isFocused = useIsFocused();

  const [searchValue, onChangeSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(STORE_JOB_TAB_VALUES.applied);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetData = useCallback(async () => {
    setIsLoading(true);

    let response = {};

    try {
      if (selectedTab === STORE_JOB_TAB_VALUES.applied) {
        response = await JobService.getAppliedJobs();
      } else {
        response = await JobService.getSavedJobs();
      }

      if (response.data?.status === ApiConstant.STT_OK) {
        const responseData = toCamel(response.data.data);

        setData(responseData);
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  }, [selectedTab, toast]);

  useEffect(() => {
    if (isFocused) {
      handleGetData();
    }
  }, [handleGetData, isFocused]);

  return (
    <MainLayout
      headerProps={{
        iconProps: { color: "#A19FA8" },
        style: { backgroundColor: "#f0f0f0" },
      }}
    >
      <View style={styles.wrapper}>
        <SearchInput
          inputProps={{
            placeholder: "Search...",
            value: searchValue,
            onChange: onChangeSearchValue,
          }}
        />
      </View>
      <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <View style={{ flex: 1 }}>
        {selectedTab === STORE_JOB_TAB_VALUES.applied && (
          <AppliedJobs data={data} />
        )}
        {selectedTab === STORE_JOB_TAB_VALUES.saved && (
          <SavedJobs data={data} />
        )}
      </View>

      {isLoading && <LoadingSpinner />}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});

export default StoredScreen;
