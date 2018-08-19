import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// IMPORTS REDUCERS
import userListReducer from '../containers/UserListContainer/reducer';
import userDetailReducer from '../containers/UserDetailContainer/reducer';
// END IMPORTS REDUCERS

// IMPORTS SAGAS
import userListSaga from "../containers/UserListContainer/saga";
import userDetailSaga from "../containers/UserDetailContainer/saga";
// END IMPORTS SAGAS

// CREATE A SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// CONFIG ROOT SAGA
function* rootSaga() {
  yield all([
    userListSaga(),
    userDetailSaga()
  ]);
}

// CONFIG ROOT REDUCER
const rootReduce = combineReducers({
  users: userListReducer,
  user: userDetailReducer,
});

// CONFIG STORE OF THE REDUCERS WITH SAGA MIDDLEWARE
const store = createStore(rootReduce, applyMiddleware(sagaMiddleware));

// RUN SAGAS
sagaMiddleware.run(rootSaga);

export default store;