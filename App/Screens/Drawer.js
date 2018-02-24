import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Share, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Images, Fonts, ApplicationStyles } from '../Themes';

const I18n = require('../I18n/I18n');

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  componentDidMount() {

  }
  onNavigatorEvent = (event) => {
    
  }
  closeDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };
  openShare = () => {
    Share.share({
      message: I18n.t('shareMessage'),
      title: I18n.t('shareTitle')
    });
  }
  openHelp = () => {

    this.closeDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Text</Text>
          <Icon
              name='pencil'
              size={Metrics.icons.small}
              color={Colors.snow}
              style={styles.editButton}
              onPress={this.editName}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.drawerWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
  header: {
    flex: 0.2,
    width: Metrics.drawerWidth,
    backgroundColor: Colors.primary,
    flexDirection: 'row'
  },
  submenu: {
    flex: 0.65,
    width: Metrics.drawerWidth
  },
  menu: {
    flex: 0.15,
    width: Metrics.drawerWidth,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  menuItem: {
    flex: 0.333,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: Metrics.marginHorizontal,
    paddingTop: Metrics.doubleBaseMargin
  },
  menuButton: {
    paddingBottom: Metrics.marginHorizontal
  },
  menuText: {
    color: Colors.snow,
    fontSize: Fonts.size.regular
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: Metrics.doubleSection,
    backgroundColor: Colors.whitish,
    borderWidth: 0.2,
    borderColor: Colors.hairline
  },
  optionText: {
    color: Colors.black,
    fontSize: Fonts.size.regular,
    marginLeft: Metrics.doubleBaseMargin
  },
  editButton: {
    flex: 0.1,
    margin: Metrics.doubleBaseMargin,
    textAlignVertical: 'bottom'
  },
  name: {
    ...Fonts.style.h5,
    flex: 0.9,
    color: Colors.snow,
    margin: Metrics.doubleBaseMargin,
    textAlignVertical: 'bottom'
  }
});

export default Drawer;
