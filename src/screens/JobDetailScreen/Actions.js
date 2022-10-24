import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import BookmarkIcon from "icons/BookmarkIcon";

const Actions = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleToggleSaveStatus = () => {
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.icon} onPress={handleToggleSaveStatus}>
        <BookmarkIcon fill={isSaved ? "#673ab7" : "none"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Apply job</Text>
      </TouchableOpacity>
    </View>
  );
};

Actions.propTypes = {};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 8,
  },
  btn: {
    backgroundColor: "#673ab7",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 50,
    flex: 1,
  },
  textBtn: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Actions;
