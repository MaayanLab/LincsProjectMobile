import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Home from '../Home';
import Unavailable from '../Unavailable';

import AppStyles from '../../styles';
import styles from './CenterStyleSheet';

export default class Center extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    center: PropTypes.string,
    description: PropTypes.string,
    // logo: PropTypes.object,
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
    const { center, logo, description } = this.props;
    if (center.length === 0 || description.length === 0) return <Unavailable />;

    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
        <Image style={[styles.centerLogo]} source={logo} />
        <Text style={[AppStyles.baseText]}>
          {description}
        </Text>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
