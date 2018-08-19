import React from 'react';
import { Provider } from 'react-redux';
import store from "./app/utils/reducer";
import { Router, Scene } from "react-native-router-flux";
import UserListScreen from "./app/screens/UserListScreen";
import UserDetailScreen from "./app/screens/UserDetailScreen";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{ backgroundColor: '#fff', }}>
          <Scene key="root">
            <Scene
              key="userList"
              component={UserListScreen}
              title="User list"
              initial
            />
            <Scene
              key="userDetail"
              component={UserDetailScreen}
              title="User Detail"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}