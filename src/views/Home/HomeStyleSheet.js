import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // ------------------ COMMON ------------------

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
  intro: {
    fontFamily: 'Lato-Light',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
  intro2: {
    marginTop: 30,
    lineHeight: 40,
    color: '#5a94be',
  },
  intro3: {
    lineHeight: 40,
    color: '#5a94be',
  },
  footer: {
    alignSelf: 'center',
  },

  // ------------------ ANDROID ------------------

  topAndroidPortrait: {
    paddingTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomAndroidPortrait: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerAndroidPortrait: {
    justifyContent: 'center',
  },
  topAndroidLandscape: {
    // flex: 3,
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  bottomAndroidLandscape: {
    // flex: 3,
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  footerAndroidLandscape: {

  },

  // ------------------ IOS ------------------

  topIOSPortrait: {
    // paddingTop: 100,
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bottomIOSPortrait: {
    // marginTop: 50,
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerIOSPortrait: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  topIOSLandscape: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIOSLandscape: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerIOSLandscape: {

  },
});
