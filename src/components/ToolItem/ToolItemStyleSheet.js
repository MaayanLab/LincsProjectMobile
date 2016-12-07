import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  smallFont: {
    fontSize: 11,
  },
  mediumFont: {
    fontSize: 12,
  },
  largeFont: {
    fontSize: 15,
  },
  title: {
    color: '#143a5e',
  },
  accordion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  accordionButtonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  accordionButtonIcon: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  button1: {
    color: '#6498a5',
  },
  button2: {
    color: '#ff664c',
  },
  info: {
    marginLeft: 20,
    flex: 3,
    flexDirection: 'column',
  },
  logoNameDesc: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  toolItem: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  categoryCol: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryTitle: {
    alignSelf: 'center',
  },
  categoryItemsContainer: {
    alignSelf: 'center',
  },
});
