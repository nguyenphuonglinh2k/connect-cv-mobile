import CardJobItem from "components/CardJobItem";
import React from "react";
import { StyleSheet, View } from "react-native";

const JobList = props => {
  return (
    <View {...props}>
      {MOCK_DATA.map((item, index) => (
        <CardJobItem
          key={index}
          data={item}
          style={index !== 0 ? styles.item : {}}
        />
      ))}
    </View>
  );
};

const MOCK_DATA = Array.from(new Array(10)).map(() => ({
  logo: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/logo/company-logo1.png",
  companyName: "Highspeed Studios",
  jobName: "Software Engineer",
  salary: "$500 - $1,000",
  location: "Jakarta, Indonesia",
}));

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
  },
});

export default JobList;
