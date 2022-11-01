import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InfoChips from "./InfoChips";
import { useNavigation } from "@react-navigation/core";
import { RouteName, TabName } from "const/path.const";

const Header = ({ data, ...otherProps }) => {
  const navigation = useNavigation();

  const handleGotoCompanyView = () => {
    navigation.navigate(TabName.search, { screen: RouteName.companyDetail });
  };

  return (
    <View {...otherProps}>
      <View style={styles.infoWrapper}>
        <View>
          <TouchableOpacity onPress={handleGotoCompanyView}>
            <Text style={styles.companyName}>{data?.companyName}</Text>
          </TouchableOpacity>
          <Text style={styles.jobName}>{data?.jobName}</Text>
        </View>
        <Image source={{ uri: data?.logo }} style={styles.logo} />
      </View>

      <InfoChips data={data?.chips} />
    </View>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    companyName: PropTypes.string,
    jobName: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
    chips: PropTypes.array,
  }),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 15,
  },
  companyName: {
    marginBottom: 8,
    color: "#7e7e7e",
  },
  jobName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  logo: {
    height: 60,
    width: 60,
    marginLeft: 16,
  },
});

export default Header;
