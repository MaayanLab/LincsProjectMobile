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

  // getMenuItems = (innerState) => {
  //   if (innerState.length === 0) return innerState;
  //   const keys = Object.keys(innerState[0]);
  //
  //   return innerState.map((item) => {
  //     // keys here
  //     // const { title, icon, component, props } = item;
  //     return (
  //       <TouchableOpacity
  //         key={`menu-item-${title}`}
  //         onPress={() => this.props.navigate(title, component, props)}
  //         style={styles.menuItemTouch}
  //       >
  //         <View style={[styles.menuItem]}>
  //           <Icon style={styles.icon} name={icon} />
  //           <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   });
  // }

  getMainItems = () => {
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

  getCenterItems = () => {
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

  getSettingItems = () => {
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
