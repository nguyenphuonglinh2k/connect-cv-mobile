import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MyResume = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>My Resume</Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.myResume}>
        <Text style={styles.resumeFile}>Resume.pdf</Text>
        <Text style={styles.time}>Updated on 28 September 2022</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  myResume: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#6d27d1",
  },
  title: {
    color: "#212529",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  resumeFile: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    color: "#fff",
    marginTop: 8,
  },
});

export default MyResume;
