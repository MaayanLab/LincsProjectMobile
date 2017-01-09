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
import LoadingScreen from '../views/LoadingScreen';
import Home from '../views/Home';
import { loadPublications } from '../actions/publications';
import { loadNews } from '../actions/news';
import { loadTools } from '../actions/tools';

class AppContainer extends Component {
  static propTypes = {
    closeSideMenu: PropTypes.func,
    toggleSideMenu: PropTypes.func,
    sideMenuGesturesDisabled: PropTypes.func,
    sideMenuIsOpen: PropTypes.bool,
    loadingPublications: PropTypes.bool,
    loadingNews: PropTypes.bool,
    loadingTools: PropTypes.bool,
    loadPublications: PropTypes.func,
    loadNews: PropTypes.func,
    loadTools: PropTypes.func,
  }

  /**
    * On first load
    */
  componentWillMount = () => {
    this.props.loadPublications();
    this.props.loadNews();
    this.props.loadTools();
  }

  componentDidMount = () => {
    StatusBar.setHidden(false, 'slide');
    StatusBar.setBackgroundColor(AppConfig.primaryColor, true);
  }

  onSideMenuPress = (title, component, extraProps = {}) => {
    this.props.closeSideMenu();
    this.refs.rootNavigator.replace({
      title,
      component,
      index: 0,
      ...extraProps,
    });
  }

  onSideMenuChange = (isOpen) => {
    if (isOpen !== this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  calculateProgress = () => {
    return 100;
  }

  configureScene = (route, routeStack) => {
    if (route.transition === 'FloatFromBottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  /**
    * Render each scene with a Navbar and Sidebar
    */
  renderScene = (route, navigator) => {
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
    const loadingProgress = this.calculateProgress();
    if (this.props.loadingPublications || this.props.loadingNews || this.props.loadingTools) {
      return <LoadingScreen progress={loadingProgress} />;
    }
    return (
      <SideMenu
        ref="rootSidebarMenu"
        menu={<Menu navigate={this.onSideMenuPress} ref="rootSidebarMenuMenu" />}
        disableGestures={this.props.sideMenuGesturesDisabled}
        isOpen={this.props.sideMenuIsOpen}
        onChange={this.onSideMenuChange}
      >

        <Navigator
          ref="rootNavigator"
          style={[AppStyles.container, AppStyles.appContainer]}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
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
  loadingPublications: state.publications.isFetching,
  loadingNews: state.news.isFetching,
  loadingTools: state.tools.isFetching,
  sideMenuIsOpen: state.sideMenu.isOpen,
});

const mapDispatchToProps = {
  loadPublications,
  loadNews,
  loadTools,
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
