import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './LoadingScreenStyleSheet.js';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    // begin fetch
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}
