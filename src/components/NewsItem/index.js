import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NewsItemStyleSheet from './NewsItemStyleSheet.js';

const styles = StyleSheet.create(NewsItemStyleSheet);
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

  render() {
    const { story } = this.props;
    const { title, body, link } = story;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{link}</Text>
      </View>
    );
  }
};
