import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import AppStyles from '../../styles';

const mapStateToProps = state => ({
  dgb: state.DGB,
});

class DGBResult extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    dgb: PropTypes.object,
  }

  navigate(navbarTitle) {
    this.props.navigator.push({
      title: navbarTitle,
      component: WebBrowser,
      passProps: { uri: 'http://lincsproject.org' },
      index: 2,
    });
  }

  render = () => {
    if (Object.keys(this.props.dgb).length) {
      return (
        <View>
          <Text>{this.props.dgb.genes.id}</Text>
        </View>
      );
    }
    // return some spinner to indcate loading.
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <ScrollView contentContainerStyle={AppStyles.containerCentered}>
          <Text style={[AppStyles.baseText, AppStyles.h2]}>
            Success!
          </Text>
        </ScrollView>

        <View style={[AppStyles.spacer_10]} />
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(DGBResult);
