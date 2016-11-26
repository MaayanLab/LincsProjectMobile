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
import logo from '../../../static/centers_full_logo/dtox.png';


export default class DToxS extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org/LINCS/centers/data-and-signature-generating-centers/dtoxs' },
      index: 2,
    });
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
        <Image style={[styles.centerLogo]} source={logo} />
        <Text style={[AppStyles.baseText]}>
          The Drug Toxicity Signature Generation Center aims to develop cell
          signatures that will predict adverse events that might be caused by
          drugs and will identify other drugs that might lessen these side
          effects. The center will leverage the U.S. Food and Drug
          Administration’s (FDA) Adverse Event Reporting System database
          to identify drugs that produce adverse events in heart, liver and
          neuronal function, and to search for drugs that may mitigate these
          events
        </Text>

        <TouchableOpacity onPress={() => this.navigate('DToxS')}>
          <Text style={[AppStyles.baseText]}> Hello Test </Text>
        </TouchableOpacity>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
