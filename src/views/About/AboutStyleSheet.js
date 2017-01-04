import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    height: 100,
  },
  logo: {
    height: 100,
    width: 400,
    position: 'absolute',
    left: 250,
  },
  titleContainer: {
    position: 'absolute',
    top: 10,
  },
  title: {
    position: 'relative',
    left: 300,
    top: 5,
    fontFamily: 'Times',
    backgroundColor: 'transparent',
    fontSize: 35,
    lineHeight: 35,
  },
  subtitle: {
    color: '#555',
    fontSize: 30,
    fontFamily: 'Lato-Light',
    fontWeight: '300',
  },
  nih: {
    color: '#3a5278',
  },
  lincs: {
    color: 'white',
  },
  intro: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#3ca2e0',
    borderColor: 'transparent',
  },
  white: {
    color: 'white',
  },
});
