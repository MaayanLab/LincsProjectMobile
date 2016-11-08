import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebBrowser extends Component {
  render() {
    const { uri } = this.props;
    return (
      <WebView
        source={{uri: uri}}
        style={{marginTop: 20}}
      />
    );
  }
}
