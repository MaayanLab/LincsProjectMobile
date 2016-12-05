import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import Accordion from 'react-native-accordion';

import formatDate from '../../utils/formatDate';

import styles from './NewsItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colorMap = {
  default: '#be5f67', // red
  'LINCS Webinar': '#c45fff', // purple
  'Category 1': '#6498a5', // turquoise
  'Category 2': '#ff664c', // brightOrange
  'Category 3': '#ff9028', // orange
  'Category 4': '#fc629e', // pink
  'Category 5': '#ff5d9f', // blue
  'Category 6': '#68c3d5', // lightBlue
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

  // calculateDate = (sqlDate) => {
  //   const t = sqlDate.split(/[- :]/);
  //   return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])).toString();
  // }

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
        <Text style={[styles.pubJournal, AppStyles.latoRegular, { color }]}>
          {category}
        </Text>
        <Text style={[AppStyles.latoRegular, styles.pubTitle]}>{title}</Text>
        <View style={AppStyles.spacer_5} />
        <Text style={[AppStyles.latoLight, styles.pubAuthors]}>
          {presenterName}
        </Text>
        <Text style={[AppStyles.latoLight, styles.pubAuthors]}>
          ({presenterAffiliation})
        </Text>
        <Text style={[AppStyles.latoSemiBold, styles.pubAuthors]}>
          {formattedDate}
        </Text>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }

  _renderDropDown = () => {
    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal, AppStyles.containerCentered]}>
        <Text>More details</Text>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
        <View style={AppStyles.spacer_5} />
      </View>
    );
  }
}
