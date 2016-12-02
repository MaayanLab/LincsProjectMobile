import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from '../../styles';
import styles from './HomeStyleSheet';

export default class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    showSplashScreen: PropTypes.bool,
    placeholder: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    };
  }

  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Home,
      index: 2,
    });
  }

  render = () => {
    const text = this.props.placeholder || 'Welcome to the LINCS Project App';
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>
        {/* Need to add functionality below. */}
        <ActionButton autoInactive={false} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="New Task" onPress={() => console.log('notes tapped!')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#1abc9c" title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
