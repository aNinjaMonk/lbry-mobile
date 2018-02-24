import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import React, { Component } from 'react';
import { registerScreens } from './Screens';
import { iconsMap, iconsLoaded } from './app-icons';
import { Colors, Fonts } from './Themes';

const I18n = require('./I18n/I18n');

registerScreens();

class App extends Component {
  constructor(props) {
    super(props);

    iconsLoaded.then(() => {
      this.startApp();
    });
  }
  componentDidMount() {

  }
  startApp = () => {
    const tabs = [{
        label: I18n.t('home'),
        screen: 'screen.home',
        icon: iconsMap.home,
        title: I18n.t('home')
      },
      {
          label: I18n.t('trending'),
          screen: 'screen.trending',
          icon: iconsMap["line-chart"],
          title: I18n.t('trending')
      }];

    const appStyle = {
      tabBarBackgroundColor: Colors.primary,
      navBarButtonColor: Colors.snow,
      tabBarButtonColor: Colors.snow,
      navBarTextColor: Colors.snow,
      tabBarSelectedButtonColor: Colors.black,
      navigationBarColor: Colors.primary,
      navBarBackgroundColor: Colors.primary,
      statusBarColor: Colors.primary,
      tabFontFamily: Fonts.type.tab
    };

    const tabsStyle = {
      tabBarBackgroundColor: Colors.primary,
      tabBarButtonColor: Colors.primary,
      tabBarSelectedButtonColor: Colors.lightPrimary,
      tabFontFamily: Fonts.type.tab,
    };

    /*Navigation.startSingleScreenApp({
        screen: {
          screen: 'screen.home',
          title: I18n.t('app_name'),
          navigatorStyle: {},
          navigatorButtons: {}
        },
        animationType: 'fade'
      });*/
      Navigation.startTabBasedApp({
        tabs,
        animationType: 'fade',
        tabsStyle,
        appStyle,
        drawer: {
          left: {
            screen: 'screen.drawer'
          }
        }
      });
  }
}

export default App;
