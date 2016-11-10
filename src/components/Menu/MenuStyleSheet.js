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
    paddingTop: AppConfig.statusBarHeight,
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
    color: AppConfig.gray,
  },
  menuItem_text: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    // lineHeight: parseInt(18 + (18 * 0.5), 10),
    fontWeight: '300',
    color: '#EEE',
  },
});
