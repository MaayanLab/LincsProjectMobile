import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/mep_lincs.png';

export default function Mep() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The MEP LINCS Center studies how both malignant and non-malignant cells are controlled by the microenvironments in which they live. The researchers will provide measurements of the impacts of thousands of different microenvironments on cellular phenotypes, protein make-up and gene expression readouts in cell lines.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
