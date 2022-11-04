import React, { useCallback, useEffect, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { CommonTextInput } from "components";
import { TouchableOpacity as TouchableOpacityGesture } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { UserService } from "services";
import { ApiConstant } from "const";
import { LoadingSpinner } from "components";
import { useToast } from "react-native-toast-notifications";
import UploadResume from "./UploadResume";

const UserInfoChange = forwardRef((props, ref) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const toast = useToast();

  const userInfo = useSelector(({ userRedux }) => userRedux.user);

  const [name, onChangeName] = useState("");
  const [position, onChangePosition] = useState("");
  const [about, onChangeAbout] = useState("");

  const [phone, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [address, onChangeAddress] = useState("");

  const [resume, onChangeResume] = useState({ name: "", url: "" });
  const [skills, onChangeSkills] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const onUpdateInfo = useCallback(
    async imageSrc => {
      setIsLoading(true);

      const userData = {
        about,
        address,
        phone,
        position,
        fullname: name,
        resumeUrl: resume.name ? `${resume.name} ${resume.url}` : null,
        avatar_url: imageSrc,
        skills: "[]",
        email,
      };

      try {
        const response = await UserService.putUserInfo(userData);

        if (response?.data?.status === ApiConstant.STT_OK) {
          toast.show("Update info successfully", { type: "success" });
          navigation.goBack();
        }
      } catch (error) {
        toast.show("Update failed. Try again!", { type: "danger" });
      } finally {
        setIsLoading(false);
      }
    },
    [about, address, name, navigation, phone, position, resume, toast, email],
  );

  useEffect(() => {
    if (!isFocused) return;

    onChangeName(userInfo.fullname);
    onChangePosition(userInfo.position);
    onChangeAbout(userInfo.about);
    onChangeNumber(userInfo.phone);
    onChangeEmail(userInfo.email);
    onChangeAddress(userInfo.address);

    if (userInfo.resumeUrl) {
      const splittedArr = userInfo.resumeUrl.split(" ");
      onChangeResume({
        name: splittedArr[0],
        url: splittedArr[1],
      });
    }
  }, [userInfo, isFocused]);

  return (
    <View {...props}>
      <View>
        <Text style={styles.title}>Info</Text>
        <CommonTextInput
          placeholder="Full name"
          value={name}
          onChangeText={onChangeName}
          style={{ marginBottom: 16 }}
        />
        <CommonTextInput
          placeholder="Position"
          value={position}
          onChangeText={onChangePosition}
          style={{ marginBottom: 16 }}
          maxLength={50}
        />
        <CommonTextInput
          placeholder="About"
          value={about}
          onChangeText={onChangeAbout}
          style={{ marginBottom: 16 }}
          multiline
          maxLength={200}
        />
      </View>

      <View>
        <Text style={styles.title}>Contact</Text>

        <CommonTextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={onChangeNumber}
          style={{ marginBottom: 16 }}
        />
        <CommonTextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={onChangeEmail}
          style={{ marginBottom: 16 }}
        />
        <CommonTextInput
          placeholder="Address"
          value={address}
          onChangeText={onChangeAddress}
          style={{ marginBottom: 16 }}
        />
      </View>

      <UploadResume
        resume={resume}
        onChangeResume={onChangeResume}
        setIsLoading={setIsLoading}
      />

      <View style={{ marginTop: 16 }}>
        <Text style={styles.title}>Skills</Text>
        <CommonTextInput
          placeholder="Skills"
          value={skills}
          onChangeText={onChangeSkills}
        />
      </View>

      <TouchableOpacityGesture ref={ref} onPress={onUpdateInfo} />
      <LoadingSpinner isVisible={isLoading} />
    </View>
  );
});

UserInfoChange.displayName = "UserInfoChange";

UserInfoChange.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  title: {
    color: "#212529",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
});

export default UserInfoChange;
