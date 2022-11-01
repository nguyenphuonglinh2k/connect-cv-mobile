import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CommonChip } from "components/common";

const Skills = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Skills</Text>

      <View style={styles.list}>
        {SKILLS.map((item, index) => (
          <CommonChip
            key={index}
            label={item}
            style={[styles.item, index !== SKILLS.length - 1 ? styles.mr : {}]}
          />
        ))}
      </View>
    </View>
  );
};

const SKILLS = ["Problem solving", "IOS", "Mobile", "React", "Mobile", "React"];

export default Skills;

const styles = StyleSheet.create({
  wrapper: {
    margin: 15,
  },
  title: {
    color: "#212529",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    marginVertical: 4,
  },
  mr: {
    marginRight: 4,
  },
});
