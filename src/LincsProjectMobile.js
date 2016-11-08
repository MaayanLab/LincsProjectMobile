/**
  Navigation was built following this example.
  https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.lrbsi8e42
 */

import React, { Component } from 'react';
import { Text, Navigator, View, StatusBar } from 'react-native';

import NavBar from './components/NavBar';
import News from './views/News';

import styles from './LincsProjectMobileStyleSheet.js';

export default class LincsProjectMobile extends Component {
  configureScene(route, routeStack) {
    // if (route.type === 'Modal') {
    //   return Navigator.SceneConfigs.FloatFromBottom;
    // }
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />;
  }

  render() {
    const navBar = (
      <Navigator.NavigationBar
        style={styles.nav}
        routeMapper={NavBar}
      />
    );
    return (
      <View style={styles.container}>
        <StatusBar
         barStyle="light-content"
        />
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{ component: News }}
          renderScene={this.renderScene}
          navigationBar = {navBar}
        />
      </View>
    );
  }
}
