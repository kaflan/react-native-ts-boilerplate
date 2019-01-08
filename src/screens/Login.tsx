import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default class Login extends Component<void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login screen</Text>
      </View>
    );
  }
}
