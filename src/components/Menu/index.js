import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppStyles from '../../styles';
import styles from './MenuStyleSheet';
import News from '../../views/News';
import lincsLogo from '../../static/lincsLogo.png';

export default class Menu extends Component {
  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      main: [
        { title: 'Applications', icon: 'wrench', component: News },
        { title: 'Community', icon: 'users', component: News },
        { title: 'Data', icon: 'bar-chart-o', component: News },
        { title: 'Publications', icon: 'book', component: News },
        { title: 'News', icon: 'newspaper-o', component: News },
        { title: 'About', icon: 'info-circle', component: News },
      ],
      centers: [
        { title: 'DCIC', icon: 'wrench', component: News },
        { title: 'DToxS', icon: 'users', component: News },
        { title: 'HMS-LINCS', icon: 'bar-chart-o', component: News },
        { title: 'NeuroLINCS', icon: 'book', component: News },
        { title: 'MEP-LINCS', icon: 'newspaper-o', component: News },
        { title: 'PCCSE', icon: 'info-circle', component: News },
        { title: 'Center for Transcriptomics', icon: 'info-circle', component: News },
      ],
    };
  }

  render = () => {
    const { navigate } = this.props;
    const { main, centers } = this.state;

    const mainItems = main.map((item) => {
      const { title, icon, component, props } = item;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <Icon style={styles.icon} name={icon} />
            <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    const centerItems = centers.map((center) => {
      const { title, icon, component, props } = center;
      return (
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => navigate(title, component, props)}
          style={styles.menuItemTouch}
        >
          <View style={[styles.menuItem]}>
            <View style={styles.centerLogoWrapper}>
              <Image source={lincsLogo} style={styles.centerLogo}/>
            </View>
            <Text style={[AppStyles.baseText, styles.menuItemLabel]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.menuContainer]}>
        <View style={styles.menuHead}>
          <Image style={styles.menuHeadLogo} source={lincsLogo}/>
          <Text style={[AppStyles.baseText, styles.menuHeadText]}>LINCS Program</Text>
        </View>
        {/* Main Menu Items*/}
        <View style={styles.menuDivider}>
          <Text style={[AppStyles.baseText, styles.menuDividerText]}>Main</Text>
        </View>
        <View style={[styles.main]}>{mainItems}</View>

        {/* Center Items*/}
        <View style={styles.menuDivider}>
          <Text style={[AppStyles.baseText, styles.menuDividerText]}>Centers</Text>
        </View>
        <View style={[styles.centers]}>{centerItems}</View>

        {/* Settings and Preferences Items*/}
        <View style={styles.menuDivider}>
          <Text style={[AppStyles.baseText, styles.menuDividerText]}>Settings</Text>
        </View>
        <View style={[styles.settings]}>{mainItems.slice(0,1)}</View>
      </View>
    );
  }
}
