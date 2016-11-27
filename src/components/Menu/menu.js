import Unavailable from '../../views/Unavailable';
// import WebBrowser from '../WebBrowser';
import About from '../../views/About';
import News from '../../views/News';

import dcicMenuLogo from '../../static/centers_menu_logo/dcic.png';
import Dcic from '../../views/Center/DCIC';

import dtoxMenuLogo from '../../static/centers_menu_logo/dtox.png';
import Dtoxs from '../../views/Center/DToxS';

import hmsLincsMenuLogo from '../../static/centers_menu_logo/hms_lincs.png';
import Hms from '../../views/Center/HMS';

import neurolincsMenuLogo from '../../static/centers_menu_logo/neurolincs.png';
import NeuroLINCS from '../../views/Center/NeuroLINCS';

import mepLincsMenuLogo from '../../static/centers_menu_logo/mep_lincs.png';
import Mep from '../../views/Center/MEP';

import pccseMenuLogo from '../../static/centers_menu_logo/pccse.png';
import Pccse from '../../views/Center/PCCSE';

import cmapMenuLogo from '../../static/centers_menu_logo/cmap.png';
import Broad from '../../views/Center/Broad';


export default {
  main: [
    // { title: 'Applications', icon: 'wrench', component: Unavailable },
    { title: 'Community', icon: 'users', component: Unavailable },
    { title: 'Data', icon: 'bar-chart-o', component: Unavailable },
    { title: 'Publications', icon: 'book', component: Unavailable },
    { title: 'News', icon: 'newspaper-o', component: News },
    { title: 'About', icon: 'info-circle', component: About },
  ],
  centers: [
    // { title: 'Test',
    //   centerLogo: dcicMenuLogo,
    //   component: WebBrowser,
    //   props: { passProps: { uri: 'https://www.yahoo.com' } },
    // },
    { title: 'DCIC',
      centerLogo: dcicMenuLogo,
      component: Dcic,
    },
    { title: 'DToxS',
      centerLogo: dtoxMenuLogo,
      component: Dtoxs,
    },
    { title: 'HMS-LINCS',
      centerLogo: hmsLincsMenuLogo,
      component: Hms,
    },
    { title: 'NeuroLINCS',
      centerLogo: neurolincsMenuLogo,
      component: NeuroLINCS,
    },
    { title: 'MEP-LINCS',
      centerLogo: mepLincsMenuLogo,
      component: Mep,
    },
    { title: 'PCCSE',
      centerLogo: pccseMenuLogo,
      component: Pccse,
    },
    { title: 'Center for Transcriptomics',
      centerLogo: cmapMenuLogo,
      component: Broad,
    },
  ],
  settings: [
    { title: 'Settings', icon: 'cog', component: Unavailable },
  ],
};
