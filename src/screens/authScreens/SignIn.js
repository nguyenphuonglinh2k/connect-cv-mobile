import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";
import { ContainedButton, CommonTextInput } from "components"
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";

const SignIn = () => {
  const navigation = useNavigation();

  const [username, onChangeUsername] = useState(null);
  const [password, onChangePassword] = useState(null);

  const onLogin = () => {
    console.log("Hello")
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "rgba(225,225,225,0.3)", }}>

      <View>
        <Text style={styles.signInText}>Sign In</Text>
      </View>
      <View>
        <Text style={{ color: "#6d27d1" }}>Please sign in to your registered account</Text>
      </View>
      <SafeAreaView style={styles.inputBlock}>
        <CommonTextInput
          value={username}
          onChangeText={onChangeUsername}
          keyboardType="user-name"
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
        <View style={{ display: "flex", alignSelf: "center" }}>
          <Text style={styles.forgotPassword}>Forgot your password ?</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ContainedButton
            onPress={onLogin}
            title="Sign In"
            style={styles.signInButton}
            buttonColor="#6d27d1"
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'center' }}>
          <View style={{ height: 1, backgroundColor: 'black', width: 16 }} />
          <View>
            <Text style={styles.otherSignInText}>Or sign in with</Text>
          </View>
          <View style={{ height: 1, backgroundColor: 'black', width: 16 }} />
        </View>
        <View style={styles.otherSignIn}>
          <View style={styles.socialNetwork}>
            <Image style={{ width: 30, height: 30 }} source={require("./google.png")} />
          </View>
          <View style={styles.socialNetwork}>
            <Image style={{ width: 30, height: 30 }} source={require("./facebook.png")} />
          </View>
        </View>

      </SafeAreaView>
      <View style={styles.navigationSignUp}>
        <Text >Don’t have an account? </Text>
        <Text
          onPress={() => navigation.navigate(RouteName.SIGN_UP)}
          style={{ color: "rgba(109, 39, 209, 0.8)", fontWeight: "bold", fontStyle: "underline" }}
        >
          Sign up
        </Text>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInText: {
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#6d27d1"
  },
  inputBlock: {
    marginTop: 24
  },
  passwordInput: {
    marginTop: 18
  },
  forgotPassword: {
    color: "#6d27d1",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 30

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
    color: "#6d27d1",
    fontSize: 16,
    width: 110,
    textAlign: 'center'
  },
  otherSignIn: {
    marginHorizontal: "5%",
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  socialNetwork: {
    width: "45%",
    borderWidth: 1,
    borderRadius: 28,
    borderColor: "#ceb5f1",
    padding: 10,
    flexDirection: 'row',
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  navigationSignUp: {
    alignItems: "center",
    marginTop: 30
  }
});

export default SignIn;
