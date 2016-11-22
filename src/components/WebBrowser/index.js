import React, { PropTypes } from 'react';
import { Text, WebView } from 'react-native';

export default function WebBrowser(props) {
  const { uri } = props;
  return (
    <WebView source={{ uri }} />
  );
}

WebBrowser.propTypes = {
  uri: PropTypes.string,
};
