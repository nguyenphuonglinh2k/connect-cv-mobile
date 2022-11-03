import { call, put } from "redux-saga/effects";
import { ApiConstant } from "const";
import { JobService } from "services";
import JobActions from "reduxStore/job.redux";
import { toCamel } from "utils";

export function* getJobsRequest() {
  try {
    const response = yield call(JobService.getJobs);

    if (response.status === ApiConstant.STT_OK) {
      const responseData = toCamel(response.data.data);

      yield put(
        JobActions.jobSuccess({
          jobs: responseData.data,
          pageSize: responseData.resultPerPage,
          total: responseData.total,
        }),
      );
    } else {
      yield put(JobActions.jobFailure(response.data));
    }
  } catch (error) {
    yield put(JobActions.jobFailure(error));
  }
}

export function* getJobDetailRequest(action) {
  const { jobId } = action.data;

  try {
    const response = yield call(JobService.getJobDetail, jobId);

    if (response.status === ApiConstant.STT_OK) {
      const responseData = toCamel(response.data.data);

      yield put(
        JobActions.jobSuccess({
          job: responseData,
        }),
      );
    } else {
      yield put(JobActions.jobFailure(response.data));
    }
  } catch (error) {
    yield put(JobActions.jobFailure(error));
  }
}
