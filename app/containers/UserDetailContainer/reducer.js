import { LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS } from "./constants";

const initialState = {
  loading: false,
  error: null,
  user: {},
};

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.user,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default userDetailReducer;