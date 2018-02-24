import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TextInput, ScrollView, StyleSheet, Button, Image
} from 'react-native';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes';
import { iconsMap, iconsLoaded } from '../app-icons';
//const realm = require('../Services/dbClient');
const I18n = require('../I18n/I18n');
import * as Animatable from 'react-native-animatable';

class Grow extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = {

    };
    iconsLoaded.then(() => {
      this.props.navigator.setButtons({
        leftButtons: [{
          id: 'sideMenu',
          buttonColor: Colors.black
        }],
        animated: false
      });
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentWillMount() {

  }

  onNavigatorEvent = (event) => {
    if (event.id === 'bottomTabSelected' || event.id === 'bottomTabReselected') {
      this.props.navigator.dismissContextualMenu();
    } else if (event.id === 'new') {
      //alert('hi');
    }
  }

  render() {
    return (
      <View style={[ApplicationStyles.container, { padding: 10 }]}>
        <Text style={styles.text}>
          {I18n.t('coming')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.black
  }
});

module.exports = Grow;
