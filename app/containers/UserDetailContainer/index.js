import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import UserDetail from "../../components/UserDetail/index";
import { loadUser } from "./actions";

class UserDetailContainer extends Component {
  componentDidMount() {
    // HERE, AFTER MOUNT THE CONTAINER, LOAD THE ACTION LOAD USERS FUNCTION
    this.props.loadUser();
  }
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    // IF HAS ERROR OPEN A TOAST TO NOTIFICATION
    if (error && prevProps.error !== error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  }
  render() {
    const { loading, user } = this.props;
    return loading ? (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    ) : (
      <UserDetail user={user} />
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
*   user: {},
* }
* */
const mapStateToProps = ({ user }) => ({ ...user });

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);