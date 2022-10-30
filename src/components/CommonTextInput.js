import React, { useRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput } from "react-native";

const CommonTextInput = ({ style, placeholder, ...otherProps }) => {
  const inputRef = useRef();

  return (
    <>
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor="#B4B4B4"
        style={[
          styles.input,
          inputRef.current?.isFocused() && styles.focused,
          style,
        ]}
        {...otherProps}
      />
    </>
  );
};

CommonTextInput.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    borderRadius: 28,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: "#3A4664",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  focused: {
    borderColor: "#9796F0",
  },
});

export default CommonTextInput;
