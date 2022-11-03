import { call, put } from "redux-saga/effects";
import { ApiConstant } from "const";
import { UserService } from "services";
import UserActions from "reduxStore/user.redux";
import { toCamel } from "utils/index";

export function* getUserInfoRequest(action) {
  try {
    const { data } = action;

    const response = yield call(UserService.getUserInfo, data);

    if (response.data.status === ApiConstant.STT_OK) {
      const responseData = toCamel(response.data.data);

      const user = {
        ...responseData.personalInformation,
        email: responseData.email,
        username: responseData.name,
      };

      yield put(
        UserActions.userSuccess({
          user,
        }),
      );
    } else {
      yield put(UserActions.userFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.userFailure(error));
  }
}
