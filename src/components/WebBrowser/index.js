import React, { PropTypes, Component } from 'react';
import { WebView } from 'react-native';

export default class WebBrowser extends Component {
  static propTypes = {
    uri: PropTypes.string,
  }

  render() {
    const { uri } = this.props;
    return (
      <WebView
        source={{ uri }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
