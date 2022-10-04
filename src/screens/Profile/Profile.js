import React from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from "react-native";
import SkillItem from './skill_item'

const image = { uri: "https://reactjs.org/logo-og.png" };

const ProfileStack = () => {
    return (

        <ScrollView style={styles.profileView}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>

            </ImageBackground>
            <Image
                style={styles.tinyAvatar}
                source={require('./profileImg/cute.jpg')}
            />
            <View style={styles.information}>
                <Text style={styles.name}>David</Text>
                <Text style={styles.position}>Programmer</Text>
                <View>
                    <Text style={styles.description}>Luận án tiến sĩ ngành Công nghệ dệt,
                        may có tiêu đề “Nghiên cứu ảnh hưởng của đặc điểm nhân trắc ngực nữ sinh Bắc Việt Nam
                        tới áp lực và độ tiện nghi áp lực của áo ng/ực” </Text>
                </View>
                <View style={styles.contactMethod}>
                    <View style={styles.borderCircle}>

                        <Image
                            style={styles.phone}
                            source={require('./profileImg/phone_1.png')}
                        />
                    </View>
                    <View style={styles.borderCircle}>

                        <Image
                            style={styles.email}
                            source={require('./profileImg/email.png')}
                        />
                    </View>
                    <View style={styles.borderCircle}>

                        <Image
                            style={styles.location}
                            source={require('./profileImg/placeholder.png')}
                        />
                    </View>
                </View>
                <View style={styles.myResume}>
                    <View>
                        <Text style={styles.resumeTitle}>
                            My Resume
                        </Text>
                        <Text style={styles.resumeFile}>
                            david_resume.pdf
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={styles.listAction}
                            source={require('./profileImg/dots.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.skills}>
                <Text style={styles.skillTitle}>
                    Skill
                </Text>
                <View style={styles.skillList}>
                    <SkillItem />
                </View>
            </View>


        </ScrollView>
    );
};

export default ProfileStack;

const styles = StyleSheet.create({
    profileView: {
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        height: 280,
    },
    tinyAvatar: {
        width: 100,
        height: 100,
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 14,
        position: 'absolute',
        top: 225,
        left: "38%"
    },
    information: {
        marginTop: 66,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    position: {
        color: "rgba(109, 39, 209, 0.7)",
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        marginHorizontal: 30,
        textAlign: "justify",
        lineHeight: 18,
    },
    contactMethod: {
        flexDirection: "row",
        marginTop: 30,
        paddingHorizontal: 50,
        width: '100%',
        justifyContent: "space-around",
    },
    borderCircle: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
    },
    myResume: {
        width: '85%',
        margin: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'transparent',
        padding: 20,
        backgroundColor: '#6d27d1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    resumeTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    resumeFile: {
        color: '#fff',
        marginTop: 8,
        fontWeight: 'bold',
    },
    skill: {
        width: '100%',
        justifyContent: 'center',
    },
    skillTitle: {
        width: '85%',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        float: 'left',
        marginHorizontal: 30,
    },
    skillList: {
        width: '85%',
        marginHorizontal: 30,
        marginVertical: 10,
        flexDirection: 'row',
        whiteSpace: 'wrap',
    }
});