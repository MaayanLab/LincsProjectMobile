import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Home from './Home.js';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  }
});

export default class News extends Component {
  // _navigate(name) {
  //   this.props.navigator.push({
  //     component: Home,
  //     passProps: {
  //       name: name
  //     }
  //   });
  // }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> Testing the Router </Text>
      </View>
    );
  }
};
