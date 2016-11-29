import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './PublicationItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colors = {
  purple: '#c45fff',
  turquoise: '#6498a5',
  brightOrange: '#ff664c',
  orange: '#ff9028',
  pink: '#fc629e',
  blue: '#ff5d9f',
  lightBlue: '#68c3d5',
  red: '#be5f67',
};

export default class PublicationItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    pub: PropTypes.object,
    idx: PropTypes.string,
    cats: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      color: Object.values(colors)[Math.floor(Math.random() * 8)],
    }
  }

  navigate(pmId) {
    this.props.navigator.push({
      title: 'Publication',
      component: WebBrowser,
      passProps: { uri: `http://www.ncbi.nlm.nih.gov/pubmed/${pmId}` },
      index: 2,
    });
  }

  generateRandomColor = () => {
    return Object.values(colors)[Math.floor(Math.random() * 8)];
  }

  generateCategoryButtons = () => {
    const { pub } = this.props;
    const categories = [];
    this.props.cats.forEach((cat, idx) => {
      if (pub[cat]) {
        categories.push(
          <View style={[styles.categoryItem, { backgroundColor: this.generateRandomColor() }]} key={idx}>
            <Text style={[styles.lato, styles.pubCategory, { color: 'white' }]}>{this.categoryKeyToName(cat)}</Text>
          </View>
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
        <TouchableOpacity
          onPress={() => this.navigate(pub.pmId)}
        >
          <View style={styles.IdxAndJournal}>
            <View style={[styles.encircle, { borderColor: color }]}>
              <Text style={[styles.lato, styles.pubIdx, { color }]}>{idx}</Text>
            </View>
            <Text style={[styles.pubJournal, { color }]}>{pub.journalName}</Text>
          </View>
          <View style={AppStyles.paddingHorizontal}>
            <Text style={[styles.lato, styles.pubTitle]}>{pub.articleName}</Text>
            <View style={AppStyles.spacer_5} />
            <Text style={[styles.lato, styles.pubAuthors]}>{authorsName}</Text>
            <View style={AppStyles.spacer_10} />
          </View>
        </TouchableOpacity>
        <View style={[styles.pubCategoriesList]}>{categories}</View>
        <View style={[AppStyles.hr, styles.margin_10]} />
      </View>
    );
  }
}
