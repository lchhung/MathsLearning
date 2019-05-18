import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Alert, StyleSheet, Text, Platform, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { MultiTestScreen } from './MultiTest/MultiTestScreen';
import { DivTestScreen } from './DivTest/DivTestScreen';
import { AddMainTestScreen } from './AddTest/AddMainTestScreen';
import { SubtractMainTestScreen } from './SubtractTest/SubtractMainTestScreen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


const isAndroid = Platform.OS === 'android';

class MainPracticeScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="teal"
        />
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonViewOne} onPress={() => this.props.navigation.navigate('AddTestScreen')} >
          <Text style={styles.buttonTextSize}>Adding practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonViewTwo} onPress={() => this.props.navigation.navigate('SubtractMainTestScreen')} >
          <Text style={styles.buttonTextSize}>Subtracting practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonViewThree} onPress={() => this.props.navigation.navigate('MultiTestScreen')} >
          <Text style={styles.buttonTextSize}>Multiplying practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"}
          style={styles.buttonViewFour}
          onPress={() => this.props.navigation.navigate('DivTestScreen')} >
          <Text style={styles.buttonTextSize}>Dividing practice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonTextSize: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'white',
    padding: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonViewOne: {
    margin: '5%',
    backgroundColor: 'green',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
  buttonViewTwo: {
    margin: '5%',
    backgroundColor: 'red',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
  buttonViewThree: {
    margin: '5%',
    backgroundColor: '#9c27b0',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
  buttonViewFour: {
    margin: '5%',
    backgroundColor: '#0d47a1',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
})

export class AllPracticeScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const RootStack = createStackNavigator({
  MainPracticeScreen: MainPracticeScreen,
  AddTestScreen: AddMainTestScreen,
  //SubtractMainTestScreen:SubtractTestScreen,
  SubtractMainTestScreen: SubtractMainTestScreen,
  MultiTestScreen: MultiTestScreen,
  DivTestScreen: DivTestScreen,
}, {
    headerMode: 'none',
  });
const AppContainer = createAppContainer(RootStack);



