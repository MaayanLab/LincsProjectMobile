import React, { Component, PropTypes } from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  Platform,
} from 'react-native';

import AppStyles from '../../styles';
import styles from './HomeStyleSheet';
import logoWithLines from '../../static/logoWithLines.png';
import vertBackground from './static/lpm_background_vert2.png';
import landscapeBackground from './static/lpm_background_landscape.png';

const { width, height } = Dimensions.get('window');

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
      layout: { height, width }
    };
  }

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Home,
      index: 2,
    });
  }

  _onLayout = (event) => {
    this.setState({
      layout: {
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      },
    });
  }

  _renderAndroid = () => {
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    if (currWidth > currHeight) {
      // if landscape mode
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]} onLayout={this._onLayout}>
          <Image style={styles.background} source={landscapeBackground}>
            <View style={styles.topAndroidLandscape}>
              <Image style={styles.logo} source={logoWithLines} />
            </View>

            <View style={styles.bottomAndroidLandscape}>
              <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro2]}>
                LINCS Project
              </Text>
              <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro3]}>
                Mobile App
              </Text>
            </View>
            <Text
              style={
                [AppStyles.baseText, AppStyles.p, styles.footer, styles.footerAndroidLandscape]
              }
            >
              Designed by the BD2K-LINCS DCIC
            </Text>
          </Image>
        </View>
      );
    }
    // default is portrait mode
    return (
      <View
        style={[AppStyles.container, AppStyles.containerCentered, styles.centerContainer]}
        onLayout={this._onLayout}
      >
        <Image style={styles.background} source={vertBackground}>
          <View style={styles.topAndroidPortrait}>
            <Image style={styles.logo} source={logoWithLines} />
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro1]}>
              Welcome to the
            </Text>
          </View>
          <View style={styles.bottomAndroidPortrait}>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro2]}>
              LINCS Project
            </Text>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro3]}>
              Mobile App
            </Text>
          </View>
          <Text
            style={
              [AppStyles.baseText, AppStyles.p, styles.footer, styles.footerAndroidPortrait]
            }
          >
            Designed by the BD2K-LINCS DCIC
          </Text>
        </Image>
      </View>
    );
  }

  _renderIOS = () => {
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    if (currWidth > currHeight) {
      // if landscape mode
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]} onLayout={this._onLayout}>
          <Image style={styles.background} source={landscapeBackground}>
            <View style={styles.topIOSLandscape}>
              <Image style={styles.logo} source={logoWithLines} />
            </View>

            <View style={styles.bottomIOSLandscape}>
              <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro2]}>
                LINCS Project
              </Text>
              <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro3]}>
                Mobile App
              </Text>
            </View>
            <Text
              style={
                [AppStyles.baseText, AppStyles.p, styles.footer, styles.footerIOSLandscape]
              }
            >
              Designed by the BD2K-LINCS DCIC
            </Text>
          </Image>
        </View>
      );
    }
    // default is portrait mode
    return (
      <View
        style={[AppStyles.container, AppStyles.containerCentered, styles.centerContainer]}
        onLayout={this._onLayout}
      >
        <Image style={styles.background} source={vertBackground}>
          <View style={styles.topIOSPortrait}>
            <Image style={styles.logo} source={logoWithLines} />
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro1]}>
              Welcome to the
            </Text>
          </View>
          <View style={styles.bottomIOSPortrait}>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro2]}>
              LINCS Project
            </Text>
            <Text style={[AppStyles.baseText, AppStyles.h1, styles.intro, styles.intro3]}>
              Mobile App
            </Text>
          </View>
          <Text style={[AppStyles.baseText, AppStyles.p, styles.footer, styles.footerIOSPortrait]}>
            Designed by the BD2K-LINCS DCIC
          </Text>
        </Image>
      </View>
    );
  }

  render = () => (Platform.OS === 'ios' ? this._renderIOS() : this._renderAndroid());
}
