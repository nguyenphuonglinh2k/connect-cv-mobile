import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MainLayout } from "layouts";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import Salary from "./Salary";
import Description from "./Description";
import Actions from "./Actions";
import { useRoute } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import JobActions from "reduxStore/job.redux";
import { JobService } from "services/index";
import { ApiConstant } from "const/index";
import LoadingSpinner from "components/LoadingSpinner";

const JobDetailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const jobId = route.params.jobId;

  const job = useSelector(({ jobRedux }) => jobRedux.job);

  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const salary = useMemo(() => {
    if (!job.jobDetails) return "Thỏa thuận";

    return job.jobDetails[0]?.generalInformation?.salary;
  }, [job]);

  const handleGetJobDetail = useCallback(() => {
    if (jobId) {
      dispatch(JobActions.getJobDetailRequest({ jobId }));
    }
  }, [jobId, dispatch]);

  const handleCheckSavedJob = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await JobService.postCheckSavedJob({
        job_id: jobId,
      });

      if (response?.data?.status === ApiConstant.STT_OK) {
        setSaved(response.data.message);
      }
    } catch (error) {
      console.log("Check saved job", error);
    } finally {
      setIsLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    handleCheckSavedJob();
  }, [handleCheckSavedJob]);

  useEffect(() => {
    handleGetJobDetail();
  }, [handleGetJobDetail]);

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Job Details",
      }}
    >
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Header data={job} />
        <Salary value={salary} />
        <Description value={job?.jobDescription} />
      </ScrollView>

      <Actions jobId={job.id} saved={saved} />
      <LoadingSpinner isVisible={isLoading} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    flex: 1,
  },
});

export default JobDetailScreen;
