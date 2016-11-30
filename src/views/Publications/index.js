import React, { Component, PropTypes } from 'react';
import { View, Text, ListView, Switch, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import PublicationItem from '../../components/PublicationItem';
import AppStyles from '../../styles';
import styles from './PublicationsStyleSheet';

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
      tab: 'List',
      categories: initialCategories,
      sortOrder: 'descending',
      centerPub: true,
    };
  }

  handleCatClicked = (key) => {
    const { categories } = this.state;
    const newCategories = {};
    Object.keys(categories).forEach((k) => {
      if (k === key) {
        newCategories[k] = true;
      } else {
        newCategories[k] = false;
      }
    });
    this.setState({ categories: newCategories });
  }

  filterCategories = (p) => {
    const { categories } = this.state;
    const keys = Object.keys(categories);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (p[key] && categories[key]) {
        return true;
      }
    }
    return false;
  };

  filterSources = (p) => {
    const currStateSource = this.state.centerPub;
    const currPubSource = p.centerPub;
    if (
        (currStateSource && !!currPubSource) ||
        (!currStateSource && !currPubSource)) {
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

  changeTab = (tab) => {
    this.setState({ tab });
  }

  renderPubs = () => {
    let pubs = this.props.publications.pubs;
    pubs = pubs.sort(this.sortPublications)
               .filter(this.filterCategories)
               .filter(this.filterSources);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const dataSource = ds.cloneWithRows(pubs);
    const cats = Object.keys(this.state.categories);
    {/*  Should probably paginate or shorten the number of publications in the fetch */}
    return (
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData, sectionId, rowId) => (
            <PublicationItem
              idx={rowId}
              cats={cats}
              pub={rowData}
              navigator={this.props.navigator}
              onCatClicked={this.handleCatClicked}
            />
          )
        }
      />
    );
  }

  renderOptions = () => {
    const pubSource = this.state.centerPub;
    // switch for community/lincs-funded publication
    return (
      <View style={[AppStyles.containerCentered]}>
        <Text>LINCS-Funded</Text>
        <Switch
          onValueChange={() => this.setState({ centerPub: !pubSource })}
          onTintColor="#0275D8"
          tintColor="#E74C3C"
          thumbTintColor="ghostwhite"
          value={pubSource}
        />
        <Text>Community</Text>
      </View>
    );
  }

  render() {
    const tabs = ['List', 'Options'].map((tab) => {
      const style = [AppStyles.baseText, styles.tabTitle];
      if (this.state.tab === tab) { style.push(styles.tabActive); }
      return (
        <TouchableOpacity key={tab} style={styles.pubTabs} onPress={() => this.changeTab(tab)}>
          <Text style={style}>{tab}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={AppStyles.container}>
        {/* Menu for filtering/sorting publication */}
        <View style={styles.pubTabsContainer}>{tabs}</View>
        <View>
          { this.state.tab === 'Options' ? this.renderOptions() : this.renderPubs() }
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(Publications);
