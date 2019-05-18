import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity, Image
} from 'react-native';
import imageClock from '../../../images/clock.png';
import imageHappy from '../../../images/happy.png';
import imageSad from '../../../images/sad.png';
import imageGem from '../../../images/gem.png';
import { AddDetailsTestArrayData } from './AddDetailsTestArrayData';
import { styles } from './AddDetailsTestStyle';


export class AddDetailsTestScreen extends Component {
  constructor(props) {
    super(props);
    let val = this.props.navigation.state.params.passedValue;
    var testData = AddDetailsTestArrayData(val);
    this.state = {
      count: 0,
      randomNums: testData.randomNums,
      originalArray: testData.originalArray,
      buttonArray: testData.buttonArray,
      buttonArrayNum: testData.buttonArrayNum,
      testAnswer: testData.testAnswer,
      compareNums: testData.compareNums,
      image: imageHappy,
      answer: ' ',
      answerNums: "",
      timer: 10,
      passedValue: this.props.navigation.state.params.passedValue
    }
  }
  // componentDidMount() {
  //   this.interval = setInterval(
  //     () => this.setState({ timer: this.state.timer - 1 }),
  //     1000
  //   );
  // }
  // componentDidUpdate() {
  //   if (this.state.timer === 0) {
  //     clearInterval(this.interval);
  //   }
  // }
  render() {

    function _onPress(value) {
      if (this.state.compareNums === value) {
        let val = this.state.passedValue;
        var testData = AddDetailsTestArrayData(val);
        this.setState({
          originalArray: testData.originalArray,
          buttonArray: testData.buttonArray,
          buttonArrayNum: testData.buttonArrayNum,
          testAnswer: testData.testAnswer,
          compareNums: testData.compareNums
        })
        return this.state.count++ ,
          this.setState({
            answerNums: value,
            buttonArray: testData.buttonArray, randomNums: testData.randomNums,
            buttonArrayNum: testData.buttonArrayNum, buttonArray: testData.buttonArray,
            image: imageHappy
          })

      } else {
        return this.setState({
          image: imageSad
        })
      }
    }
    return (
      <View style={styles.mainContainer} >
        
        <View style={styles.pointContainer} >
          <Text style={styles.timerTextView} >{<Image style={styles.imageClockView}
            // source={imageClock} />} {this.state.timer}  {<Image style={styles.imageClockView}
              source={imageGem} />} {this.state.count} </Text>
        </View>

        <View style={styles.imageView} >
          <Image style={styles.imageView}
            source={this.state.image}
          />
        </View>

        <Text style={styles.testAnswerView}>
          {this.state.randomNums} + ? = {this.state.testAnswer}
        </Text>

        <View style={styles.buttonView}>
          {this.state.buttonArray.map((value, keys) => {
            return <TouchableOpacity
              onPress={_onPress.bind(this, value)}
              style={styles.styleButton}
              key={keys}>
              <Text style={styles.textButton}> {value} </Text>
            </TouchableOpacity>;
          })
          }
        </View>
      </View>
    );
  }
}

// This is layout formart
