import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';

import * as SideMenuActions from '../actions/sidemenu';

import AppStyles from '../styles';
import AppConfig from '../config';

// Google Analytics
// import GoogleAnalytics from 'react-native-google-analytics-bridge';
// GoogleAnalytics.setTrackerId(AppConfig.gaTrackingId);

import Menu from '../components/Menu';
import { NavbarTitle, NavbarLeftButton } from '../components/NavBarElements';
import Home from '../components/Home';

class AppContainer extends Component {
  static propTypes = {
    closeSideMenu: PropTypes.func,
    toggleSideMenu: PropTypes.func,
    sideMenuGesturesDisabled: PropTypes.func,
    sideMenuIsOpen: PropTypes.bool,
  }
  /**
    * On first load
    */
  componentDidMount = () => {
    StatusBar.setHidden(false, 'slide');
    StatusBar.setBackgroundColor(AppConfig.primaryColor, true);
  }

  _onSideMenuPress = (title, component, extraProps = {}) => {
    this.props.closeSideMenu();
    this.refs.rootNavigator.replace({
      title,
      component,
      index: 0,
      ...extraProps,
    });
  }

  _onSideMenuChange = (isOpen) => {
    if (isOpen !== this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  _configureScene = (route, routeStack) => {
    if (route.transition === 'FloatFromBottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  /**
    * Render each scene with a Navbar and Sidebar
    */
  _renderScene = (route, navigator) => {
    // Default Navbar Title
    const title = route.title || AppConfig.appName;

    // Google Analytics
    // let screenName = route.component.componentName
    // ? route.component.componentName + ' - ' + title
    // : title;
    // GoogleAnalytics.trackScreenView(screenName);

    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    const leftButton = {
      onPress: (route.index > 0)
        ? this.refs.rootNavigator.pop
        : this.props.toggleSideMenu,
      icon: (route.index > 0)
        ? 'ios-arrow-back-outline'
        : 'ios-menu-outline',
    };

    // Show a cross icon when transition pops from bottom
    if (route.transition === 'FloatFromBottom') {
      leftButton.icon = 'ios-close-outline';
    }

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        <NavigationBar
          title={<NavbarTitle title={title || null} />}
          statusBar={{ style: 'light-content', hidden: false }}
          style={[AppStyles.navbar]}
          tintColor={AppConfig.primaryColor}
          leftButton={
            <NavbarLeftButton onPress={leftButton.onPress} icon={leftButton.icon} />
          }
        />
        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  render() {
    return (
      <SideMenu
        ref="rootSidebarMenu"
        menu={<Menu navigate={this._onSideMenuPress} ref="rootSidebarMenuMenu" />}
        disableGestures={this.props.sideMenuGesturesDisabled}
        isOpen={this.props.sideMenuIsOpen}
        onChange={this._onSideMenuChange}
      >

        <Navigator
          ref="rootNavigator"
          style={[AppStyles.container, AppStyles.appContainer]}
          renderScene={this._renderScene}
          configureScene={this._configureScene}
          initialRoute={{
            component: Home,
            index: 0,
            navigator: this.refs.rootNavigator,
            passProps: {
              showSplashScreen: true,
            },
          }}
        />

      </SideMenu>
    );
  }
}

const mapStateToProps = state => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
