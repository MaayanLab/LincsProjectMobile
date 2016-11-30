import React, { Component, PropTypes } from 'react';
import { View, Text, Switch } from 'react-native';

import AppStyles from '../../styles';
import styles from './PublicationsStyleSheet';


export default class Options extends Component {
  static propTypes = {
    centerPub: PropTypes.bool,
    changeCenterPub: PropTypes.func,
  }

  render() {
    const centerPub = this.props.centerPub;
    return (
      // switch for community/lincs-funded publication
      <View style={[AppStyles.containerCentered]}>
        <Text>LINCS-Funded</Text>
        <Switch
          onValueChange={() => this.props.changeCenterPub()}
          onTintColor="#0275D8"
          tintColor="#E74C3C"
          thumbTintColor="ghostwhite"
          value={centerPub}
        />
        <Text>Community</Text>
      </View>
    );
  }

}
