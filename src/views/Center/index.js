import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppStyles from '../../styles';

export default class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    center: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Home,
      index: 2,
    });
  }

  render = () => {
    const { center } = this.props;
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {center}
        </Text>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
