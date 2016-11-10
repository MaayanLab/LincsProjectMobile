import { StyleSheet } from 'react-native';
import AppConfig from '../../config';

export default StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: '#111111',
    paddingTop: AppConfig.statusBarHeight,
    borderRightWidth: 0.5,
    borderRightColor: '#111111',
  },
  menuHead: {
    height: 40,
    backgroundColor: AppConfig.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#111111',
    paddingLeft: 20,
  },
  menuHeadLogo: {
    height: 25,
    width: 30,
  },
  menuHeadText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#EEE',
  },
  main: {
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: '#111111',
  },
  centers: {
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
  menuDividerText: {
    marginLeft: 10,
    color: '#EEE',
  },
  menuItemTouch: {
    height: 40,
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
