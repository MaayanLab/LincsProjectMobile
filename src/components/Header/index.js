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
      <Image source={lincsLogo} style={styles.logo} />
      <View style={styles.titleContainer}>
        <View style={styles.nihLincsContainer}>
          <Text style={[styles.title, styles.nih]}>NIH </Text>
          <Text style={[styles.title, styles.lincs]}>LINCS</Text>
        </View>
        <Text style={[styles.title, styles.program]}> P R O G R A M </Text>
      </View>
    </Image>
  );
}
