import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
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
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  intro: {
    fontFamily: 'Lato-Light',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
  },
  intro2: {
    marginTop: 30,
    color: '#5a94be',
  },
  intro3: {
    color: '#5a94be',
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
  },
});
