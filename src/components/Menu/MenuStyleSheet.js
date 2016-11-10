import { StyleSheet } from 'react-native';
import AppConfig from '../../config';

export default StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#111111',
  },
  menu: {
    flex: 1,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: '#111111',
    padding: 20,
    paddingTop: AppConfig.statusBarHeight,
  },
  menuItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5), 10),
    fontWeight: '500',
    marginTop: 10,
    flex: 1,
    color: '#EEE',
  },
});
