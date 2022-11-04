import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UploadIcon from "icons/UploadIcon";
import DocumentPicker from "react-native-document-picker";
import { getUploadPdfFormData, toCamel } from "utils/index";
import { UserService } from "services/index";
import { ApiConstant } from "const/index";
import { useToast } from "react-native-toast-notifications";

const UploadResume = ({
  resume,
  onChangeResume,
  setIsLoading,
  ...otherProps
}) => {
  const toast = useToast();

  const onPickFile = async () => {
    setIsLoading(true);

    try {
      const bodyFormData = await getUploadPdfFormData();

      const uploadRes = await UserService.postCloudinaryUpload(bodyFormData);

      if (uploadRes.status === ApiConstant.STT_OK) {
        const responseData = toCamel(uploadRes.data);

        onChangeResume({
          name: responseData.originalFilename,
          url: responseData.secureUrl,
        });
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        toast.show("You have cancelled uploading!", {
          type: "warning",
        });
      } else {
        toast.show("Cannot update. Please try again!", { type: "danger" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View {...otherProps}>
      <Text style={styles.title}>Resume</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.uploadBox}
        onPress={onPickFile}
      >
        <View style={styles.iconWrapper}>
          <UploadIcon />
        </View>
        <Text style={styles.text}>
          {resume?.name ? `${resume?.name}.pdf` : "Upload Resume"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

UploadResume.propTypes = {
  resume: PropTypes.object,
  onChangeResume: PropTypes.func,
  setIsLoading: PropTypes.func,
};

const styles = StyleSheet.create({
  title: {
    color: "#212529",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  uploadBox: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  text: {
    fontWeight: "600",
    marginLeft: 10,
    flex: 1,
  },
  iconWrapper: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default UploadResume;
