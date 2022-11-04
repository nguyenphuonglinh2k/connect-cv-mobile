import Api from "./api";
import { ApiConstant, AppConstant } from "const";
import StringFormat from "string-format";
import store from "reduxStore/index";
import clientStorage from "utils/clientStorage";

const axiosConfig = {
  headers: {
    authorization: store.getState().authRedux.token,
  },
};

export const getJobs = () => Api.get(ApiConstant.GET_JOBS);

export const getRecommendedJobs = () =>
  Api.get(ApiConstant.GET_RECOMMENDED_JOBS);

export const getJobDetail = jobId =>
  Api.get(StringFormat(ApiConstant.GET_JOB_DETAIL, { jobId }));

export const getJobsOfCompany = companyId =>
  Api.get(StringFormat(ApiConstant.GET_JOBS_OF_COMPANY, { companyId }));

export const getAppliedJobs = async () => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(ApiConstant.GET_APPLIED_JOBS, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const getSavedJobs = async () => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.get(ApiConstant.GET_SAVED_JOBS, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const postSavedJob = async data => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(ApiConstant.POST_SAVE_JOB, data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const deleteSavedJob = async data => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(ApiConstant.DELETE_SAVED_JOB, data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};

export const postApplyJob = async data => {
  const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

  return Api.post(ApiConstant.POST_APPLY_JOB, data, {
    headers: {
      authorization: axiosConfig.headers.authorization || token,
    },
  });
};
