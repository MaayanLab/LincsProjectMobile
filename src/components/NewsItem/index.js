import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './NewsItemStyleSheet.js';
import styleConstants from '../../styleConstants.js';
import WebBrowser from '../WebBrowser';

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
    // Navigate to URI using WebView
    this.props.navigator.push({
      component: WebBrowser,
      passProps: {
        uri: uri
      }
    });
  }

  render() {
    const { story } = this.props;
    const { title, body, link, timestamp } = story;
    return (
      <View style={styles.item}>
        <View style={styles.leftPanel}>
          <Icon name="star" size={15} color="#8e8e8e" />
        </View>
        <View style={styles.rightPanel}>
          <View style={styles.info}>
            <Text style={styles.date}> 3 days ago </Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
            <Text
              style={styles.link}
              onPress={() => this._renderWebView(link)}>
              Details
            </Text>
          </View>
        </View>
      </View>
    );
  }
};
