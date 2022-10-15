import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';

const SkillItem = ({
    value,
    activeStrokeColor,
    skillName
}) => {
    return (
        <View style={styles.skillItem}>
            <CircularProgress
                value={value}
                activeStrokeColor={activeStrokeColor}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.1}
                progressValueColor={'#000'}
                valueSuffix={'%'}
                delay={1000}
                radius={30}
            />
            <Text style={styles.skillName}>{skillName}</Text>
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
    skillName: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
        marginTop: 16,
        marginBottom: 4
    }
});
