import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppStyles from '../../styles';

export default function Unavailable() {
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text style={[AppStyles.baseText, AppStyles.p]}>
        Page is currently unavailable.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
