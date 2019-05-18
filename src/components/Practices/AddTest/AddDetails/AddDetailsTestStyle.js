import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
  },
  pointContainer:{
    flex:0.25,
    justifyContent: 'flex-start',
    flexDirection:'row',
    //height: '10%',
    width: '80%'
  },
  imageView: {
    flex:0.7,
    alignItems: 'center',
    justifyContent:'center',
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    bottom: '10%',
    
  },
  buttonView: {
    flex:0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '20%'
  },
  textButton: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  styleButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: '20%',
    aspectRatio:1/1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    margin: '2%',
  },
  scoreView: {
    fontSize: responsiveFontSize(5),
    color: 'red',
    fontWeight: 'bold',
  },
  testAnswerView: {
    fontSize: responsiveFontSize(5),
    color: 'green',
    fontWeight: 'bold',
    //paddingTop: '30%',
    textAlign: 'center',
    bottom: '20%'
  },
  timerTextView: {
    fontSize: responsiveFontSize(5),
    color: 'red',
    fontWeight: 'bold',
    left: 30,
    top: 10
  },
  timerContainerView: {
    top: 10,
    paddingTop: 10,
    left: 5
  },
  imageClockView: {
    width: 50,
    height: 50,
  },
 
});