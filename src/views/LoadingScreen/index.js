import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import lincsLogo from '../../static/lincsLogo.png';

import AppStyles from '../../styles';
import styles from './LoadingScreenStyleSheet';

const LoadingScreen = (props) => {
  const progress = props.progress;
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered, styles.background]}>
      <Text style={styles.title}>LINCS Project</Text>
      <View style={AppStyles.spacer_20} />
      <AnimatedCircularProgress
        size={200}
        width={3}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      />
      <Image style={styles.logo} source={lincsLogo} />
    </View>
  );
};

LoadingScreen.propTypes = {
  progress: PropTypes.number,
};

export default LoadingScreen;
