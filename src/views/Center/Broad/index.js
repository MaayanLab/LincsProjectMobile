import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/cmap.png';

export default function Broad() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The LINCS Center for Transcriptomics is studying up to 50 cell types
        perturbed by a large number of chemical compounds and genetic
        reagents that activate or deactivate genes. Each perturbation
        will produce about 1,000 gene-expression readouts. By the project’s
        end, the center expects to have generated more than 1 million
        profiles of how genes are expressed in different cells.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
