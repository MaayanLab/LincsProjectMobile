import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import PublicationItem from '../../components/PublicationItem';
import AppStyles from '../../styles';

const mapStateToProps = state => ({
  publications: state.publications,
});

const initialCategories = {
  assayDevelopment: true,
  dataGeneration: true,
  dataAnalysis: true,
  dataIntegration: true,
  signatureGeneration: true,
  analyticalMethodDevelopment: true,
  softwareDevelopment: true,
  dataStandards: true,
  review: true,
};

export class Publications extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    publications: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      categories: initialCategories,
      sortOrder: 'descending',
      pubSource: 'centerPub',
    };
  }

  filterCategories = (p) => {
    const { categories } = this.state;
    const keys = Object.keys(categories);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (p[key] && categories[key]) {
        return true;
      }
    }
    return false;
  };

  filterSources = (p) => {
    const currStateSource = this.state.pubSource;
    const currPubSource = p.centerPub;
    if (
        currStateSource === 'centerPub' && !!currPubSource ||
        currStateSource === 'community' && !currPubSource) {
      return true;
    }
    return false;
  }

  sortPublications = (a, b) => {
    let result = a.yearPublished > b.yearPublished;
    if (a.yearPublished === b.yearPublished) {
      result = a.pmId > b.pmId;
    }
    if (this.state.sortOrder === 'descending') {
      result = a.yearPublished < b.yearPublished;
      if (a.yearPublished === b.yearPublished) {
        result = a.pmId < b.pmId;
      }
    }
    return result ? 1 : -1;
  }

  render() {
    let pubs = this.props.publications.pubs;
    pubs = pubs.sort(this.sortPublications)
               .filter(this.filterCategories)
               .filter(this.filterSources);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const dataSource = ds.cloneWithRows(pubs);

    return (
      <View style={[AppStyles.container]}>
        {/*  Should probably paginate or shorten the number of publications in the fetch */}
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <PublicationItem pub={rowData} navigator={this.props.navigator} />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(Publications);
