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

const SignUp = () => {
    const [userName, onChangeUserName] = React.useState(null);
    const [userEmail, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    const onLogin = () => {
        console.log("Hello")
    }

    return (
        <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "rgba(225,225,225,0.3)" }}>
            <View>
                <Text style={styles.signInText}>Create an account</Text>
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
                <View style={{ display: "flex", alignSelf: "center", width: "100%", marginTop: 30 }}>
                    <ContainedButton
                        onPress={onLogin}
                        label="Sign In"
                        style={styles.gradientButton}
                        backgroundColor="rgba(109, 39, 209, 1)"
                    />
                </View>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={styles.otherSignInText}>By tapping "Sign Up" you accept our <Text styles={styles.terms}>terms</Text> and <Text styles={styles.terms}>condition</Text></Text>
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
    forgotPassword: {
        color: "#6d27d1",
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 30

    },
    gradientButton: {
        marginTop: 30,
    },
    otherSignInText: {
        fontSize: 16,
        marginVertical: 30
    },
    terms: {
        fontWeight: 'bold',
        color: "#6d27d1"
    }
});

export default SignUp;