import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatDate from '../../utils/formatDate';

import styles from './ToolItemStyleSheet';
import AppStyles from '../../styles';
import WebBrowser from '../WebBrowser';

const colorMap = {
  default: '#be5f67', // red
  'LINCS Webinar': '#c25b56',
  'Category 1': '#6498a5', // turquoise
  'Category 2': '#ff9028', // purple
  'Category 3': '#c45fff', // orange
  'Category 4': '#152d44', // dark blue
  'Category 5': '#ff5d9f', // pink
  'Category 6': '#68c3d5', // lightBlue
  // 'Category 7': '#ff664c', //bright Orange
};

export default class ToolItem extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    story: PropTypes.object,
  }

// ------------ Helper methods ------------
  navigate(uri) {
    this.props.navigator.push({
      title: 'Tools',
      component: WebBrowser,
      passProps: { uri },
      index: 2,
    });
  }

// ------------ Render methods ------------
  render = () => {
    const toolItem = this._renderToolItem();
    const dropDown = this._renderDropDown();
    return (
      <Accordion
        header={toolItem}
        content={dropDown}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }

  _renderNewsItem = () => {
    // const { } = this.props.story;
    const color = colorMap[category] || colorMap.default;

    return (
      <View style={[AppStyles.container, AppStyles.paddingHorizontal]}>
        <View style={AppStyles.spacer_15} />
        <Text style={[styles.mediumFont, AppStyles.latoRegular, { color }]}>
          "{category}"
        </Text>
        <Text style={[AppStyles.latoRegular, styles.largeFont, styles.title]}>{title}</Text>
        <View style={AppStyles.spacer_5} />
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          "{presenterName}"
        </Text>
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          "({presenterAffiliation})"
        </Text>
        <Text style={[AppStyles.latoSemiBold, styles.smallFont]}>
          "{formattedDate}"
        </Text>
        <View style={[AppStyles.hr, { marginTop: 15, marginBottom: 0 }]} />
      </View>
    );
  }

  _renderDropDown = () => {
    // const { presenterUrl, url } = this.props.story;
    return (
      <View
        style={[
          AppStyles.container,
          AppStyles.paddingHorizontalSml,
          AppStyles.paddingVerticalSml,
          styles.accordion,
        ]}
      >
        <Text style={[AppStyles.latoLight, styles.smallFont]}>
          Some description here
        </Text>
        <View style={styles.accordionButtonsContainer}>
          <TouchableOpacity style={styles.accordionButton}>
            <Icon name="rotate-left" style={[styles.accordionButtonIcon, styles.button1]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accordionButton}>
            <Icon name="rotate-left" style={[styles.accordionButtonIcon, styles.button2]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Format of a Tool Obj
// {
//   "id": 1,
//   "name": "Enrichr",
//   "description": "An intuitive web-based gene list enrichment analysis tool with 90 libraries",
//   "url": "http://amp.pharm.mssm.edu/Enrichr",
//   "iconUrl": "http://lincsproject.org/LINCS/files/tools_logos/enrichr.png",
//   "homeOrder": null,
//   "order": 80,
//   "transcriptData": 1,
//   "proteinData": 1,
//   "cellStateData": 1,
//   "morphologyData": 0,
//   "drugBindingData": 0,
//   "dataFormatting": 1,
//   "dataStorage": 1,
//   "dataVisualization": 1,
//   "dataAnalysis": 1,
//   "dataIntegration": 1,
//   "signatureGeneration": 1,
//   "networkAnalysis": 1,
//   "dataDocumentation": 0,
//   "api": 1,
//   "commandLine": 0,
//   "database": 1,
//   "ontology": 1,
//   "openSource": 1,
//   "searchEngine": 1,
//   "webBased": 1,
//   "scripting": 0,
//   "provenance": 0,
//   "documentation": 1,
//   "versioning": 0,
//   "clicks": 24,
//   "tutorialUrl": "https://www.youtube.com/watch?v=HfUZdNJ9a3A&index=1&list=PL0Bwuj8819U-uN4sIjTfmakWKJAvvMOL3",
//   "tutorialPreviewUrl": "http://lincsproject.org/LINCS/files/tutorial_thumbnails/enrichr.jpg",
//   "centers": [
//     {
//       "id": 1,
//       "name": "BD2K-LINCS DCIC",
//       "description": "The BD2K-LINCS Data Coordination and Integration Center is part of the Big Data to Knowledge (BD2K) NIH initiative, and it is the data coordination center for the NIH Common Fund's Library of Integrated Network-based Cellular Signatures (LINCS) program, which aims to characterize how a variety of human cells, tissues and the entire organism respond to perturbations by drugs and other molecular factors. This Center is co-funded by BD2K and the NIH Common Fund (NI­H grant number: U54HL127624).",
//       "logoUrl": "http://lincsproject.org/LINCS/files/centers_logos/DCIC.svg",
//       "website": "http://lincs-dcic.org/",
//       "createdAt": "2016-05-19T22:33:00.000Z",
//       "updatedAt": null
//     }
//   ]
// }
