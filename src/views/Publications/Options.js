import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
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

const pubSourceMap = {
  'LINCS-Funded': true,
  'Community': false,
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
  renderPubSourceOptions = () => (
    Object.keys(pubSourceMap).map((source) => {
      let centerSource = false;
      if ((source === 'LINCS-Funded' && this.props.centerPub) || (source === 'Community' && !this.props.centerPub)) {
        centerSource = true;
      }
      return (
        <CheckBox
          key={source}
          style={styles.optionRadio}
          onPress={() => this.props.changeCenterPub(pubSourceMap[source])}
          labelStyle={{ fontFamily: 'Lato-Regular' }}
          checked={centerSource}
          size={20}
          label={source}
          uncheckedIconName="radio-button-unchecked"
          checkedIconName="radio-button-checked"
        />
      );
    })
  )

  renderCategoryOptions = () => {
    const catOptions = this.props.categoryOptions;
    return Object.keys(catOptions).map(option => (
      <CheckBox
        key={option}
        style={styles.optionCheckbox}
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
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.paddingVertical]}>
        <View style={styles.optionsContainer}>
          { this.renderPubSourceOptions() }
          <View style={AppStyles.spacer_10} />
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
