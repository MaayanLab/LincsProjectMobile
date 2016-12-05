import React, { Component, PropTypes } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import isEqual from 'lodash/isEqual';

import Options from './Options';
import PublicationItem from '../../components/PublicationItem';

import AppStyles from '../../styles';
import styles from './PublicationsStyleSheet';

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

const mapStateToProps = state => ({
  publications: state.publications,
});
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });

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

// ------------ Helper methods ------------
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

// ------------ Event handlers ------------
  changeTab = (tab) => {
    this.setState({ tab });
  }

  handleCenterPubChange = () => {
    const centerPub = this.state.centerPub;
    setTimeout(() => this.setState({ centerPub: !centerPub }), 150);
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

  handleCatChange = (cat) => {
    const categories = Object.assign({}, this.state.categories);
    categories[cat] = !categories[cat];
    this.setState({ categories });
  }

  resetOptions = () => {
    this.setState({ centerPub: true, categories: initialCategories });
  }

// ------------  Rendering methods ------------
  renderPubs = () => {
    let pubs = this.props.publications.pubs;
    pubs = pubs.sort(this.sortPublications)
               .filter(this.filterCategories)
               .filter(this.filterSources);
    if (pubs.length === 0) {
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]}>
          <Text> No Publications Found </Text>
        </View>
      );
    }
    const dataSource = ds.cloneWithRows(pubs);
    const cats = Object.keys(this.state.categories);

    // Should probably paginate or shorten the number of publications in the fetch
    return (
      <ListView
        style={[AppStyles.container, AppStyles.paddingHorizontal]}
        enableEmptySections
        dataSource={dataSource}
        renderRow={
          rowData => (
            <PublicationItem
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

  renderOptions = () => (
    <Options
      centerPub={this.state.centerPub}
      categoryOptions={this.state.categories}
      changeCenterPub={this.handleCenterPubChange}
      changeCategoryOp={this.handleCatChange}
      resetOptions={this.resetOptions}
    />
  );

  render() {
    // const tabs = ['List', 'Options'].map((tab) => {
    //   const style = [AppStyles.baseText, styles.tabTitle];
    //   if (this.state.tab === tab) { style.push(styles.tabActive); }
    //   return (
    //     <TouchableOpacity key={tab} style={styles.pubTabs} onPress={() => this.changeTab(tab)}>
    //       <Text style={style}>{tab}</Text>
    //     </TouchableOpacity>
    //   );
    // });
    const tabView = this.state.tab === 'Options' ? this.renderOptions() : this.renderPubs();
    const centerPubToggleText = this.state.centerPub ? 'Show Community Publications' : 'Show LINCS-Funded Publications';
    const settingsIcon = (<Icon name="settings" style={styles.actionButtonIcon} />);

    return (
      <View style={AppStyles.container}>
        {/*<View style={styles.pubTabsContainer}>{tabs}</View>*/}
        {tabView}
        <ActionButton icon={settingsIcon} spacing={1} offsetY={0} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title={centerPubToggleText} onPress={() => this.handleCenterPubChange()}>
            <Icon name="rotate-right" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Reset Filters" onPress={() => this.resetOptions()}>
            <Icon name="check" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(Publications);
