import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Header from "layouts/MainLayout/Header";
import LinearGradient from "react-native-linear-gradient";
import { IconButton } from "components/common";
import { SearchInput } from "components";
import { useSelector } from "react-redux";
import { DEFAULT_AVATAR_URL } from "const/app.const";

const Banner = () => {
  const user = useSelector(({ userRedux }) => userRedux.user);

  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#673ab7", "#9a70e5"]}
        style={styles.banner}
      >
        <Header />
        <View style={styles.info}>
          <View>
            <Text style={styles.greet}>Welcome Back</Text>
            <Text style={styles.name}>{user?.fullname}</Text>
          </View>

          <IconButton>
            <Image
              style={styles.avatar}
              source={{
                uri: user.avatarUrl || DEFAULT_AVATAR_URL,
              }}
            />
          </IconButton>
        </View>
      </LinearGradient>

      <SearchInput style={styles.input} />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  banner: {
    minHeight: 175,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  greet: {
    color: "#ffffffb3",
    fontSize: 14,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22,
  },
  input: {
    width: windowWidth - 32,
    left: 16,
    marginTop: -30,
  },
});

export default Banner;
