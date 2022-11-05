import CardJobItem from "./CardJobItem";
import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { JobService } from "services/index";
import { ApiConstant } from "const/index";

const SavedJobs = ({ data, onRefetchData, setIsLoading, ...otherProps }) => {
  const toast = useToast();

  const handleDeleteSavedJob = async jobId => {
    setIsLoading(true);
    try {
      const response = await JobService.deleteSavedJob({
        job_id: jobId,
      });

      if (response.data?.status === ApiConstant.STT_OK) {
        onRefetchData();
        toast.show("Remove saved job successfully", { type: "success" });
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data || MOCK_DATA}
      renderItem={({ item }) => (
        <CardJobItem
          data={item}
          style={styles.item}
          onRemoveSavedJob={handleDeleteSavedJob}
        />
      )}
      keyExtractor={(_, i) => i}
      contentContainerStyle={styles.container}
      {...otherProps}
    />
  );
};

SavedJobs.propTypes = {
  data: PropTypes.array,
  onRefetchData: PropTypes.func,
  setIsLoading: PropTypes.func,
};

const MOCK_DATA = Array.from(new Array(5)).map(() => ({
  logo: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/logo/logo.png",
  companyName: "Highspeed Studios",
  jobName: "Software Engineer",
  salary: "$500 - $1,000",
  location: "Jakarta, Indonesia",
}));

const styles = StyleSheet.create({
  item: {
    marginVertical: 4,
  },
  container: {
    padding: 15,
  },
});

export default SavedJobs;
