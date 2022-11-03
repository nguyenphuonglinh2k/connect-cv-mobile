import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CardJobItem from "components/CardJobItem";
import { useSelector } from "react-redux";

const JobList = props => {
  const [jobs] = useSelector(({ jobRedux }) => [jobRedux.jobs]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={jobs}
      renderItem={({ item }) => <CardJobItem data={item} style={styles.item} />}
      keyExtractor={(_, i) => i}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
  },
});

export default JobList;
