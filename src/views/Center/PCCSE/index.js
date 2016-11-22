import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/pccse.png';

export default function Pccse() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The LINCS Proteomic Characterization Center for Signaling and Epigenetics studies cell disruption at the most basic levels: phosphorylation-mediated signaling — that is, how cells communicate internally; and epigenetics, or how cells perpetuate non-genetic information as they grow.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
