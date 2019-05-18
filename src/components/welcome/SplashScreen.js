import React, { Component } from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import imageBGR from './BGR.png';
//import imageBGR from '../images/BGR.png';

export class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      imageBGR: imageBGR,
    }

  }
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'teal' }];

    return (
      <View style={viewStyles}>
           <Image style={styles.imageView}
            source={this.state.imageBGR}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
   
    
    imageView: {
      flex: 1,
      resizeMode: 'contain', // or 'stretch',
      alignItems: 'center',
      //alignSelf: 'stretch',
      width: '100%',
      //height: '100%',
      //position: 'absolute',
      
    }
  });
  