import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChevronIcon from "icons/ChevronIcon";
import SelectModal from "./SelectModal";

const SelectBox = ({ label, value, ...otherProps }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <View {...otherProps}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={handleToggleVisibleModal}
        >
          <Text style={styles.value} numberOfLines={1}>
            {value}
          </Text>
          <ChevronIcon />
        </TouchableOpacity>
      </View>
      <SelectModal isVisible={isVisible} />
    </>
  );
};

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  value: "",
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F2F3F4",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    marginBottom: 4,
    color: "#212529",
    fontWeight: "600",
  },
  value: {
    color: "#697381",
    fontWeight: "600",
  },
});

export default SelectBox;