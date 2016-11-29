import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './LoadingScreenStyleSheet';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // begin fetch
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating
          size="large"
          {...this.props}
        />
      </View>
    );
  }
}
