import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

import styles from './PublicationItemStyleSheet';
import AppStyles from '../../styles';
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
    console.log(pub);
    return (
      <View style={styles.container}>
        <Text>{pub.articleName}</Text>
        <View style={AppStyles.spacer_20} />
      </View>
    );
  }
}
