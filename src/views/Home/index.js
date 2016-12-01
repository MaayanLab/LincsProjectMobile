import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppStyles from '../../styles';

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
    const text = this.props.placeholder || 'Welcome to the LINCS Project App';
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
