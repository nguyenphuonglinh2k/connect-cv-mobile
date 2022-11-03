import Api from "./api";
import { ApiConstant } from "const";
import StringFormat from "string-format";

export const getJobs = () => Api.get(ApiConstant.GET_JOBS);

export const getJobDetail = jobId =>
  Api.get(StringFormat(ApiConstant.GET_JOB_DETAIL, { jobId }));

export const getJobsOfCompany = companyId =>
  Api.get(StringFormat(ApiConstant.GET_JOBS_OF_COMPANY, { companyId }));

export const getAppliedJobs = () => Api.get(ApiConstant.GET_APPLIED_JOBS);

export const getSavedJobs = () => Api.get(ApiConstant.GET_SAVED_JOBS);

export const postSavedJob = data => Api.post(ApiConstant.POST_SAVE_JOB, data);

export const deleteSavedJob = data =>
  Api.post(ApiConstant.DELETE_SAVED_JOB, data);

export const postApplyJob = data => Api.post(ApiConstant.POST_APPLY_JOB, data);
