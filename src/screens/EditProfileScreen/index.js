import { MainLayout } from "layouts";
import React, { useRef, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import AvatarChange from "./AvatarChange";
import UserInfoChange from "./UserInfoChange";
import { CheckIcon } from "icons";

const EditProfileScreen = () => {
  const ref = useRef();

  const [imageUri, setImageUri] = useState();

  const onSaveChange = () => {
    ref.current.props.onPress(imageUri);
  };

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Edit Profile",
        headerRight: (
          <TouchableOpacity onPress={onSaveChange}>
            <CheckIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <AvatarChange
          imageUri={imageUri}
          setImageUri={setImageUri}
          style={{ alignSelf: "center", marginTop: 16 }}
        />
        <UserInfoChange style={{ marginVertical: 40 }} ref={ref} />
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;
