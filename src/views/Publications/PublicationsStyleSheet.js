import { StyleSheet } from 'react-native';
import AppConfig from '../../config';

export default StyleSheet.create({
  pubTabsContainer: {
    height: 40,
    backgroundColor: AppConfig.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  pubTabs: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabTitle: {
    flex: 1,
    color: 'gray',
  },
  tabActive: {
    color: 'white',
  },
});
