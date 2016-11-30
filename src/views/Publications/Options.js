import React, { Component, PropTypes } from 'react';
import { View, Text, Switch } from 'react-native';
import CheckBox from 'react-native-icon-checkbox';
import Button from 'apsl-react-native-button';

import AppStyles from '../../styles';
import styles from './PublicationsStyleSheet';

const catColors = {
  assayDevelopment: '#942e02',
  dataGeneration: '#7e8132',
  dataAnalysis: '#086968',
  dataIntegration: '#f39134',
  signatureGeneration: '#6a9ccd',
  analyticalMethodDevelopment: '#c9a627',
  softwareDevelopment: '#f16b6c',
  dataStandards: '#acac56',
  review: '#555',
};

export default class Options extends Component {
  static propTypes = {
    centerPub: PropTypes.bool,
    changeCenterPub: PropTypes.func,
    changeCategoryOp: PropTypes.func,
    resetOptions: PropTypes.func,
    categoryOptions: PropTypes.object,
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
        onPress={() => this.props.changeCategoryOp(option)}
        labelStyle={{ fontFamily: 'Lato-Light' }}
        checked={catOptions[option]}
        color={catColors[option]}
        size={20}
        label={this.categoryKeyToName(option)}
      />
    ));
  }

  render() {
    const centerPub = this.props.centerPub;
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text>LINCS-Funded</Text>
        <Switch
          onValueChange={() => this.props.changeCenterPub()}
          onTintColor="#0275D8"
          tintColor="#E74C3C"
          thumbTintColor="ghostwhite"
          value={centerPub}
        />
        <Text>Community</Text>

        <View style={styles.optionsContainer}>
          { this.renderCategoryOptions() }
        </View>

        <View style={styles.optionsButtons}>
          <Button style={styles.button} onPress={() => this.props.resetOptions()}>
            <Text style={[AppStyles.baseText, styles.white]}> Reset Options </Text>
          </Button>
        </View>
      </View>
    );
  }
}
