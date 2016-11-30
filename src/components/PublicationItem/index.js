import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './PublicationItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const idxColors = {
  purple: '#c45fff',
  turquoise: '#6498a5',
  brightOrange: '#ff664c',
  orange: '#ff9028',
  pink: '#fc629e',
  blue: '#ff5d9f',
  lightBlue: '#68c3d5',
  red: '#be5f67',
};

// const idxColors = ['#c45fff', '#6498a5', '#ff664c', '#ff9028', '#fc629e',
// '#ff5d9f', '#68c3d5', '#be5f67'];

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
    idx: PropTypes.string,
    cats: PropTypes.array,
    onCatClicked: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      color: Object.values(idxColors)[Math.floor(Math.random() * 8)],
    };
  }

  navigate(pmId) {
    this.props.navigator.push({
      title: 'Publication',
      component: WebBrowser,
      passProps: { uri: `http://www.ncbi.nlm.nih.gov/pubmed/${pmId}` },
      index: 2,
    });
  }

  generateCategoryButtons = () => {
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

  categoryKeyToName = key => key
  .replace(/([A-Z])/g, ' $1')
  .replace(/^./, str => str.toUpperCase());

  render() {
    const { pub } = this.props;
    const authorsName = pub.authors.map(author => author.name).join(', ');
    const idx = parseInt(this.props.idx, 10) + 1;
    const categories = this.generateCategoryButtons();

    const color = this.state.color;

    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <View style={AppStyles.spacer_15} />
        <TouchableOpacity
          onPress={() => this.navigate(pub.pmId)}
        >
          <View style={styles.IdxAndJournal}>
            <View style={[styles.encircle, { borderColor: color }]}>
              <Text style={[AppStyles.latoLight, AppStyles.latoRegular, { color }]}>{idx}</Text>
            </View>
            <Text style={[styles.pubJournal, AppStyles.latoRegular, { color }]}>
              {pub.journalName}
            </Text>
          </View>
          <View style={AppStyles.paddingHorizontal}>
            <Text style={[AppStyles.latoLight, styles.pubTitle]}>{pub.articleName}</Text>
            <View style={AppStyles.spacer_5} />
            <Text style={[AppStyles.latoLight, styles.pubAuthors]}>{authorsName}</Text>
            <View style={AppStyles.spacer_10} />
          </View>
        </TouchableOpacity>
        <View style={[styles.pubCategoriesList]}>{categories}</View>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }
}
