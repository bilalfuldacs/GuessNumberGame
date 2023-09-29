import React from 'react'
import { View,StyleSheet } from 'react-native'
import Colors from '../../constants/ColorsConstants'

function Card({children}) {
  return (
    <View style={styles.Inputcontainer}>{children}</View>
  )
}

export default Card;
const styles = StyleSheet.create({
    Inputcontainer: {
        
        marginHorizontal:20,
       
       elevation:6,//this is only for android
       shadowColor:"blue",
       shadowRadius:6,
       shadowOpacity:3,
       justifyContent:"space-evenly",
       alignItems:'center',
             marginTop:36,
             paddingTop:100,
            borderRadius:8,
             backgroundColor:Colors.primaryColor,    
           },
  });