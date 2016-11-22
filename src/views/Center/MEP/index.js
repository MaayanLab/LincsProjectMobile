import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Unavailable from '../../Unavailable';

import AppStyles from '../../../styles';
import styles from './MEPStyleSheet';

export default function DCIC(props) {
  const { center, logo, description } = props;
  if (center.length === 0 || description.length === 0) return <Unavailable />;

  return (
    <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
      <Image style={[styles.centerLogo]} source={logo} />
      <Text style={[AppStyles.baseText]}>
        {description}
      </Text>
      <View style={[AppStyles.spacer_10]} />
    </View>
  );
}

DCIC.propTypes = {
  center: PropTypes.string,
  description: PropTypes.string,
  // logo: PropTypes.object,
};
