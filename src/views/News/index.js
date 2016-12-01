import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import NewsItem from '../../components/NewsItem';
import AppStyles from '../../styles';

// seed data for testing purposes.
import { news } from '../../seed';

const mapStateToProps = state => ({
  news: state.news,
});
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });

class News extends Component {
  static propTypes = {
    news: PropTypes.object,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    // Uncomment this when news pipeline is ready. Need to take care of error handling
    // const news = this.props.news;
    const dataSource = ds.cloneWithRows(news)
    return (
      <View style={[AppStyles.container]}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <NewsItem story={rowData} navigator={this.props.navigator} />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(News);
