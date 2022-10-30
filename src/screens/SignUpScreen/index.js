import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { CommonTextInput, CommonButton } from "components";
import Banner from "./Banner";
import BottomButton from "./BottomButton";

const SignUpScreen = () => {
  const [userName, onChangeUserName] = useState(null);
  const [userEmail, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const onLogin = () => {};

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Banner />

        <View style={styles.content}>
          <CommonTextInput
            value={userName}
            onChangeText={onChangeUserName}
            placeholder="User name"
          />
          <CommonTextInput
            value={userEmail}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            placeholder="Email"
            style={styles.marginTop}
          />
          <CommonTextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            style={styles.marginTop}
            secureTextEntry
          />

          <CommonButton
            label="Sign Up"
            onPress={onLogin}
            style={{ marginTop: 20 }}
          />
        </View>
      </ScrollView>

      <BottomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    transform: [{ translateY: -24 }],
  },
  marginTop: {
    marginTop: 18,
  },
  terms: {
    fontWeight: "bold",
    color: "#6d27d1",
  },
});

export default SignUpScreen;
