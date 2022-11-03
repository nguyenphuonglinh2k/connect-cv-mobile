import React, { useCallback, useEffect, useMemo } from "react";
import { MainLayout } from "layouts";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import Salary from "./Salary";
import Description from "./Description";
import Actions from "./Actions";
import { useRoute } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import JobActions from "reduxStore/job.redux";

const JobDetailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const jobId = route.params.jobId;

  const job = useSelector(({ jobRedux }) => jobRedux.job || {});

  const salary = useMemo(() => {
    if (!job.jobDetails) return "Thỏa thuận";

    return job.jobDetails[0]?.generalInformation?.salary;
  }, [job]);

  const handleGetJobDetail = useCallback(async () => {
    if (jobId) {
      dispatch(JobActions.getJobDetailRequest({ jobId }));
    }
  }, [jobId, dispatch]);

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

      <Actions jobId={job.id} />
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
