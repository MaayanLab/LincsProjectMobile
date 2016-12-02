import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import Button from 'apsl-react-native-button';
import WebBrowser from '../../components/WebBrowser';

import AppStyles from '../../styles';
import styles from './AboutStyleSheet';
import lincsLogo from '../../static/lincsLogo.png';

export default class About extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org' },
      index: 2,
    });
  }

  render = () => (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
      <ScrollView contentContainerStyle={AppStyles.containerCentered}>
        <Text style={[AppStyles.baseText, AppStyles.h2]}>
          LINCS Program
        </Text>
        <Image source={lincsLogo} style={styles.logo} />
        <Text style={[AppStyles.baseText, AppStyles.h2]}>
          Overview
        </Text>
        <Text style={[AppStyles.baseText, AppStyles.p, styles.intro]}>
          The LINCS Consortium is an NIH Common Fund program that supports six
          Data and Signature Generation Centers (DSGCs) and the BD2K-LINCS Data
          Integration and Coordination Center. The LINCS program is currently in
          phase II after the completion of pilot phase I in fiscal year 2013.
        </Text>

        <Text style={[AppStyles.baseText, AppStyles.h2]}>
          LINCS Production Phase II
        </Text>
        <Text style={[AppStyles.baseText, AppStyles.p, styles.intro]}>
          LINCS Data and Signature Generation Centers
          The LINCS Data and Signature Generation Centers are six research
          centers focused on high-throughput experiments that examine the
          changes that occur when a variety of different cell lines are
          exposed to perturbations.
        </Text>
      </ScrollView>

      <View style={[AppStyles.spacer_10]} />
      <Button style={[styles.button]} onPress={() => this.navigate('LINCS Project')}>
        <Text style={[AppStyles.baseText, styles.white]}> Visit lincsproject.org </Text>
      </Button>
      <View style={[AppStyles.spacer_10]} />
    </View>
  )
}
