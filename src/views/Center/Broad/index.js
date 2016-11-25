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
import logo from '../../../static/centers_full_logo/cmap.png';

export default class Broad extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org/LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics' },
      index: 2,
    });
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
        <Image style={[styles.centerLogo]} source={logo} />
        <Text style={[AppStyles.baseText]}>
          The LINCS Center for Transcriptomics is studying up to 50 cell types
          perturbed by a large number of chemical compounds and genetic
          reagents that activate or deactivate genes. Each perturbation
          will produce about 1,000 gene-expression readouts. By the project’s
          end, the center expects to have generated more than 1 million
          profiles of how genes are expressed in different cells.
        </Text>
        <TouchableOpacity onPress={() => this.navigate('Testing')}>
          <Text> Hello Test </Text>
        </TouchableOpacity>
        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}
