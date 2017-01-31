import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    height: 100,
  },
  logo: {
    height: 100,
    width: 400,
    position: 'absolute',
    left: 220,
  },
  titleContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 10,
    left: 200,
  },
  nihLincsContainer: {
    flexDirection: 'row',
  },
  title: {
    position: 'relative',
    left: 300,
    top: 5,
    fontFamily: 'Times',
    backgroundColor: 'transparent',
    fontSize: 35,
    lineHeight: 35,
    color: 'white',
  },
  nih: {
    // color: '#3a5278',
  },
  lincs: {
  },
  program: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontWeight: '900',
    position: 'absolute',
    top: 35,
    // left: 200,
  },
});
