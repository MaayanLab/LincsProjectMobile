import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './MenuStyleSheet';

import AppStyles from '../../styles';
import News from '../../views/News';
import Home from '../../views/Home';

import lincsLogo from '../../static/lincsLogo.png';
import dcicLogo from '../../static/dcic.png';
import dtoxLogo from '../../static/dtox.png';
import hmsLincsLogo from '../../static/hms_lincs.png';
import neurolincsLogo from '../../static/neurolincs.png';
import mepLincsLogo from '../../static/mep_lincs.png';
import pccseLogo from '../../static/pccse.png';
import cmapLogo from '../../static/cmap.png';

export default class Menu extends Component {
  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      main: [
        { title: 'Applications', icon: 'wrench', component: News },
        { title: 'Community', icon: 'users', component: News },
        { title: 'Data', icon: 'bar-chart-o', component: News },
        { title: 'Publications', icon: 'book', component: News },
        { title: 'News', icon: 'newspaper-o', component: News },
        { title: 'About', icon: 'info-circle', component: News },
      ],
      centers: [
        { title: 'DCIC', centerLogo: dcicLogo, component: News },
        { title: 'DToxS', centerLogo: dtoxLogo, component: News },
        { title: 'HMS-LINCS', centerLogo: hmsLincsLogo, component: News },
        { title: 'NeuroLINCS', centerLogo: neurolincsLogo, component: News },
        { title: 'MEP-LINCS', centerLogo: mepLincsLogo, component: News },
        { title: 'PCCSE', centerLogo: pccseLogo, component: News },
        { title: 'Center for Transcriptomics', centerLogo: cmapLogo, component: News },
      ],
      settings: [
        { title: 'Settings', icon: 'cog', component: News },
      ],
    };
  }

  getMainItems = () => {
    const { main } = this.state;
    return main.map((item) => {
      const { title, icon, component, props } = item;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => this.props.navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <Icon style={styles.icon} name={icon} />
            <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  getCenterItems = () => {
    const { centers } = this.state;
    return centers.map((center) => {
      const { title, centerLogo, component, props } = center;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => this.props.navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <View style={styles.centerLogoWrapper}>
              <Image source={centerLogo} style={styles.centerLogo} />
            </View>
            <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  getSettingItems = () => {
    const { settings } = this.state;
    return settings.map((item) => {
      const { title, icon, component, props } = item;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => this.props.navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <Icon style={styles.icon} name={icon} />
            <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render = () => {
    const { navigate } = this.props;

    const mainItems = this.getMainItems();
    const centerItems = this.getCenterItems();
    const settingsItems = this.getSettingItems();

    return (
      <View style={[styles.menuContainer]}>
        <TouchableOpacity
          onPress={() => navigate('LINCS', Home)}
          style={styles.menuHead}
        >
          <Image style={styles.menuHeadLogo} source={lincsLogo} />
          <Text style={[AppStyles.baseText, styles.menuHeadText]}>LINCS Program</Text>
        </TouchableOpacity>

        <ScrollView>
          {/* Main Menu Items*/}
          <View style={styles.menuDivider}>
            <Text style={[AppStyles.baseText, styles.menuDividerText]}>Main</Text>
          </View>
          <View style={[styles.main]}>{mainItems}</View>

          {/* Center Items*/}
          <View style={styles.menuDivider}>
            <Text style={[AppStyles.baseText, styles.menuDividerText]}>Centers</Text>
          </View>
          <View style={[styles.centers]}>{centerItems}</View>

          {/* Settings and Preferences Items*/}
          <View style={styles.menuDivider}>
            <Text style={[AppStyles.baseText, styles.menuDividerText]}>Preferences</Text>
          </View>
          <View style={[styles.settings]}>{settingsItems}</View>
        </ScrollView>
      </View>
    );
  }
}
