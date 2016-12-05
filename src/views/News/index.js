import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import isEqual from 'lodash/isEqual';

import NewsItem from '../../components/NewsItem';
import AppStyles from '../../styles';
import styles from './NewsStyleSheet';

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
    // Need to take care of error handling
    const news = this.props.news.news;
    const dataSource = ds.cloneWithRows(news)
    const settingsIcon = (<Icon name="settings" style={styles.actionButtonIcon} />);
    return (
      <View style={[AppStyles.container]}>
        <ListView
          style={AppStyles.paddingHorizontal}
          dataSource={dataSource}
          renderRow={rowData => <NewsItem story={rowData} navigator={this.props.navigator} />}
        />
        <ActionButton icon={settingsIcon} spacing={1} offsetY={0} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title="Most Recent" onPress={() => this.handleCenterPubChange()}>
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

export default connect(mapStateToProps, null)(News);
