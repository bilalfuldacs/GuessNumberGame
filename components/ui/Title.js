import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import Colors from '../../constants/ColorsConstants';

function Title({children}) {
  return (
    
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;
const styles = StyleSheet.create({
    title:{
        fontSize:28,
        fontWeight:"bold",
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.YellowColor,
        padding:12
    }

  });
  