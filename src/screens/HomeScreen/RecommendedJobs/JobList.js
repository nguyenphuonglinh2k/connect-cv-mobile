import { useIsFocused } from "@react-navigation/core";
import CardJobItem from "components/CardJobItem";
import React, { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import JobActions from "reduxStore/job.redux";

const JobList = props => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const recommendedJobs = useSelector(
    ({ jobRedux }) => jobRedux.recommendedJobs,
  );

  const handleGetRecommendedJobs = useCallback(() => {
    dispatch(JobActions.getRecommendedJobsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isFocused) {
      handleGetRecommendedJobs();
    }
  }, [handleGetRecommendedJobs, isFocused]);

  return (
    <View {...props}>
      {recommendedJobs.map((item, index) => (
        <CardJobItem
          key={index}
          data={item}
          style={index !== 0 ? styles.item : {}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
  },
});

export default JobList;
