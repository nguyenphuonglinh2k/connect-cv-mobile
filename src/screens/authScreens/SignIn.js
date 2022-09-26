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

const SignIn = () => {
    const [userName, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    const onLogin = () => {
        console.log("Hello")
    }

    return (
        <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "rgba(225,225,225,0.3)" }}>
            <View>
                <Text style={styles.signInText}>Sign In</Text>
            </View>
            <View>
                <Text style={{ color: "#6d27d1" }}>Please fill registration form below</Text>
            </View>
            <SafeAreaView style={styles.inputBlock}>
                <CommonTextInput
                    value={userName}
                    onChangeText={onChangeText}
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
                <View style={{ display: "flex", alignSelf: "center", width: "100%", }}>
                    <ContainedButton
                        onPress={onLogin}
                        label="Sign In"
                        style={styles.gradientButton}
                        color="rgba(109, 39, 209, 1)"


                    />
                </View>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={styles.otherSignInText}>--- Or sign in with ---</Text>
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

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    signInText: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: "#6d27d1"
    },
    inputBlock: {
        marginTop: 30
    },
    passwordInput: {
        marginTop: 18
    },
    forgotPassword: {
        color: "#6d27d1",
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 40

    },
    gradientButton: {
        marginTop: 10,
    },
    otherSignInText: {
        color: "#6d27d1",
        fontSize: 16,
        marginVertical: 40
    },
    otherSignIn: {
        marginHorizontal: "10%",
        flexDirection: 'row',
        justifyContent: "space-around",

    },
    socialNetwork: {
        width: 180,
        borderWidth: 1,
        borderRadius: 28,
        borderColor: "#ceb5f1",
        padding: 10,
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
});

export default SignIn;