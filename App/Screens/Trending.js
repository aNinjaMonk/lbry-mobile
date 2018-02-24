import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Share, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Images, Fonts, ApplicationStyles } from '../Themes';

const I18n = require('../I18n/I18n');

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  }
});

export default Trending;
