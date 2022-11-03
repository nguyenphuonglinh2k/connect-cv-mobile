import CardJobItem from "components/CardJobItem";
import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";

const AppliedJobs = ({ data, ...otherProps }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data || MOCK_DATA}
      renderItem={({ item }) => <CardJobItem data={item} style={styles.item} />}
      keyExtractor={(_, i) => i}
      contentContainerStyle={styles.container}
      {...otherProps}
    />
  );
};

AppliedJobs.propTypes = {
  data: PropTypes.array,
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

export default AppliedJobs;
