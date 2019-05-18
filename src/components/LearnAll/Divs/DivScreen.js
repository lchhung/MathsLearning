import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import { styles } from './DivStyle';


export class DivScreen extends React.Component {
  constructor(props) {
    super(props)
    // This section is to generate initial variable and assign them to FlatList buttons
    var arrayButtons = [];
    for (var j = 1; j <= 12; j++) {
      var object = { key: j };
      arrayButtons.push(object);
    }
    //This section is to generate the variabe for the multiplication table, stating with Table 2. 
    this.state = {
      tablesNums: 1,
      arrayButtons: arrayButtons,
    }

  }
  render() {

    // This section is to generate the variable that change from 1 to 10 in a multiplication table    
    // For example, (2 x 1 = 2; 2 x 2 = 4... etc. In which, " i= 2" for Table 2 )
    var arrResultFirst = [];
    for (var i = 1; i <= 6; i++) {
      var tableArrayFirst = <Text key={(index) => index.toString()} style={styles.tableArrayTextView}>
        {i * this.state.tablesNums} ÷ {this.state.tablesNums} = {i} </Text>
      arrResultFirst.push(tableArrayFirst);
    }

    /////////////////////////////////////
    var arrResultSecond = [];
    for (var i = 7; i <= 12; i++) {
      var tableArraySecond = <Text key={(index) => index.toString()} style={styles.tableArrayTextView}>
        {i * this.state.tablesNums} ÷ {this.state.tablesNums} = {i} </Text>
      arrResultSecond.push(tableArraySecond);
    }
    ///////////////////////////////////

    return (

      <View style={styles.mainContainer}>
         <View style={styles.tableArrayContainer}> 
        <View style={styles.arrResultViewFirst}>
          {arrResultFirst}
        </View>

        <View style={styles.arrResultViewSecond}>
          {arrResultSecond}
        </View>
        </View>

        <View style={styles.buttonViewContainer}>
          <FlatList
            data={this.state.arrayButtons}
            renderItem={({ item }) => {
              return <TouchableOpacity style={styles.buttonView}
                onPress={() => this.setState({ tablesNums: item.key })} key={this.key} >
                <Text style={styles.buttonTextSize}>{item.key}</Text>
              </TouchableOpacity>;
            }}
            numColumns={4}
          >
          </FlatList>
        </View>
      </View>


    );
  }
}

