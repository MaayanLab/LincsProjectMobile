import React, { Component, PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../static/tools_logo/ImageRail_image_crop.jpg';

import styles from './ToolItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colorMap = {
  default: '#be5f67', // red
  'LINCS Webinar': '#c25b56',
  // 'Category 1': '#6498a5', // turquoise
  // 'Category 2': '#ff9028', // purple
  // 'Category 3': '#c45fff', // orange
  // 'Category 4': '#152d44', // dark blue
  // 'Category 5': '#ff5d9f', // pink
  // 'Category 6': '#68c3d5', // lightBlue
  // 'Category 7': '#ff664c', //bright Orange
};

export default class ToolItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    tool: PropTypes.object,
  }

// ------------ Helper methods ------------
  navigate(uri) {
    this.props.navigator.push({
      title: 'Tools',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

// ------------ Render methods ------------
  render = () => {
    const toolItem = this._renderToolItem();
    const dropDown = this._renderDropDown();
    return (
      <Accordion
        header={toolItem}
        content={dropDown}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }

  _renderToolItem = () => {
    const { name, description, centers } = this.props.tool;
    const centersNames = centers.map(center => center.name).join(', ');
    const color = colorMap.default;

    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, styles.toolItem]}>
        <View style={AppStyles.spacer_15} />

        <View style={styles.logoNameDesc}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.info}>
            <Text style={[AppStyles.latoRegular, styles.largeFont, styles.title]}>
              {name}
            </Text>
            <Text style={[styles.mediumFont, AppStyles.latoLight, { color }]}>
              {centersNames}
            </Text>
            <View style={AppStyles.spacer_5} />
            <Text style={[AppStyles.latoLight, styles.smallFont]}>
              {description}
            </Text>
          </View>
        </View>

        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }

  _renderDropDown = () => {
    // const { presenterUrl, url } = this.props.tool;
    return (
      <View
        style={[
          AppStyles.container,
          AppStyles.paddingHorizontalSml,
          AppStyles.paddingVerticalSml,
          styles.accordion,
        ]}
      >
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          Some description here
        </Text>
        <View style={styles.accordionButtonsContainer}>
          <TouchableOpacity style={styles.accordionButton}>
            <Icon name="rotate-left" style={[styles.accordionButtonIcon, styles.button1]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accordionButton}>
            <Icon name="rotate-left" style={[styles.accordionButtonIcon, styles.button2]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
