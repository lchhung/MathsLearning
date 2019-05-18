import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';

// This is layout formart for multiplication
export const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  tableArrayContainer:{
    flex: 1,
    
    width: '95%',
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  arrResultViewFirst: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 3,
    width: '50%',
    height:'80%',
    borderColor: '#1976d2',
    borderRadius: 15,
    marginTop: '10%'
  },
  arrResultViewSecond: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 3,
    width: '50%',
    height:'80%',
    borderColor: '#1976d2',
    borderRadius: 15,
    marginTop: '10%'
  },
  buttonViewContainer: {
    flex: 1.5,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center', 
    // borderColor: 'grey',
    // borderWidth: 3,
  },
  tableArrayTextView: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#eb144c',
    textAlign: 'center',
    margin: 1,
    top: 5
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    margin: '2%',
    backgroundColor: '#004dcf',
    borderRadius: 20,
    width: '20%',
    aspectRatio: 1/1,
    left: '15%',

  },
  buttonTextSize: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: 'white',
    
  },
  
});