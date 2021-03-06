import Unavailable from '../../views/Unavailable';
import About from '../../views/About';
import Tools from '../../views/Tools';
import Publications from '../../views/Publications';
import News from '../../views/News';
import DGB from '../../views/DGB';

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
    { title: 'About', icon: 'info-circle', component: About },
    { title: 'Tools', icon: 'wrench', component: Tools },
    { title: 'Publications', icon: 'book', component: Publications },
    // { title: 'News', icon: 'newspaper-o', component: News },
    // { title: 'Community', icon: 'users', component: Unavailable },
    // { title: 'Data', icon: 'bar-chart-o', component: Unavailable },
  ],
  apps: [
    { title: 'Dr. Gene Badger', icon: 'info-circle', component: DGB },
  ],
  centers: [
    // { title: 'Example',
    //   centerLogo: dcicMenuLogo,
    //   component: WebBrowser,
    //   props: { passProps: { uri: 'https://www.yahoo.com' } },
    // },
    { title: 'BD2K-LINCS DCIC',
      centerLogo: dcicMenuLogo,
      component: Dcic,
    },
    { title: 'DToxS',
      centerLogo: dtoxMenuLogo,
      component: Dtoxs,
    },
    { title: 'HMS LINCS',
      centerLogo: hmsLincsMenuLogo,
      component: Hms,
    },
    { title: 'LINCS Proteomics',
      centerLogo: pccseMenuLogo,
      component: Pccse,
    },
    { title: 'LINCS Transcriptomics',
      centerLogo: cmapMenuLogo,
      component: Broad,
    },
    { title: 'MEP LINCS',
      centerLogo: mepLincsMenuLogo,
      component: Mep,
    },
    { title: 'NeuroLINCS',
      centerLogo: neurolincsMenuLogo,
      component: NeuroLINCS,
    },
  ],
  settings: [
    { title: 'Settings', icon: 'cog', component: Unavailable },
  ],
};
