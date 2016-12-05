import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './PublicationItemStyleSheet';
import AppStyles, { colors } from '../../styles';
import WebBrowser from '../WebBrowser';

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

export default class PublicationItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    pub: PropTypes.object,
    cats: PropTypes.array,
    onCatClicked: PropTypes.func,
  }

  // ------------ Helper methods ------------
  navigate(pmId) {
    this.props.navigator.push({
      title: 'Publication',
      component: WebBrowser,
      passProps: { uri: `http://www.ncbi.nlm.nih.gov/pubmed/${pmId}` },
      index: 2,
    });
  }

  categoryKeyToName = key => key
  .replace(/([A-Z])/g, ' $1')
  .replace(/^./, str => str.toUpperCase());

// ------------ Render methods ------------
  render() {
    const { pub } = this.props;
    const authorsName = pub.authors.map(author => author.name).join(', ');
    const categories = this._renderCategoryButtons();

    const color = Object.values(colors)[Math.floor(Math.random() * 8)];

    return (
      <View>
        <View style={AppStyles.spacer_15} />
        <TouchableOpacity onPress={() => this.navigate(pub.pmId)}>
          <Text style={[styles.pubJournal, AppStyles.latoRegular, { color }]}>
            {pub.journalName}
          </Text>
          <Text style={[AppStyles.latoLight, styles.pubTitle]}>{pub.articleName}</Text>
          <View style={AppStyles.spacer_5} />
          <Text style={[AppStyles.latoLight, styles.pubAuthors]}>{authorsName}</Text>
          <View style={AppStyles.spacer_10} />
        </TouchableOpacity>

        <View style={[styles.pubCategoriesList]}>{categories}</View>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }

  _renderCategoryButtons = () => {
    const { pub } = this.props;
    const categories = [];
    this.props.cats.forEach((cat, idx) => {
      if (pub[cat]) {
        categories.push(
          <TouchableOpacity
            style={[styles.categoryItem, { backgroundColor: catColors[cat] }]}
            onPress={() => this.props.onCatClicked(cat)}
            key={idx}
          >
            <Text style={[styles.pubCategory, AppStyles.latoSemiBold]}>
              {this.categoryKeyToName(cat)}
            </Text>
          </TouchableOpacity>
        );
      }
    });
    return categories;
  }
}
