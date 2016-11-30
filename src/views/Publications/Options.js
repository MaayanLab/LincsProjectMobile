import React, { Component, PropTypes } from 'react';
import { View, Text, Switch } from 'react-native';
import CheckBox from 'react-native-check-box';

import AppStyles from '../../styles';
import styles from './PublicationsStyleSheet';


export default class Options extends Component {
  static propTypes = {
    centerPub: PropTypes.bool,
    changeCenterPub: PropTypes.func,
    categoryOptions: PropTypes.object,
    changeCategoryOp: PropTypes.func,
  }
// ------------ Helper methods ------------
  categoryKeyToName = key => key
  .replace(/([A-Z])/g, ' $1')
  .replace(/^./, str => str.toUpperCase());

// ------------ Render methods ------------
  renderCategoryOptions = () => {
    const catOptions = this.props.categoryOptions;
    return Object.keys(catOptions).map(option => (
      <CheckBox
        key={option}
        style={{ flex: 1, padding: 10 }}
        onClick={() => this.props.changeCategoryOp(option)}
        isChecked={catOptions[option]}
        rightText={this.categoryKeyToName(option)}
      />)
    );
  }

  render() {
    const centerPub = this.props.centerPub;
    return (
      <View style={[AppStyles.containerCentered]}>
        <Text>LINCS-Funded</Text>
        <Switch
          onValueChange={() => this.props.changeCenterPub()}
          onTintColor="#0275D8"
          tintColor="#E74C3C"
          thumbTintColor="ghostwhite"
          value={centerPub}
        />
        <Text>Community</Text>
        { this.renderCategoryOptions() }
      </View>
    );
  }
}
