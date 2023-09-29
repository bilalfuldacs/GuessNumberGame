import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Colors from '../../constants/ColorsConstants'
export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text></View>
  )
}
const styles=StyleSheet.create({
    container:{
borderWidth:4,
borderColor:Colors.YellowColor,
padding:40,
borderRadius:8,
margin:24,
alignItems:'center',
justifyContent:'center'

    },
numberText:{
   Color:Colors.YellowColor,
   fontSize:36,
   fontWeight:'bold'
}
})