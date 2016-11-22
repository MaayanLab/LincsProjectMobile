import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppStyles from '../../styles';

export default class Unavailable extends Component {
  render = () =>
    (<View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text style={[AppStyles.baseText, AppStyles.p]}>
        Page is currently unavailable.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>)
}
