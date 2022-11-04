import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getJobsRequest: [],
  getRecommendedJobsRequest: [],
  getJobDetailRequest: ["data"],
  getSearchedJobsRequest: ["data"],

  jobSuccess: ["data"],
  jobFailure: ["data"],
  jobReset: [],
});

export const JobTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  status: null,

  jobs: [],
  pageSize: 5,
  total: 0,

  recommendedJobs: [],

  job: {},

  searchTag: "",
};

/* ------------- Reducers ------------- */
export const request = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});

export const success = (state = INITIAL_STATE, action) => {
  const data = action.data || {};
  return {
    ...state,
    isFetching: false,
    errors: null,
    status: null,
    ...data,
  };
};

export const failure = (state = INITIAL_STATE, action) => {
  const data = action.data ? action.data : {};
  return { ...state, isFetching: false, error: data };
};

export const reset = () => INITIAL_STATE;

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.GET_JOBS_REQUEST]: request,
  [Types.GET_RECOMMENDED_JOBS_REQUEST]: request,
  [Types.GET_JOB_DETAIL_REQUEST]: request,
  [Types.GET_SEARCHED_JOBS_REQUEST]: request,

  [Types.JOB_SUCCESS]: success,
  [Types.JOB_FAILURE]: failure,
  [Types.JOB_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
