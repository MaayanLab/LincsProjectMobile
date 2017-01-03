import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import isEqual from 'lodash/isEqual';

import ToolItem from '../../components/ToolItem';
import AppStyles from '../../styles';
import styles from './ToolsStyleSheet';

const mapStateToProps = state => ({
  tools: state.tools,
});

class Tools extends Component {
  static propTypes = {
    tools: PropTypes.object,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      sort: 'Popularity',
    };
  }

  sortByPopularity = tools => (
    tools.sort((t1, t2) => {
      const t1Clicks = t1.clicks;
      const t2Clicks = t2.clicks;
      if (t1Clicks < t2Clicks) {
        return 1;
      } else if (t1Clicks > t2Clicks) {
        return -1;
      }
      return 0;
    })
  )

  sortByName = tools => (
    tools.sort((t1, t2) => {
      const t1Name = t1.name;
      const t2Name = t2.name;
      if (t1Name > t2Name) {
        return 1;
      } else if (t1Name < t2Name) {
        return -1;
      }
      return 0;
    })
  )


  render = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    // Need to take care of error handling
    let tools = this.props.tools.tools;
    let actionButton;
    if (this.state.sort === 'Popularity') {
      tools = this.sortByPopularity(tools);
      actionButton = (
        <ActionButton.Item buttonColor="#1abc9c" title="Sort Alphabetically" onPress={() => { this.setState({ sort: 'Alphabetically' }); }}>
          <Icon name="rotate-right" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      );
    } else {
      tools = this.sortByName(tools);
      actionButton = (
        <ActionButton.Item buttonColor="#1abc9c" title="Sort By Popularity" onPress={() => { this.setState({ sort: 'Popularity' }); }}>
          <Icon name="rotate-right" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      );
    }
    const dataSource = ds.cloneWithRows(tools);
    const settingsIcon = this._renderSettingsIcon();
    return (
      <View style={AppStyles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <ToolItem tool={rowData} navigator={this.props.navigator} />}
        />
        <ActionButton icon={settingsIcon} spacing={1} offsetY={0} buttonColor="rgba(231,76,60,1)">
          { actionButton }
        </ActionButton>
      </View>
    );
  }

  _renderSettingsIcon = () => (
    <Icon name="settings" style={styles.actionButtonIcon} />
  );
}

export default connect(mapStateToProps, null)(Tools);
