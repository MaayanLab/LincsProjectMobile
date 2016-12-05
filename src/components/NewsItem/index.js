import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './NewsItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colorMap = {
  'LINCS Webinar': '#c45fff', // purple
  'Category 1': '#6498a5', // turquoise
  'Category 2': '#ff664c', // brightOrange
  'Category 3': '#ff9028', // orange
  'Category 4': '#fc629e', // pink
  'Category 5': '#ff5d9f', // blue
  'Category 6': '#68c3d5', // lightBlue
  'Category 7': '#be5f67', // red
};

export default class NewsItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    story: PropTypes.object,
  }

  navigate(uri) {
    this.props.navigator.push({
      title: 'News',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

  calculateColor = (categoryName) => {
    if (colorMap[categoryName]) {
      return colorMap[categoryName];
    }
    return colorMap.default;
  }

  render() {
    const { story } = this.props;
    const { category, title, presenterName, presenterAffiliation, presenterUrl, url, date } = story;
    const color = this.calculateColor(category);

    return (
      <View>
        <View style={AppStyles.spacer_15} />
        <TouchableOpacity onPress={() => this.navigate(url)}>
          <View style={AppStyles.paddingHorizontal}>
            <Text style={[styles.pubJournal, AppStyles.latoRegular, { color }]}>
              {category}
            </Text>
            <Text style={[AppStyles.latoLight, styles.pubTitle]}>{title}</Text>
            <View style={AppStyles.spacer_5} />
            <Text style={[AppStyles.latoLight, styles.pubAuthors]}>{presenterName}</Text>
            <View style={AppStyles.spacer_10} />
          </View>
        </TouchableOpacity>

        <Text style={[styles.pubCategoriesList]}>{presenterAffiliation}</Text>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }
}
