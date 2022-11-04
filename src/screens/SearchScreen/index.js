import React, { useCallback, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SearchInput from "components/SearchInput";
import JobList from "./JobList";
import ResultHeader from "./ResultHeader";
import { useDispatch } from "react-redux";
import JobActions from "reduxStore/job.redux";

const SearchScreen = () => {
  const dispatch = useDispatch();

  const [searchValue, onChangeSearchValue] = useState("");

  const handleGetJobs = useCallback(() => {
    const params = searchValue ? { params: { name: searchValue } } : {};

    dispatch(JobActions.getSearchedJobsRequest(params));
  }, [dispatch, searchValue]);

  useEffect(() => {
    handleGetJobs();
  }, [handleGetJobs]);

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
            placeholder: "Search job here...",
            value: searchValue,
            onChange: onChangeSearchValue,
          }}
        />
        <ResultHeader />
        <JobList />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
