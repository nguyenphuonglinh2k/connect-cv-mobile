import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InfoChips from "./InfoChips";
import { useNavigation } from "@react-navigation/core";
import { RouteName, TabName } from "const/path.const";
import { DEFAULT_COMPANY_LOGO } from "const/app.const";

const Header = ({ data, ...otherProps }) => {
  const navigation = useNavigation();

  const handleGotoCompanyView = () => {
    navigation.navigate(TabName.search, {
      screen: RouteName.companyDetail,
      params: { companyId: data?.companyId },
    });
  };

  return (
    <View {...otherProps}>
      <View style={styles.infoWrapper}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={handleGotoCompanyView}>
            <Text style={styles.companyName}>{data?.company}</Text>
          </TouchableOpacity>
          <Text style={styles.jobName}>{data?.name}</Text>
        </View>
        <Image
          source={{ uri: data?.logo || DEFAULT_COMPANY_LOGO }}
          style={styles.logo}
        />
      </View>

      <InfoChips data={data?.chips || []} />
    </View>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    company: PropTypes.string,
    name: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
    chips: PropTypes.array,
    companyId: PropTypes.any,
  }),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: "row",
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
