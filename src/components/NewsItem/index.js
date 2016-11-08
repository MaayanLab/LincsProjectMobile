import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './NewsItemStyleSheet.js';

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  _navigate(name, type='Normal') {
    this.props.navigator.push({
      component: Home,
      passProps: {
        name: name
      },
      type: type
    });
  }

  _renderWebView(uri) {
    // Navigate to URI
  }

  render() {
    const { story } = this.props;
    const { title, body, link, timestamp } = story;
    return (
      <View style={styles.item}>
        <View style={styles.leftPanel}>

        </View>
        <View style={styles.info}>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <Text onPress={this._renderWebView(link)}>{link}</Text>
        </View>
      </View>
    );
  }
};
