import React, { Component, PropTypes } from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';

import AppStyles from '../../styles';
import styles from './HomeStyleSheet';
import logoWithLines from '../../static/logoWithLines.png';
import vertBackground from './static/lpm_background_vert2.png';

export default class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    showSplashScreen: PropTypes.bool,
    placeholder: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    };
  }

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Home,
      index: 2,
    });
  }

  render = () => {
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Image style={styles.background} source={vertBackground}>
          <View style={styles.half}>
            <Image style={styles.logo} source={logoWithLines} />
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro1]}>
              Welcome to the
            </Text>
          </View>

          <View style={styles.half}>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro2]}>
              LINCS Project
            </Text>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro3]}>
              Mobile App
            </Text>
          </View>
          <Text style={[AppStyles.baseText, AppStyles.p, styles.footer]}>
            Designed by the LINCS-DCIC
          </Text>
        </Image>
      </View>
    );
  }
}
