import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "icons/SearchIcon";

const SearchInput = ({ style, inputProps, ...otherProps }) => {
  const { style: inputStyle, ...otherInputProps } = inputProps;

  return (
    <View style={[styles.inputWrapper, style]} {...otherProps}>
      <SearchIcon style={styles.icon} color="#b9b9b9" />
      <TextInput
        placeholder="Search"
        style={[styles.input, inputStyle]}
        {...otherInputProps}
      />
    </View>
  );
};

SearchInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputProps: PropTypes.shape({
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }),
};

SearchInput.defaultProps = {
  inputProps: {},
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    borderRadius: 30,
  },
  input: {
    marginLeft: 8,
  },
});

export default SearchInput;
