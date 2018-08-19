import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from "./constants";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.users,
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default userListReducer;