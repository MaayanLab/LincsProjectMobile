import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './PublicationItemStyleSheet';
import AppConfig from '../../config';
import WebBrowser from '../WebBrowser';

export default class PublicationItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    pub: PropTypes.object,
  }

  navigate(uri) {
    this.props.navigator.push({
      title: 'Publication',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

  render() {
    const { pub } = this.props;
    return (
      <View style={styles.item}>
        <View style={styles.leftPanel}>
          <Icon name="star" size={15} color={AppConfig.gray} />
        </View>
      </View>
    );
  }
}
