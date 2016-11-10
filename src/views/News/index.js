import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import isEqual from 'lodash/isEqual';

import NewsItem from '../../components/NewsItem';
import AppStyles from '../../styles';

// seed data for testing purposes.
import { news } from '../../seed';

export default class News extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    this.state = {
      dataSource: ds.cloneWithRows(news),
    };
  }

  // _navigate(name, type = 'Normal') {
  //   this.props.navigator.push({
  //     component: Home,
  //     passProps: {
  //       name,
  //     },
  //     type,
  //   });
  // }

  render() {
    return (
      <View style={[AppStyles.container]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <NewsItem story={rowData} />}
        />
      </View>
    );
  }
}
