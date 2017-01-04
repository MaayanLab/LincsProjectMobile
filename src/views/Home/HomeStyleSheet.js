import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
    marginTop: 60,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'stretch',
  },
  half: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  intro: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
  },
  intro2: {
    color: '#5a94be',
  },
  intro3: {
    color: '#5a94be',
  },
  footer: {
    alignSelf: 'center',
  },
});
