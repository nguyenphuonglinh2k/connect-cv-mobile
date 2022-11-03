import React, { useCallback, useEffect, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { CommonTextInput } from "components";
import { TouchableOpacity as TouchableOpacityGesture } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { UserService } from "services";
import { ApiConstant } from "const";
import { LoadingSpinner } from "components";
import UserActions from "reduxStore/user.redux";
import AuthActions from "reduxStore/auth.redux";
import { useToast } from "react-native-toast-notifications";

const UserInfoChange = forwardRef((props, ref) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();

  const userInfo = useSelector(({ userRedux }) => userRedux.user);

  const [name, onChangeName] = useState("");
  const [position, onChangePosition] = useState("");
  const [about, onChangeAbout] = useState("");

  const [phone, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [address, onChangeAddress] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onUpdateInfo = useCallback(async imageSrc => {
    // setIsLoading(true);
    // const response = await UserService.putUserInfo(userInfo._id, {
    //   name,
    //   imageSrc,
    // });
    // if (response.status === ApiConstant.STT_OK) {
    //   dispatch(
    //     UserActions.userSuccess({
    //       user: {
    //         ...userInfo,
    //         name,
    //         userImageUrl: imageSrc,
    //       },
    //     }),
    //   );
    //   dispatch(
    //     AuthActions.authSuccess({
    //       user: {
    //         ...userInfo,
    //         name,
    //         userImageUrl: imageSrc,
    //       },
    //     }),
    //   );
    //   toast.show("Update info successfully", { type: "success" });
    //   navigation.goBack();
    // }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isFocused) return;

    onChangeName(userInfo.name);
    onChangeNumber(userInfo.bio);
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
