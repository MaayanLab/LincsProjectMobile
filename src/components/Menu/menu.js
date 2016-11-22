import About from '../../views/About';
import Center from '../../views/Center';
import News from '../../views/News';

import dcicMenuLogo from '../../static/centers_menu_logo/dcic.png';
import dcicLogo from '../../static/centers_full_logo/dcic.png';
import Dcic from '../../views/Center/DCIC';

import dtoxMenuLogo from '../../static/centers_menu_logo/dtox.png';
import dtoxLogo from '../../static/centers_full_logo/dtox.png';

import hmsLincsMenuLogo from '../../static/centers_menu_logo/hms_lincs.png';
import hmsLincsLogo from '../../static/centers_full_logo/hms_lincs.png';

import neurolincsMenuLogo from '../../static/centers_menu_logo/neurolincs.png';
import neurolincsLogo from '../../static/centers_full_logo/neurolincs.png';

import mepLincsMenuLogo from '../../static/centers_menu_logo/mep_lincs.png';
import mepLincsLogo from '../../static/centers_full_logo/mep_lincs.png';

import pccseMenuLogo from '../../static/centers_menu_logo/pccse.png';
import pccseLogo from '../../static/centers_full_logo/pccse.png';

import cmapMenuLogo from '../../static/centers_menu_logo/cmap.png';
import cmapLogo from '../../static/centers_full_logo/cmap.png';


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
      centerLogo: dcicMenuLogo,
      component: Dcic,
      props: { passProps: {
        center: 'DCIC',
        logo: dcicLogo,
        description: 'The Center brings together a team of computational experts with several years of experience with LINCS data and complementary expertise: Drs. Ma’ayan, Schürer, and Medvedovic develop and deploy a next generation computational infrastructure, develop novel analysis tools and methods enabling researchers to glean new insights from integrative models of biological systems to link complex diseases/phenotypes with drugs and the pathways that those drugs target in different cells and tissues. The DCIC plays a key role in realizing the transformative potential of LINCS data and resources in accelerating the discovery of novel therapeutics and improving diagnostics of human health.',
      } },
    },
    { title: 'DToxS',
      centerLogo: dtoxMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'DToxS',
        logo: dtoxLogo,
        description: 'The Drug Toxicity Signature Generation Center aims to develop cell signatures that will predict adverse events that might be caused by drugs and will identify other drugs that might lessen these side effects. The center will leverage the U.S. Food and Drug Administration’s (FDA) Adverse Event Reporting System database to identify drugs that produce adverse events in heart, liver and neuronal function, and to search for drugs that may mitigate these events.',
      } },
    },
    { title: 'HMS-LINCS',
      centerLogo: hmsLincsMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'HMS-LINCS',
        logo: hmsLincsLogo,
        description: 'The HMS LINCS Center develops new measurement methods and computer algorithms to detect and analyze perturbations induced by therapeutic drugs in healthy and diseased human cells.',
      } },
    },
    { title: 'NeuroLINCS',
      centerLogo: neurolincsMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'NeuroLINCS',
        logo: neurolincsLogo,
        description: 'The NeuroLINCS Center concentrates on human brain cells, which are far less understood than other cells in the body. The researchers believe it will be necessary to study these cell types directly to understand the causes of neurological disease and to develop new therapies. By applying LINCS-type perturbations to studying an array of human brain cells, the researchers hope to identify targets for developing drugs against neurodegenerative diseases such as Parkinson’s disease, amyotrophic lateral sclerosis (ALS, also known as Lou Gehrig’s disease), spinal muscular atrophy and Huntington’s disease.',
      } },
    },
    { title: 'MEP-LINCS',
      centerLogo: mepLincsMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'MEP-LINCS',
        logo: mepLincsLogo,
        description: 'The MEP LINCS Center studies how both malignant and non-malignant cells are controlled by the microenvironments in which they live. The researchers will provide measurements of the impacts of thousands of different microenvironments on cellular phenotypes, protein make-up and gene expression readouts in cell lines.',
      } },
    },
    { title: 'PCCSE',
      centerLogo: pccseMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'PCCSE',
        logo: pccseLogo,
        description: 'The LINCS Proteomic Characterization Center for Signaling and Epigenetics studies cell disruption at the most basic levels: phosphorylation-mediated signaling — that is, how cells communicate internally; and epigenetics, or how cells perpetuate non-genetic information as they grow.',
      } },
    },
    { title: 'Center for Transcriptomics',
      centerLogo: cmapMenuLogo,
      component: Center,
      props: { passProps: {
        center: 'CMAP',
        logo: cmapLogo,
        description: 'The LINCS Center for Transcriptomics is studying up to 50 cell types perturbed by a large number of chemical compounds and genetic reagents that activate or deactivate genes. Each perturbation will produce about 1,000 gene-expression readouts. By the project’s end, the center expects to have generated more than 1 million profiles of how genes are expressed in different cells.',
      } },
    },
  ],
  settings: [
    { title: 'Settings', icon: 'cog', component: News },
  ],
};
