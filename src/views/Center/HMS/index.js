import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Button from 'apsl-react-native-button';

import WebBrowser from '../../../components/WebBrowser';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/hms_lincs.png';

export default class HMS extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org/LINCS/centers/data-and-signature-generating-centers/hms-lincs' },
      index: 2,
    });
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
        <Image style={[styles.centerLogo]} source={logo} />
        <Text style={[AppStyles.baseText]}>
          The HMS LINCS Center develops new measurement methods and computer
          algorithms to detect and analyze perturbations induced by therapeutic
          drugs in healthy and diseased human cells.
        </Text>
        <View style={[AppStyles.spacer_10]} />

        <Button style={styles.button} onPress={() => this.navigate('HMS-LINCS')}>
          <Text style={[AppStyles.baseText, styles.white]}> Visit Center's page </Text>
        </Button>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
