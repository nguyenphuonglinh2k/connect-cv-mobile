export const BASE_URL = "http://migor01.herokuapp.com";

export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 15000;

export const HEADER_FORM_DATA_DEFAULT = {
  "Content-Type": "multipart/form-data",
};

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;

// Auth
export const POST_SIGN_IN = "/login";
export const POST_SIGN_UP = "/user/create";

// User
export const GET_USERS = "/user/get_all";
export const GET_USER_INFO = "/user/get_info";
export const PUT_USER_INFO = "/user/update";

// Job
export const GET_JOBS = "/jobinformation/get_all";
export const GET_JOB_DETAIL = "/jobinformation/detail_job/{jobId}";
export const GET_JOBS_OF_COMPANY =
  "/company/get_job_company?company_id={companyId}";
export const POST_APPLY_JOB = "/jobinformation/create";
export const GET_APPLIED_JOBS = "/jobinformation/get";
export const GET_SAVED_JOBS = "/saveJob/get";
export const POST_SAVE_JOB = "/saveJob/create";
export const DELETE_SAVED_JOB = "/saveJob/delete";
export const GET_RECOMMENDED_JOBS = "/jobinformation/get_random";

export const GET_SEARCHED_JOBS = "/jobinformation/search_job";
export const POST_CHECK_SAVED_JOB = "/saveJob/check_save_job";

// Company
export const GET_COMPANY_DETAIL = "/company/get_job_company/{companyId}";
