import React, { useState, useEffect } from "react";
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

      if (response?.data?.status === ApiConstant.STT_OK) {
        toast.show("Apply job successfully", { type: "success" });
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
        toast.show("Saved job successfully", { type: "success" });
        setIsSaved(true);
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
        job_id: jobId,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Unsaved job successfully", { type: "success" });
        setIsSaved(false);
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
  };

  useEffect(() => {
    setIsSaved(saved);
  }, [saved]);

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

Actions.defaultProps = {
  saved: false,
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
