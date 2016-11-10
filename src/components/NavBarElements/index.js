import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../styles';
import styles from './NavBarElementsStyleSheet';

export class NavbarTitle extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  }
  render() {
    return (
      <Text style={[AppStyles.baseText, styles.navbarTitle]}>
        {this.props.title || 'LINCS Program'}
      </Text>
    );
  }
}

export class NavbarLeftButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    icon: React.PropTypes.string.isRequired,
  }

  render = () => (
    <TouchableOpacity
      onPress={this.props.onPress}
      activeOpacity={0.7}
      style={styles.navbarButton}
      hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
    >
      <Icon name={this.props.icon} size={36} color={'#FFF'} />
    </TouchableOpacity>
  );
}
