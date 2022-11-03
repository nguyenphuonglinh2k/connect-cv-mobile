import { DEFAULT_AVATAR_URL } from "const/app.const";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const About = () => {
  const user = useSelector(({ userRedux }) => userRedux.user);

  return (
    <View style={{ marginBottom: -35 }}>
      <Image
        source={{
          uri: "https://jobie.dexignzone.com/mobile-app/xhtml/assets/images/bg2.png",
        }}
        style={styles.backgroundImage}
      />
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.avatarUrl || DEFAULT_AVATAR_URL,
          }}
        />
        <Text style={styles.name}>{user?.fullname}</Text>
        <Text style={styles.position}>{user?.position || "Undefined"}</Text>
        <Text style={styles.description}>
          {user?.about || "Let's write something about yourself"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 280,
  },
  info: {
    alignItems: "center",
    transform: [{ translateY: -55 }],
  },
  avatar: {
    width: 100,
    height: 100,
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: 14,
  },
  name: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  position: {
    color: "rgba(109, 39, 209, 0.7)",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    marginHorizontal: 30,
    lineHeight: 18,
    textAlign: "center",
  },
});

About.propTypes = {};

About.defaultProps = {};

export default About;
