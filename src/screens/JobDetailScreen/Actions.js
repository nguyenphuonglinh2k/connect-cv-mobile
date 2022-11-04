import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import BookmarkIcon from "icons/BookmarkIcon";
import LoadingSpinner from "components/LoadingSpinner";
import { JobService } from "services/index";
import { ApiConstant } from "const/index";
import { useToast } from "react-native-toast-notifications";

const Actions = ({ jobId, saved }) => {
  const toast = useToast();

  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyJob = async () => {
    setIsLoading(true);
    try {
      const response = await JobService.postApplyJob({
        job_id: jobId,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Apply job successfully", { type: "danger" });
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavedJob = async () => {
    setIsLoading(true);
    try {
      const response = await JobService.postSavedJob({
        job_id: jobId,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Saved job successfully", { type: "danger" });
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSavedJob = async () => {
    setIsLoading(true);
    try {
      const response = await JobService.deleteSavedJob({
        id: jobId,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Saved job successfully", { type: "danger" });
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSaveStatus = async () => {
    if (isSaved) {
      await handleDeleteSavedJob();
    } else {
      await handleSavedJob();
    }
    setIsSaved(!isSaved);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.icon} onPress={handleToggleSaveStatus}>
          <BookmarkIcon fill={isSaved ? "#673ab7" : "none"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleApplyJob}>
          <Text style={styles.textBtn}>Apply job</Text>
        </TouchableOpacity>
      </View>
      <LoadingSpinner isVisible={isLoading} />
    </>
  );
};

Actions.propTypes = {
  jobId: PropTypes.any,
  saved: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 8,
  },
  btn: {
    backgroundColor: "#673ab7",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 50,
    flex: 1,
  },
  textBtn: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Actions;
