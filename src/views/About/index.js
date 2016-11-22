import React, { Component, PropTypes } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import lincsLogo from '../../static/lincsLogo.png';

import AppStyles from '../../styles';
import styles from './AboutStyleSheet';

export default class About extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  render = () => (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
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
    </View>
  )
}
