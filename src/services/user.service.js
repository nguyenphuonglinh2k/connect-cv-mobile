import Api from "./api";
import { ApiConstant, AppConstant } from "const";
import store from "reduxStore";
import StringFormat from "string-format";
import clientStorage from "utils/clientStorage";
import axios from "axios";

const axiosConfig = {
  headers: {
    authorization: store.getState().authRedux.token,
  },
};

export const getUserInfo = async () => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(ApiConstant.GET_USER_INFO, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const putUserInfo = async data => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.put(StringFormat(ApiConstant.PUT_USER_INFO), data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const postCloudinaryUpload = async data => {
  const response = await axios.post(process.env.CLOUDINARY_UPLOAD_URL, data, {
    headers: ApiConstant.HEADER_FORM_DATA_DEFAULT,
  });

  return response;
};
