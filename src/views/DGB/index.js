import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';
import Result from './result';
import { submitDGB } from '../../actions/DGB';

import AppStyles from '../../styles';
import styles from './DGBStyleSheet';

export class DGB extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    submitDGB: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      expression: '',
      dataset: '',
    };
  }

  navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: Result,
      index: 2,
    });
  }

  presubmitDGB = () => {
    this.props.submitDGB(this.state);
    this.navigate();
  }

  render = () => {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <Text>Symbol</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={symbol => this.setState({ symbol })}
          value={this.state.symbol}
        />

        <Text>Expression</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={expression => this.setState({ expression })}
          value={this.state.expression}
        />

        <Text>Dataset</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={dataset => this.setState({ dataset })}
          value={this.state.dataset}
        />

      <Button style={[styles.button]} onPress={() => this.presubmitDGB()}>
          <Text style={[AppStyles.baseText, styles.white]}> Submit </Text>
        </Button>
      </View>
    )
  }
}

export default connect(null, { submitDGB })(DGB);
