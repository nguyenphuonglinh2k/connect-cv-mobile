import CardJobItem from "components/CardJobItem";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

const JobList = props => {
  const jobs = useSelector(({ jobRedux }) => jobRedux.jobs);

  return (
    <View {...props}>
      {jobs.map((item, index) => (
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
