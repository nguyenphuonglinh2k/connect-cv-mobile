import React, { useState } from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SearchInput from "components/SearchInput";
import JobList from "./JobList";
import ResultHeader from "./ResultHeader";

const SearchScreen = () => {
  const [searchValue, onChangeSearchValue] = useState("");

  return (
    <MainLayout
      headerProps={{
        iconProps: { color: "#A19FA8" },
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
