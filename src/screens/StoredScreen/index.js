import React, { useState } from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SearchInput from "components/SearchInput";
import TabBar, { STORE_JOB_TAB_VALUES } from "./TabBar";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";

const StoredScreen = () => {
  const [searchValue, onChangeSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(STORE_JOB_TAB_VALUES.applied);

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
        {selectedTab === STORE_JOB_TAB_VALUES.applied && <AppliedJobs />}
        {selectedTab === STORE_JOB_TAB_VALUES.saved && <SavedJobs />}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});

export default StoredScreen;
