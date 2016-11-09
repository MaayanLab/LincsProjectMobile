import React, { PropTypes, Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './NewsItemStyleSheet';
import styleConstants from '../../styleConstants';
import WebBrowser from '../WebBrowser';

export default class NewsItem extends Component {
  static PropTypes = {
    navigator: PropTypes.object,
  }

  _navigate(name, type = 'Normal') {
    this.props.navigator.push({
      component: Home,
      passProps: {
        name,
      },
      type,
    });
  }

  renderWebView(uri) {
    // Navigate to URI using WebView.
    // Need to resolve Apple SSL for secure sites.
    this.props.navigator.push({
      component: WebBrowser,
      passProps: {
        uri,
      },
    });
  }

  render() {
    const { story } = this.props;
    const { title, body, link, timestamp } = story;
    return (
      <View style={styles.item}>
        <View style={styles.leftPanel}>
          <Icon name="star" size={15} color={styleConstants.gray} />
        </View>
        <View style={styles.rightPanel}>
          <View style={styles.info}>
            <Text style={styles.date}> 3 days ago </Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
            <Text
              style={styles.link}
              onPress={() => this.renderWebView(link)}
            >
              Details
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
