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
import logo from '../../../static/centers_full_logo/dcic.png';
import lincsLogo from '../../../static/logo.png';
import background from '../../../static/background-blue.png';


export default class DCIC extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org/LINCS/centers/dcic' },
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
            &nbsp;&nbsp;&nbsp;&nbsp;The Center brings together a team of computational experts with
            several years of experience with LINCS data and complementary
            expertise: Drs. Ma’ayan, Schürer, and Medvedovic develop and
            deploy a next generation computational infrastructure, develop
            novel analysis tools and methods enabling researchers to glean
            new insights from integrative models of biological systems to link
            complex diseases/phenotypes with drugs and the pathways that
            those drugs target in different cells and tissues. The DCIC
            plays a key role in realizing the transformative potential of
            LINCS data and resources in accelerating the discovery of novel
            therapeutics and improving diagnostics of human health.
          </Text>
          <View style={[AppStyles.spacer_10]} />
          <Button style={styles.button} onPress={() => this.navigate('DCIC')}>
            <Text style={[AppStyles.baseText, styles.white]}> Visit Center's page </Text>
          </Button>
        </View>
        <View style={[AppStyles.spacer_10]} />
      </ScrollView>
    );
  }
}
