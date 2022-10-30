import React, { useCallback, useEffect, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
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
  const [bio, onChangeBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onUpdateInfo = useCallback(
    async imageSrc => {
      if (!imageSrc && !name && !bio) return;

      setIsLoading(true);

      const response = await UserService.putUserInfo(userInfo._id, {
        name,
        bio,
        imageSrc,
      });

      if (response.status === ApiConstant.STT_OK) {
        dispatch(
          UserActions.userSuccess({
            user: {
              ...userInfo,
              name,
              bio,
              userImageUrl: imageSrc,
            },
          }),
        );
        dispatch(
          AuthActions.authSuccess({
            user: {
              ...userInfo,
              name,
              bio,
              userImageUrl: imageSrc,
            },
          }),
        );
        toast.show("Update info successfully", { type: "success" });
        navigation.goBack();
      }

      setIsLoading(false);
    },
    [name, bio, userInfo, dispatch, toast, navigation],
  );

  useEffect(() => {
    if (!isFocused) return;

    onChangeName(userInfo.name);
    onChangeBio(userInfo.bio);
  }, [userInfo, isFocused]);

  return (
    <View {...props}>
      <CommonTextInput
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
        style={{ marginBottom: 16 }}
      />
      <CommonTextInput
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={bio}
        onChangeText={onChangeBio}
      />

      <TouchableOpacityGesture ref={ref} onPress={onUpdateInfo} />
      <LoadingSpinner isVisible={isLoading} />
    </View>
  );
});

UserInfoChange.displayName = "UserInfoChange";

UserInfoChange.propTypes = {
  style: PropTypes.object,
};

export default UserInfoChange;