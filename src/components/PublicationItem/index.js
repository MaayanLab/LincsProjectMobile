import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './PublicationItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

export default class PublicationItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    pub: PropTypes.object,
  }

  navigate(pmId) {
    this.props.navigator.push({
      title: 'Publication',
      component: WebBrowser,
      passProps: { uri: `http://www.ncbi.nlm.nih.gov/pubmed/${pmId}` },
      index: 2,
    });
  }

  render() {
    const { pub } = this.props;
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>        
        <TouchableOpacity onPress={() => this.navigate(pub.pmId)}>
          <Text>{pub.articleName}</Text>
          <View style={AppStyles.hr} />
        </TouchableOpacity>
      </View>
    );
  }
}
