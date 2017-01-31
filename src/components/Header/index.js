import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import styles from './HeaderStyles';

import lincsLogo from '../../static/logo.png';
import background from '../../static/background-blue.png';

export default function Header() {
  return (
    <Image source={background} resizeMode="cover" style={styles.background}>
      <Image source={lincsLogo} style={styles.logo}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.nih]}>NIH</Text>
          <Text style={[styles.title, styles.lincs]}>LINCS</Text>
        </View>
      </Image>
    </Image>
  );
}
