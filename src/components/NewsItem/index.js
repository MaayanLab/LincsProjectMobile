import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './NewsItemStyleSheet';
import AppConfig from '../../config';
import WebBrowser from '../WebBrowser';
import Home from '../../views/Home';

export default class NewsItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    story: PropTypes.object,
  }

  navigate(uri) {
    this.props.navigator.push({
      title: 'News',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

  render() {
    const { story } = this.props;
    // const { title, body, link, timestamp } = story;
    const { category, title, presenterName, presenterAffiliation, presenterUrl, url, date } = story;
    return (
      <View style={styles.item}>
        <View style={styles.leftPanel}>
          <Icon name="star" size={15} color={AppConfig.gray} />
        </View>
        <View style={styles.rightPanel}>
          <Text style={styles.category}>{category}</Text>
          <TouchableOpacity style={styles.info} onPress={() => this.navigate(url)}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.presenterInfo}>{presenterName}</Text>
            <Text style={styles.presenterInfo}>{presenterAffiliation}</Text>
            <Text style={styles.link}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
