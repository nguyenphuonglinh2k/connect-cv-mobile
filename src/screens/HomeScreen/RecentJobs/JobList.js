import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CardJobItem from "./CardJobItem";

const JobList = props => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={MOCK_DATA}
      renderItem={({ item }) => <CardJobItem data={item} style={styles.item} />}
      keyExtractor={(_, i) => i}
      {...props}
    />
  );
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
    width: 298,
    marginLeft: 10,
  },
});

export default JobList;
