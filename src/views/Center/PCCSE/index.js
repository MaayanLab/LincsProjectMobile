import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import WebBrowser from '../../../components/WebBrowser';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/pccse.png';

export default class Mep extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'https://www.yahoo.com' },
      index: 2,
    });
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
        <Image style={[styles.centerLogo]} source={logo} />
        <Text style={[AppStyles.baseText]}>
          The LINCS Proteomic Characterization Center for Signaling and
          Epigenetics studies cell disruption at the most basic levels:
          phosphorylation-mediated signaling — that is, how cells communicate
          internally; and epigenetics, or how cells perpetuate non-genetic
          information as they grow.
        </Text>
        <TouchableOpacity onPress={() => this.navigate('Testing')}>
          <Text> Hello Test </Text>
        </TouchableOpacity>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
