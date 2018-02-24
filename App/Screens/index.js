import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Drawer from './Drawer';
import Trending from './Trending';

export function registerScreens() {
  Navigation.registerComponent('screen.home', () => Home);
  Navigation.registerComponent('screen.drawer', () => Drawer);
  Navigation.registerComponent('screen.trending', () => Trending);
}
