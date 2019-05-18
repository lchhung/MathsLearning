import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SafeAreaView, FlatList, StyleSheet, Text, Platform, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { SubtractDetailsTestScreen } from './SubtractDetails/SubtractDetailsTestScreen';
import {styles} from './SubtractMainStyle';

var originalArray = [];
for (var i = 1; i <= 100; i++) {
  var object = { key: i };
  originalArray.push(object);
}
var filteredArray = [];
for (var j = 4; j < originalArray.length; j = j + 5) {
  filteredArray.push(originalArray[j])
}
const isAndroid = Platform.OS === 'android';

// This is main screen for subtract test

class SubtractTestDetailsMainScreen extends React.Component {
  constructor(props) {
    super(props);
    //var arrayDataI=arrayData();
    this.state = {
      originalArray: originalArray,
      filteredArray: filteredArray,
      numsButton: 'null'//
    }
  }
  // selecte maximum value from button
  renderPassedValue(item, index) {
    return <TouchableOpacity style={styles.buttonStyle}
      onPress={() => {
        this.props.navigation.navigate('SubtractDetails', {
          _passedValue: item.key,  //sai nay set state thi phai get state 
          get passedValue() {
            return this._passedValue;
          },
          set passedValue(value) {
            this._passedValue = value;
          },
        });
      }}
    >
      <Text style={styles.buttonTextSize}>{item.key}- </Text>
    </TouchableOpacity>;
  }
  render() {
    return (
      //============
      <View style={styles.containerViewOne}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#9c27b0"
        />
          <FlatList
            data={this.state.filteredArray}
            renderItem={({ item, index }) => this.renderPassedValue(item, index)}
            numColumns={4}
          >
          </FlatList>
        
      </View>

      //=============
     
    );
  }
}

export class SubtractMainTestScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const RootStack = createStackNavigator({
  SubMainTestScreen: SubtractTestDetailsMainScreen,
  SubtractDetails: SubtractDetailsTestScreen,
}, {
    headerMode: 'none',
  });
const AppContainer = createAppContainer(RootStack);



