import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Unavailable from '../../Unavailable';

import AppStyles from '../../../styles';
import styles from './HMSStyleSheet';

export default function Hms(props) {
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

Hms.propTypes = {
  center: PropTypes.string,
  description: PropTypes.string,
  // logo: PropTypes.object,
};
