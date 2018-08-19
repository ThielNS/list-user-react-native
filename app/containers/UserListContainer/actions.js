import { LOAD_USERS, LOAD_USERS_SUCCESS } from "./constants";

// LOAD USERS
export function loadUsers() {
  return {
    type: LOAD_USERS,
  }
}
export function loadUsersSuccess(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  }
}
export function loadUsersError(error) {
  return {
    type: LOAD_USERS_SUCCESS,
    error,
  }
}