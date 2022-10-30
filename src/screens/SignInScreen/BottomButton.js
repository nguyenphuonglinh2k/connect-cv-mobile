import React from "react";
import CommonButton from "components/CommonButton";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RouteName } from "const/path.const";

const BottomButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(RouteName.signUp);
  };

  return (
    <View style={styles.wrapper}>
      <CommonButton
        label="Create account"
        style={styles.button}
        labelStyle={styles.label}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: "#673ab71a",
  },
  label: {
    color: "#673ab7",
  },
});

export default BottomButton;
