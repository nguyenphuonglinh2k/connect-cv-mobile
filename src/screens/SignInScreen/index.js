import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { CommonTextInput, CommonButton } from "components";
import { useDispatch } from "react-redux";
import AuthActions from "reduxStore/auth.redux";
import Banner from "./Banner";
import BottomButton from "./BottomButton";
import OtherSignInMethod from "./OtherSignInMethod";
import { TextButton } from "components/common";

const SignInScreen = () => {
  const dispatch = useDispatch();

  const [username, onChangeUsername] = useState("user1");
  const [password, onChangePassword] = useState("123456");

  const onLogin = () => {
    dispatch(
      AuthActions.postLoginRequest({
        username,
        password,
      }),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Banner />
        <View style={styles.content}>
          <CommonTextInput
            value={username}
            onChangeText={onChangeUsername}
            placeholder="User name"
          />
          <CommonTextInput
            value={password}
            onChangeText={onChangePassword}
            keyboardType="password"
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry
          />

          <TextButton textStyle={styles.forgotText}>
            Forgot your password?
          </TextButton>
          <CommonButton label="Login" onPress={onLogin} />

          <OtherSignInMethod style={{ marginTop: 10 }} />
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
  passwordInput: {
    marginTop: 18,
  },
  forgotText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 20,
  },
});

export default SignInScreen;
