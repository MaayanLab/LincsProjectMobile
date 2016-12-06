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
  tools: state.news,
});
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });

class Tools extends Component {
  static propTypes = {
    tools: PropTypes.object,
    navigator: PropTypes.object.isRequired,
  }

  render = () => {
    // Need to take care of error handling
    const tools = this.props.tools.tools;
    const dataSource = ds.cloneWithRows(tools)
    const settingsIcon = this._renderSettingsIcon();
    return (
      <View style={[AppStyles.container]}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <ToolItem story={rowData} navigator={this.props.navigator} />}
        />
        <ActionButton icon={settingsIcon} spacing={1} offsetY={0} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title="Most Recent" onPress={() => console.log("Hello")}>
            <Icon name="rotate-right" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Reset Filters" onPress={() => console.log("Hello")}>
            <Icon name="check" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

  _renderSettingsIcon = () => (
    <Icon name="settings" style={styles.actionButtonIcon} />
  );
}

export default connect(mapStateToProps, null)(Tools);
