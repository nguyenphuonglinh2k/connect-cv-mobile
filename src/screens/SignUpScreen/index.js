import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { CommonTextInput, CommonButton, LoadingSpinner } from "components";
import Banner from "./Banner";
import BottomButton from "./BottomButton";
import { useToast } from "react-native-toast-notifications";
import { AuthService } from "services";
import { ApiConstant } from "const/index";
import { useNavigation } from "@react-navigation/core";
import { RouteName } from "const/path.const";

const SignUpScreen = () => {
  const toast = useToast();
  const navigation = useNavigation();

  const [username, onChangeUserName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const onSignUp = async () => {
    setIsLoading(true);
    try {
      const response = await AuthService.postSignUp({
        username,
        email,
        password,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Create account successfully", { type: "success" });
        navigation.navigate(RouteName.signIn);
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Banner />

        <View style={styles.content}>
          <CommonTextInput
            value={username}
            onChangeText={onChangeUserName}
            placeholder="User name"
          />
          <CommonTextInput
            value={email}
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
            onPress={onSignUp}
            style={{ marginTop: 20 }}
          />
        </View>
      </ScrollView>

      <BottomButton />
      {isLoading && <LoadingSpinner isVisible />}
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
