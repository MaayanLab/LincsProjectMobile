import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import PublicationItem from '../../components/PublicationItem';
import AppStyles from '../../styles';
import { loadPublications } from '../../actions/publications';

const mapStateToProps = state => ({
  publications: state.publications,
});

export class Publications extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    loadPublications: PropTypes.func,
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    this.state = {
      dataSource: ds.cloneWithRows(props.publications.pubs),
    };
  }

  componentWillMount() {
    this.props.loadPublications();
  }

  render() {
    return (
      <View style={[AppStyles.container]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <PublicationItem pub={rowData} navigator={this.props.navigator} />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, {
  loadPublications,
})(Publications);
