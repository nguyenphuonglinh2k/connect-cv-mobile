import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import CoinIcon from "icons/CoinIcon";
import { IconButton } from "components/common";
import BookmarkIcon from "icons/BookmarkIcon";
import { DEFAULT_COMPANY_LOGO } from "const/app.const";
import { useNavigation } from "@react-navigation/core";
import { RouteName, TabName } from "const/path.const";

const CardJobItem = ({
  data,
  style,
  saved,
  onRemoveSavedJob,
  ...otherProps
}) => {
  const navigation = useNavigation();

  const salary =
    data?.jobDetails[0]?.generalInformation?.salary === "Thỏa thuận"
      ? data?.jobDetails[0]?.generalInformation?.salary
      : `${data?.jobDetails[0]?.generalInformation?.salary}tr`;

  const handleGotoDetail = () => {
    navigation.navigate(TabName.search, {
      screen: RouteName.jobDetail,
      params: { jobId: data?.id },
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapper, style]}
      onPress={handleGotoDetail}
      {...otherProps}
    >
      <Image
        source={{ uri: data?.logo || DEFAULT_COMPANY_LOGO }}
        style={styles.logo}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.jobName}>{data?.name}</Text>
        <Text style={styles.location}>
          {data?.jobDetails[0]?.location.join(", ")}
        </Text>

        <IconTextRow icon={<CoinIcon />} value={salary} />
      </View>
      <IconButton onPress={() => onRemoveSavedJob(data.id)}>
        <BookmarkIcon fill={saved ? "#673ab7" : "none"} />
      </IconButton>
    </TouchableOpacity>
  );
};

const IconTextRow = ({ icon, value, style, textStyle, ...otherProps }) => {
  return (
    <View style={[styles.iconTextWrapper, style]} {...otherProps}>
      {icon}
      <Text style={[styles.iconTextValue, textStyle]}>{value}</Text>
    </View>
  );
};

IconTextRow.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CardJobItem.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    company: PropTypes.string,
    name: PropTypes.string,
    jobDetails: PropTypes.array,
    id: PropTypes.any,
  }),
  onRemoveSavedJob: PropTypes.func,
  saved: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CardJobItem.defaultProps = {
  saved: true,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginRight: 20,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  location: {
    marginBottom: 10,
    color: "#7e7e7e",
  },
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTextValue: {
    color: "#7e7e7e",
    marginLeft: 10,
  },
});

export default CardJobItem;
