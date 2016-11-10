import { StyleSheet } from 'react-native';
import AppConfig from '../../config';

export default StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#111111',
    paddingTop: AppConfig.statusBarHeight,
  },
  main: {
    flex: 1,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: '#111111',
  },
  centers: {
    flex: 1,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: '#111111',
  },
  menuDivider: {
    height: 25,
    backgroundColor: AppConfig.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuDiverText: {
    marginLeft: 10,
    color: '#EEE',
  },
  menuItemTouch: {
    height: 30,
  },
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: AppConfig.lightGray,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    fontSize: 15,
    color: '#D5D5D5',
  },
  menuItem_text: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '300',
    color: '#EEE',
  },
});
