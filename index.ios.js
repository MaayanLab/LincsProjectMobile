/**
  Navigation was built following this example.
  https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.lrbsi8e42
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import News from './src/views/News';

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={ styles.rightNavButtonText }>
              { route.rightText || 'Right Button' }
         </Text>
       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>MY APP TITLE</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  }
});

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
        configureScene={this.configureScene}
        style={styles.container}
        initialRoute={{ component: News }}
        renderScene={this.renderScene}
        navigationBar = {
          <Navigator.NavigationBar
            style={styles.nav}
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('LincsProjectMobile', () => LincsProjectMobile);
