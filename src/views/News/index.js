import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import isEqual from 'lodash/isEqual';

import NewsStyleSheet from './NewsStyleSheet.js';
import { news } from '../../seed';

const styles = StyleSheet.create(NewsStyleSheet);
export default class News extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => !isEqual(r1, r2)});
    this.state = {
      dataSource: ds.cloneWithRows(news)
    }
  }
  
  _navigate(name, type='Normal') {
    this.props.navigator.push({
      component: Home,
      passProps: {
        name: name
      },
      type: type
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />
      </View>
    );
  }
};
