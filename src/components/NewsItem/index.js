import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatDate from '../../utils/formatDate';

import styles from './NewsItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colorMap = {
  default: '#be5f67', // red
  'LINCS Webinar': '#c25b56',
  'Category 1': '#6498a5', // turquoise
  'Category 2': '#ff9028', // purple
  'Category 3': '#c45fff', // orange
  'Category 4': '#152d44', // dark blue
  'Category 5': '#ff5d9f', // pink
  'Category 6': '#68c3d5', // lightBlue
  // 'Category 7': '#ff664c', //bright Orange
};

export default class NewsItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    story: PropTypes.object,
  }

// ------------ Helper methods ------------
  navigate(uri) {
    this.props.navigator.push({
      title: 'News',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

// ------------ Render methods ------------
  render = () => {
    const newsItem = this._renderNewsItem();
    const dropDown = this._renderDropDown();
    return (
      <Accordion
        header={newsItem}
        content={dropDown}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }

  _renderNewsItem = () => {
    const {
      category,
      title,
      presenterName,
      presenterAffiliation,
      presenterUrl,
      url,
      date,
    } = this.props.story;
    const color = colorMap[category] || colorMap.default;
    const formattedDate = formatDate(date);

    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <View style={AppStyles.spacer_15} />
        <Text style={[styles.mediumFont, AppStyles.latoRegular, { color }]}>
          {category}
        </Text>
        <Text style={[AppStyles.latoRegular, styles.largeFont, styles.title]}>{title}</Text>
        <View style={AppStyles.spacer_5} />
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          {presenterName}
        </Text>
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          ({presenterAffiliation})
        </Text>
        <Text style={[AppStyles.latoSemiBold, styles.smallFont]}>
          {formattedDate}
        </Text>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }

  _renderDropDown = () => {
    // const { presenterUrl, url } = this.props.story;
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
