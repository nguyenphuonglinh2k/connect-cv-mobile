import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { ContainedButton, CommonTextInput } from "components"
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";

const SignUp = () => {
  const navigation = useNavigation();

  const [userName, onChangeUserName] = React.useState(null);
  const [userEmail, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const onLogin = () => {
    console.log("Hello")
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "rgba(225,225,225,0.3)" }}>
      <View>
        <Text style={styles.signUpText}>Create an account</Text>
      </View>
      <View>
        <Text style={{ color: "#6d27d1" }}>Please fill registration form below</Text>
      </View>
      <SafeAreaView style={styles.inputBlock}>
        <CommonTextInput
          value={userName}
          onChangeText={onChangeUserName}
          keyboardType="user-name"
          placeholder="User name"
        />
        <CommonTextInput
          value={userName}
          onChangeText={onChangeEmail}
          keyboardType="user-email"
          placeholder="User email"
          style={styles.passwordInput}
        />
        <CommonTextInput
          value={password}
          onChangeText={onChangePassword}
          keyboardType="password"
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry
        />
        <View style={{ display: "flex", alignSelf: "center" }}>
          <Text style={styles.otherSignInText}>By tapping "Sign Up" you accept our <Text style={{ color: "#6d27d1", fontWeight: "bold" }}>terms</Text> and <Text style={{ color: "#6d27d1", fontWeight: "bold" }}>condition</Text></Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ContainedButton
            onPress={onLogin}
            title="Sign In"
            style={styles.signInButton}
            buttonColor="#6d27d1"
          />
        </View>
      </SafeAreaView>
      <View style={styles.navigationSignIn}>
        <Text >Already have an account? </Text>
        <Text
          onPress={() => navigation.navigate(RouteName.SIGN_IN)}
          style={{ color: "rgba(109, 39, 209, 0.8)", fontWeight: "bold", fontStyle: "underline" }}
        >
          Sign in
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signUpText: {
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#6d27d1"
  },
  block: {
    flex: 1
  },
  inputBlock: {
    marginTop: 24,
    flex: 5,
    height: '100%',
  },
  passwordInput: {
    marginTop: 18
  },

  signInButton: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "transparent",
    backgroundColor: "#6d27d1",
    marginTop: 10,
    width: 150,
    alignItems: "center",
    padding: 10,
  },
  otherSignInText: {
    fontSize: 16,
    marginVertical: 30,
    textAlign: "center"
  },
  terms: {
    fontWeight: 'bold',
    color: "#6d27d1"
  },
  navigationSignIn: {
    alignItems: "center",
    marginTop: 30
  }
});

export default SignUp;
