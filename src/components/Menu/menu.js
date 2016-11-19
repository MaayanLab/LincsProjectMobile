import About from '../../views/About';
import Center from '../../views/Center';
import News from '../../views/News';

import dcicLogo from '../../static/dcic.png';
import dtoxLogo from '../../static/dtox.png';
import hmsLincsLogo from '../../static/hms_lincs.png';
import neurolincsLogo from '../../static/neurolincs.png';
import mepLincsLogo from '../../static/mep_lincs.png';
import pccseLogo from '../../static/pccse.png';
import cmapLogo from '../../static/cmap.png';

export default {
  main: [
    { title: 'Applications', icon: 'wrench', component: News },
    { title: 'Community', icon: 'users', component: News },
    { title: 'Data', icon: 'bar-chart-o', component: News },
    { title: 'Publications', icon: 'book', component: News },
    { title: 'News', icon: 'newspaper-o', component: News },
    { title: 'About', icon: 'info-circle', component: About },
  ],
  centers: [
    { title: 'DCIC',
      centerLogo: dcicLogo,
      component: Center,
      props: { passProps: { center: 'DCIC' } },
    },
    { title: 'DToxS',
      centerLogo: dtoxLogo,
      component: Center,
      props: { passProps: { center: 'DToxS' } },
    },
    { title: 'HMS-LINCS',
      centerLogo: hmsLincsLogo,
      component: Center,
      props: { passProps: { center: 'HMS-LINCS' } },
    },
    { title: 'NeuroLINCS',
      centerLogo: neurolincsLogo,
      component: Center,
      props: { passProps: { center: 'NeuroLINCS' } },
    },
    { title: 'MEP-LINCS',
      centerLogo: mepLincsLogo,
      component: Center,
      props: { passProps: { center: 'MEP-LINCS' } },
    },
    { title: 'PCCSE',
      centerLogo: pccseLogo,
      component: Center,
      props: { passProps: { center: 'PCCSE' } },
    },
    { title: 'Center for Transcriptomics',
      centerLogo: cmapLogo,
      component: Center,
      props: { passProps: { center: 'CMAP' } },
    },
  ],
  settings: [
    { title: 'Settings', icon: 'cog', component: News },
  ],
};
