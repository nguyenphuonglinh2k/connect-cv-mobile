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
export const POST_SIGN_IN = "/auth/login";
export const POST_SIGN_UP = "/auth/signup";

// Job
export const GET_JOBS = "/jobinformation/get_all";
export const GET_JOB_DETAIL = "/jobinformation/detail_job/{jobId}";
