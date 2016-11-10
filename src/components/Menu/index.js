import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppStyles from '../../styles';
import styles from './MenuStyleSheet';
import News from '../../views/News';

export default class Menu extends Component {
  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      menu: [
        { title: 'About', icon: 'star', component: News },
        { title: 'Applications', icon: 'star', component: News },
        { title: 'Community', icon: 'star', component: News },
        { title: 'Data', icon: 'star', component: News },
        { title: 'Publications', icon: 'star', component: News },
        { title: 'News', icon: 'star', component: News },
      ],
    };
  }

  render = () => {
    const { navigate } = this.props;
    const { menu } = this.state;

    const menuItems = menu.map((item) => {
      const { title, icon, component, props } = item;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <Icon style={styles.icon} name={icon} />
            <Text style={[AppStyles.baseText, styles.menuItem_text]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>{menuItems}</View>
      </View>
    );
  }
}
