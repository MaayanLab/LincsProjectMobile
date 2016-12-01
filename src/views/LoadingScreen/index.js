import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import AppStyles from '../../styles';
import styles from './LoadingScreenStyleSheet';

const LoadingScreen = (props) => {
  const progress = props.progress;
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered, styles.background]}>
      <AnimatedCircularProgress
        size={200}
        width={3}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {
          () => (
            <Text style={styles.points}>
              { progress }
            </Text>
          )
        }
      </AnimatedCircularProgress>
    </View>
  );
};

LoadingScreen.propTypes = {
  progress: PropTypes.number,
};

export default LoadingScreen;
