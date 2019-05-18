import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { SafeAreaView, StyleSheet, Text, Platform, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { MultiScreen } from './Multi/MultiScreen';
import { DivScreen } from './Divs/DivScreen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const isAndroid = Platform.OS === 'android';

class MainLearnScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="teal"
        />
        <TouchableOpacity style={styles.buttonViewOne} onPress={() => this.props.navigation.navigate('ScreenMulti')} >
          <Text style={styles.buttonTextSize}>Multiplication tables</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.buttonViewTwo} onPress={() => this.props.navigation.navigate('ScreenDiv')} >
          <Text style={styles.buttonTextSize}>Division tables</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextSize: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'white',
    padding: '5%',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonViewOne: {
    margin: '8%',
    backgroundColor: '#ff5722',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
  buttonViewTwo: {
    margin: '8%',
    backgroundColor: '#0d47a1',
    borderRadius: 20,
    width: '70%',
    aspectRatio: 5/1
  },
})

export class LearnAllScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator({
  MainLearnScreen: MainLearnScreen,
  ScreenMulti: MultiScreen,
  ScreenDiv: DivScreen,
}, {
    headerMode: 'none',
  });
const AppContainer = createAppContainer(RootStack);



