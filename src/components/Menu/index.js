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
import menu from './menu';

import Home from '../../views/Home';
import AppStyles from '../../styles';
import lincsLogo from '../../static/lincsLogo.png';


export default class Menu extends Component {
  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  };

  // ------------ Render methods ------------
  render = () => {
    const { navigate } = this.props;

    const mainItems = this._renderMainItems();
    const centerItems = this._renderCenterItems();
    const settingsItems = this._renderSettingItems();

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

  _renderMainItems = () => {
    const { main } = menu;
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

  _renderCenterItems = () => {
    const { centers } = menu;
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

  _renderSettingItems = () => {
    const { settings } = menu;
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
}
