import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

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
        { title: 'News', component: News },
      ],
    };
  }

  render = () => {
    const { navigate } = this.props;
    const { menu } = this.state;

    const menuItems = menu.map((item) => {
      const { title, component, props } = item;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => navigate(title, component, props)}
          style={{ height: 50 }}
        >
          <View style={[styles.menuItem]}>
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
