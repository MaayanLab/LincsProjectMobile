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

  render() {
    const { pub } = this.props;
    const authorsName = pub.authors.map(author => author.name).join(' ');
    const idx = parseInt(this.props.idx, 10) + 1;

    const color = this.state.color;

    return (
      <TouchableOpacity
        style={[AppStyles.container, AppStyles.paddingHorizontal]}
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
        </View>

        <View style={[AppStyles.hr, styles.margin_10]} />
      </TouchableOpacity>
    );
  }
}
