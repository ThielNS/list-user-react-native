import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, ToastAndroid, View, StyleSheet } from "react-native";
import UserList from "../../components/UserList";
import { loadUsers } from "./actions";

class UserListContainer extends Component {
  componentDidMount() {
    // HERE, AFTER MOUNT THE CONTAINER, LOAD THE ACTION LOAD USERS FUNCTION
    this.props.loadUsers();
  }
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    // IF HAS ERROR OPEN A TOAST TO NOTIFICATION
    if (error && prevProps.error !== error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  }
  render() {
    const { loading, users } = this.props;
    return loading ? (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    ) : (
      <UserList users={users}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

/*
* HERE IN MAP STATE TO PROPS, IT RETURNS THE PROPS OF THE OBJECT USER COMING FROM THE REDUCER STORE
* user: {
*   loading: false,
*   error: null,
*   users: [],
* }
* */
const mapStateToProps = ({ users }) => ({ ...users });

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);