import { takeLatest, put, call } from  "redux-saga/effects";
import { LOAD_USER } from "./constants";
import { loadUserError, loadUserSuccess } from "./actions";
import { getRequest } from "../../utils/requestAPI";
import { API_URL } from "../../utils/constants";

function* userDetailSaga() {
  yield takeLatest(LOAD_USER, loadUser);
}

function* loadUser({ userId }) {
  try {
    const user = yield call(getRequest, `${API_URL}/users/${userId}`);
    yield put(loadUserSuccess(user));
  } catch (error) {
    put(loadUserError(error));
  }
}

export default userDetailSaga;