import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from './MultiScreenStyle';


export class MultiScreen extends React.Component {
  constructor(props) {
    super(props);
    // This section is to generate initial variable and assign them to FlatList buttons
    var arrayButtons = [];
    for (var j = 2; j <= 10; j++) {
      var object = { key: j };
      arrayButtons.push(object);
    }
    //This section is to generate the variabe for the multiplication table, stating with Table 2. 
    this.state = {
      tablesNums: 2,
      arrayButtons: arrayButtons,
    };
  }
  render() {
    // This section is to generate the variable that change from 1 to 10 in a multiplication table    
    // For example, (2 x 1 = 2; 2 x 2 = 4... etc. In which, " i= 2" for Table 2 )
    var arrResultFirst = [];
    for (var i = 1; i <= 5; i++) {
      var tableArrayFirst = <Text key={(item, index) => index.toString()} style={styles.tableArrayTextView}>
        {this.state.tablesNums} × {i} = {i * this.state.tablesNums}</Text>;
      arrResultFirst.push(tableArrayFirst);
    }
    /////////////////////////////////////
    var arrResultSecond = [];
    for (var i = 6; i <= 10; i++) {
      var tableArraySecond = <Text key={(item, index) => index.toString()} style={styles.tableArrayTextView}>
        {this.state.tablesNums} × {i} = {i * this.state.tablesNums}</Text>;
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
        <FlatList data={this.state.arrayButtons} renderItem={({ item }) => {
          return <TouchableOpacity style={styles.buttonView} onPress={() => this.setState({ tablesNums: item.key })} key={this.key}>
            <Text style={styles.buttonTextSize}>{item.key}</Text>
          </TouchableOpacity>;
        }} numColumns={3}>
        </FlatList>
      </View>

    </View>);
  }
}
