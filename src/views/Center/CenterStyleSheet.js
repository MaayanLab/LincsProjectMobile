import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  nih: {
    color: '#3a5278',
  },
  lincs: {
    color: 'white',
  },
  centerLogo: {
    marginTop: 20,
    marginBottom: 20,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  body: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
  },
  containerCentered: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3ca2e0',
    borderColor: 'transparent',
  },
  white: {
    color: 'white',
  },
});
