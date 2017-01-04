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
import lincsLogo from '../../static/logo.png';
import background from '../../static/background-blue.png';

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
    <ScrollView contentContainerStyle={AppStyles.containerCentered}>
      <Image source={background} resizeMode="cover" style={styles.background}>
        <Image source={lincsLogo} style={styles.logo}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.nih]}>NIH</Text>
            <Text style={[styles.title, styles.lincs]}>LINCS</Text>
          </View>
        </Image>
      </Image>
      <View style={AppStyles.spacer_10} />
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <Text style={[AppStyles.centered, styles.subtitle]}> Overview </Text>
        <View style={AppStyles.spacer_10} />
        <Text style={[AppStyles.baseText, AppStyles.p, styles.intro]}>
          &nbsp;&nbsp;&nbsp;&nbsp;By generating and making public data that
          indicates how cells respond to various genetic and environmental
          stressors, the LINCS project will help us gain a more detailed
          understanding of cell pathways and aid efforts to develop
          therapies that might restore perturbed pathways and networks
          to their normal states.
        </Text>
        <View style={AppStyles.spacer_10} />
        <Text style={[AppStyles.baseText, AppStyles.p, styles.intro]}>
          &nbsp;&nbsp;&nbsp;&nbsp;The LINCS website is a source of information
          for the research community and general public about the LINCS project.
          This website along with the LINCS Data Portal contains details
          about the assays, cell types, and perturbagens that are currently
          part of the library, as well as links to participating sites,
          data releases from the sites, and software that can be used for
          analyzing the data.
        </Text>
        <View style={AppStyles.spacer_20} />
        <Button style={[styles.button]} onPress={() => this.navigate('LINCS Project')}>
          <Text style={[AppStyles.baseText, styles.white]}> Learn More </Text>
        </Button>
      </View>
    </ScrollView>
  )
}
