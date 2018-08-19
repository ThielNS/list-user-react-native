import React, { Component } from "react";
import { FlatList, ScrollView, TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

class UserList extends Component {
  keyExtractor = (item) => item.id.toString();
  render() {
    const { users } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <FlatList
          data={users}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => Actions.userDetail({ userId: item.id })}>
              <View style={[styles.item, styles.row]}>
                <Image
                  source={{ uri: item.picture }}
                  style={styles.picture}
                  resizeMode="cover"
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: { paddingVertical: 5 },
  item: {
    padding: 10,
    margin: 20,
    marginTop: 5,
    marginBottom: 10,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 20,
  }
});

export default UserList;