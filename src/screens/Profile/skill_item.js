import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SkillItem = () => {
    return (
        <View style={styles.skillItem}>
            <View style={styles.skillLevel}>
                <Text style={styles.percent}>60%</Text>
            </View>
            <View>
                <Text style={styles.skillName}>PHP</Text>
            </View>
        </View>
    )
};

export default SkillItem;

const styles = StyleSheet.create({
    skillItem: {
        width: '30%',
        padding: 14,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'transparent',
        backgroundColor: "rgba(109, 39, 209, 0.2)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 18,
    },
    skillLevel: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    percent: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    skillName: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    }
});
