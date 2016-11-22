import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/hms_lincs.png';

export default function Hms() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The HMS LINCS Center develops new measurement methods and computer
        algorithms to detect and analyze perturbations induced by therapeutic
        drugs in healthy and diseased human cells.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
