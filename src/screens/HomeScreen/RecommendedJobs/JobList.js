import CardJobItem from "components/CardJobItem";
import React from "react";
import { FlatList } from "react-native";

const JobList = props => {
  return (
    <FlatList
      data={MOCK_DATA}
      renderItem={({ item }) => <CardJobItem data={item} />}
      keyExtractor={(_, i) => i}
      {...props}
    />
  );
};

const MOCK_DATA = Array.from(new Array(10)).map(() => ({
  logo: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/logo/company-logo1.png",
  companyName: "Highspeed Studios",
  jobName: "Software Engineer",
  salary: "$500 - $1,000",
  location: "Jakarta, Indonesia",
}));

export default JobList;
