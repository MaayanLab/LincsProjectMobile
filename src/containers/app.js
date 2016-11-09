/**
  Navigation was built following this example.
  https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.lrbsi8e42
 */

import React, { Component, PropTypes } from 'react';
import { Navigator, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';

import * as SideMenuActions from '../actions/sidemenu';
import Menu from '../components/Menu';
import NavbarElements from '../components/navbar.elements';
import News from '../views/News';

import AppConfig from '../config';
import AppStyles from '../styles';

class AppContainer extends Component {
  static propTypes = {
    sideMenuIsOpen: PropTypes.bool,
    toggleSideMenu: PropTypes.func,
    closeSideMenu: PropTypes.func,
  }

  componentDidMount() {
    StatusBar.setHidden(false, 'slide');
    StatusBar.setBackgroundColor(AppConfig.primaryColor, true);
  }

  onSideMenuPress(title, component, extraProps = {}) {
    this.props.closeSideMenu();

    this.refs.rootNavigator.replace({
      title,
      component,
      index: 0,
      ...extraProps,
    });
  }

  onSideMenuChange(isOpen) {
    if (isOpen !== this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  renderScene(route, navigator) {
    let title = route.title || AppConfig.appName;

    let leftButton = {
      onPress: (route.index > 0)
        ? this.refs.rootNavigator.pop
        : this.props.toggleSideMenu,
      icon: (route.index > 0)
        ? 'ios-arrow-back-outline'
        : 'ios-menu-outline',
    };

    if (route.transition === 'FloatFromBottom') {
      leftButton.icon = 'ios-close-outline';
    }

    return (
      <View>
        <NavigationBar
          title={<NavbarElements.Title title={title || null} />}
          statusBar={{ style: 'light-content', hidden: false }}
          style={[AppStyles.navbar]}
          tintColor={AppConfig.primaryColor}
          leftButton={
            <NavbarElements.LeftButton
              onPress={leftButton.onPress}
              icon={leftButton.icon}
            />
          }
        />
        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  configureScene(route, routeStack) {
    if (route.transition === 'FloatFromBottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    } else {
      return Navigator.SceneConfigs.PushFromRight;
    }
  }

  render() {

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
          renderScene={this.renderScene.bind(this)}
          configureScene={this.configureScene}
          initialRoute={{
            component: News,
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
