import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class UserDetail extends Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={[styles.row, styles.rowJustifyCenter]}>
            <Image
              source={{ uri: user.picture }}
              style={styles.picture}
              resizeMode="cover"
            />
          </View>
          <View style={[styles.row, styles.rowJustifyCenter]}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>E-mail:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Phone:</Text>
            <Text style={styles.value}>{user.phone}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    elevation: 4,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  rowJustifyCenter: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    color: "#555",
  },
  title: {
    fontSize: 16,
    color: "#555",
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: "#999",
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  }
});

export default UserDetail;