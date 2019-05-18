import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({

    containerViewOne: {
        flex:1,
        flexDirection: 'column',
        
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    buttonTextSize: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#9900ef',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonStyle: {
        //flexDirection: 'row',
        textAlign: 'center',
        margin: 5,
        backgroundColor: '#4caf50',
        borderRadius: 20,
        width: '22%',
        aspectRatio: 1.5/1
       
    },
   
    
})