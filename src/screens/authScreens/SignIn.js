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
                <Text style={{ color: "#6d27d1" }}>Please sign in to your registered account</Text>
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
                        backgroundColor="rgba(109, 39, 209, 1)"
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
    gradientButton: {
        marginTop: 10,
    },
    otherSignInText: {
        color: "#6d27d1",
        fontSize: 16,
        marginVertical: 30
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
});

export default SignIn;