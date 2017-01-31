import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button';
import Header from '../../../components/Header';

import WebBrowser from '../../../components/WebBrowser';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/cmap.png';
import lincsLogo from '../../../static/logo.png';
import background from '../../../static/background-blue.png';

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={background} resizeMode="cover" style={styles.background}>
          <Header />
        </Image>
        <View style={[AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
          <Image style={[styles.centerLogo]} source={logo} />
          <Text style={[AppStyles.baseText, styles.body]}>
            &nbsp;&nbsp;&nbsp;&nbsp;The LINCS Center for Transcriptomics is
            studying up to 50 cell types perturbed by a large number of chemical
            compounds and genetic reagents that activate or deactivate genes.
            Each perturbation will produce about 1,000 gene-expression readouts.
            By the project’s end, the center expects to have generated more than
            1 million profiles of how genes are expressed in different cells.
          </Text>
          <View style={[AppStyles.spacer_10]} />
          <Button style={styles.button} onPress={() => this.navigate('Broad Transcriptomics')}>
            <Text style={[AppStyles.baseText, styles.white]}> Visit Center's page </Text>
          </Button>
        </View>
        <View style={[AppStyles.spacer_10]} />
      </ScrollView>
    );
  }
}
