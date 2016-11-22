import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/neurolincs.png';

export default function NeuroLINCS() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The NeuroLINCS Center concentrates on human brain cells, which are
        far less understood than other cells in the body. The researchers
        believe it will be necessary to study these cell types directly
        to understand the causes of neurological disease and to develop
        new therapies. By applying LINCS-type perturbations to studying
        an array of human brain cells, the researchers hope to identify
        targets for developing drugs against neurodegenerative diseases
        such as Parkinson’s disease, amyotrophic lateral sclerosis (ALS,
        also known as Lou Gehrig’s disease), spinal muscular atrophy
        and Huntington’s disease.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
