import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Home from '../Home';
import Unavailable from '../Unavailable';
import centersInfo from './centersInfo';

import AppStyles from '../../styles';

export default class Center extends Component {
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
    const centerName = this.props.center;
    // If centerName does not exist in centersInfo
    if (typeof centersInfo[centerName] === 'undefined') return <Unavailable />;

    // If centerName exists in centersInfo
    const { description } = centersInfo[centerName];
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {centerName}
          {description}
        </Text>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
