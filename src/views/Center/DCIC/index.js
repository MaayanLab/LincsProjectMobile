import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import AppStyles from '../../../styles';
import styles from '../CenterStyleSheet';
import logo from '../../../static/centers_full_logo/dcic.png';

export default function DCIC() {
  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        The Center brings together a team of computational experts with
        several years of experience with LINCS data and complementary
        expertise: Drs. Ma’ayan, Schürer, and Medvedovic develop and
        deploy a next generation computational infrastructure, develop
        novel analysis tools and methods enabling researchers to glean
        new insights from integrative models of biological systems to link
        complex diseases/phenotypes with drugs and the pathways that
        those drugs target in different cells and tissues. The DCIC
        plays a key role in realizing the transformative potential of
        LINCS data and resources in accelerating the discovery of novel
        therapeutics and improving diagnostics of human health.
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}
