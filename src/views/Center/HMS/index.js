import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button';

import WebBrowser from '../../../components/WebBrowser';
import Header from '../../../components/Header';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/hms_lincs.png';
import lincsLogo from '../../../static/logo.png';
import background from '../../../static/background-blue.png';

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={background} resizeMode="cover" style={styles.background}>
          <Header />
        </Image>
        <View style={[AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
          <Image style={[styles.centerLogo]} source={logo} />
          <Text style={[AppStyles.baseText, styles.body]}>
            &nbsp;&nbsp;&nbsp;The HMS LINCS Center studies how normal and diseased
            human cells respond at the molecular level to perturbation by drugs,
            mutations, and the local environment as a means to develop improved
            predictive models of drug toxicity and response.
          </Text>
          <View style={[AppStyles.spacer_10]} />
          <Button style={styles.button} onPress={() => this.navigate('HMS-LINCS')}>
            <Text style={[AppStyles.baseText, styles.white]}> Visit Center's page </Text>
          </Button>
        </View>
        <View style={[AppStyles.spacer_20]} />
      </ScrollView>
    );
  }
}
