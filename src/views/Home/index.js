import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppStyles from '../../styles';
import styles from './HomeStyleSheet';

export default class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    showSplashScreen: PropTypes.bool,
    placeholder: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    };
  }

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Home,
      index: 2,
    });
  }

  render = () => {
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered, styles.background]}>
        <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro]}>
          Welcome to the
        </Text>
        <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro]}>
          LINCS Project App
        </Text>
      </View>
    );
  }
}
