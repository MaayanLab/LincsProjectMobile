import Dimensions from 'Dimensions';
const window = Dimensions.get('window');

exports.title = 'GlobalConfig';

export default {
  appName: 'LINCS',
  windowHeight: window.height,
  windowWidth: window.width,

  windowWidthHalf: window.width * 0.5,
  windowWidthYhird: window.width * 0.333,
  windowWidthYwoThirds: window.width * 0.666,
  windowWidthQuarter: window.width * 0.25,
  windowWidthThreeQuarters: window.width * 0.75,

  navbarHeight: 64,
  statusBarHeight: 22,

  // Google Analytics - uses a 'dev' account while we're testing
  // gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',

  baseFont: 'Lato-Light',
  baseFontSize: 14,

  primaryColor: '#323232',
  secondaryColor: '#FFE229',
  textColor: '#555',
  borderColor: '#E7E7E7',

  gray: '#8e8e8e',
  lightGray: '#323232',
  white: '#FFFFFF',
};
