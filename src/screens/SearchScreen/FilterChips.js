import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Chip from "./Chip";
import JobActions from "reduxStore/job.redux";

const FilterChips = () => {
  const dispatch = useDispatch();

  const searchTag = useSelector(({ jobRedux }) => jobRedux.searchTag);

  const [chip, setChip] = useState("");

  const handleRefetchJobs = () => {
    dispatch(JobActions.getSearchedJobsRequest({}));
    setChip("");
  };

  useEffect(() => {
    setChip(searchTag);
  }, [searchTag]);

  return (
    Boolean(chip) && (
      <View style={styles.wrapper}>
        <Chip label={chip} onPress={handleRefetchJobs} />
      </View>
    )
  );
};

FilterChips.propTypes = {};

FilterChips.defaultProps = {};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginBottom: 8,
  },
});

export default FilterChips;
