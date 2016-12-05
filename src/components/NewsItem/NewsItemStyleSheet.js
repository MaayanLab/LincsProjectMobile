import { StyleSheet } from 'react-native';

import AppConfig from '../../config';

export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: AppConfig.white,
    paddingTop: 10,
    paddingLeft: 20,
  },
  leftPanel: {
    width: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightPanel: {
    borderBottomWidth: 1,
    borderColor: AppConfig.lightGray,
  },
  info: {
    flex: 10,
    flexDirection: 'column',
    paddingBottom: 20,
    paddingRight: 50,
  },
  category: {
    fontSize: 11,
    color: AppConfig.gray,
  },
  title: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  presenterInfo: {
    fontFamily: AppConfig.baseFont,
    fontSize: 11,
    lineHeight: 17,
  },
  link: {
    marginTop: 5,
    fontSize: 11,
  },
  gray: {
    color: AppConfig.gray,
  }
});
