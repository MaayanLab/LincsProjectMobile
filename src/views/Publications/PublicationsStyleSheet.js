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
  optionsContainer: {
    alignItems: 'flex-start',
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#324667',
    borderColor: 'transparent',
  },
  white: {
    color: 'white',
  },
  optionRadio: {
    paddingVertical: 5,
  },
  optionCheckbox: {
    paddingVertical: 5,
  },
});
