/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import News from './src/components/News.js';

export default class LincsProjectMobile extends Component {
  configureScene(route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} {...route.passProps} />;
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={styles.container}
        initialRoute={{ component: News }}
        renderScene={ this.renderScene }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  }
});


AppRegistry.registerComponent('LincsProjectMobile', () => LincsProjectMobile);
