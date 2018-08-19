import { takeLatest, put, call } from  "redux-saga/effects";
import { LOAD_USERS } from "./constants";
import { loadUsersError, loadUsersSuccess } from "./actions";
import { getRequest } from "../../utils/requestAPI";
import { API_URL } from "../../utils/constants";

function* userListSaga() {
  yield takeLatest(LOAD_USERS, loadUsers);
}

function* loadUsers() {
  try {
    const users = yield call(getRequest, `${API_URL}/users`);
    yield put(loadUsersSuccess(users));
  } catch (error) {
    yield put(loadUsersError(error));
  }
}

export default userListSaga;