import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import AppStyles from '../../styles';

export default function LoadingScreen() {
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <ActivityIndicator
        animating
        size="large"
        {...this.props}
      />
      <Text>Loading</Text>
    </View>
  );
}
