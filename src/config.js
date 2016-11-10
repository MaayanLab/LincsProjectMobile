/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import Dimensions from 'Dimensions';
const window = Dimensions.get('window');

/* Setup ==================================================================== */
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

  baseFont: 'Avenir',
  baseFontSize: 14,

  primaryColor: '#323232',
  secondaryColor: '#FFE229',
  textColor: '#555',
  borderColor: '#E7E7E7',
}
