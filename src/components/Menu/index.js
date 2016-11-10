import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppStyles from '../../styles';
import styles from './MenuStyleSheet';
import News from '../../views/News';
import lincsLogo from '../../static/lincsLogo.png';

export default class Menu extends Component {
  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      menu: [
        { title: 'Applications', icon: 'wrench', component: News },
        { title: 'Community', icon: 'users', component: News },
        { title: 'Data', icon: 'bar-chart-o', component: News },
        { title: 'Publications', icon: 'book', component: News },
        { title: 'News', icon: 'newspaper-o', component: News },
        { title: 'About', icon: 'info-circle', component: News },
      ],
    };
  }

  render = () => {
    const { navigate } = this.props;
    const { menu } = this.state;

    const mainItems = menu.map((item) => {
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
        <View style={styles.menuHead}>
          <Image style={styles.menuHeadLogo} source={lincsLogo}/>
          <Text style={[AppStyles.baseText, styles.menuHeadText]}>LINCS Program</Text>
        </View>
        <View style={styles.menuDivider}>
          <Text style={[AppStyles.baseText, styles.menuDividerText]}>Main</Text>
        </View>
        <View style={[styles.main]}>{mainItems}</View>
      </View>
    );
  }
}
