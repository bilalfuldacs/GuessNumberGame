import React from 'react'
import { View,Text,image, Image,StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/ColorsConstants';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundNumber,useNumber,onStartNewgame}) {
  return (
    <View style={styles.rootContainer}>
 <Title>Game Over</Title>
<View style={styles.imageContainer}>
<Image  style={styles.image} source={require('../assets/success.png')} /> 
 </View> 
 <Text style={styles.summaryText}>Your phone needs <Text style={styles.highlight}>{roundNumber}</Text> turn to guess number <Text
 style={styles.highlight}>{useNumber}</Text></Text>
 <PrimaryButton onPress={onStartNewgame}>Start New game</PrimaryButton>
 </View>
  )
}

export default GameOverScreen;
const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
      justifyContent:'center',
      alignItems:'center',
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
    borderWidth:3,
borderColor:Colors.primaryColor,
overflow:'hidden',
margin:36},
image:{width:'100%',height:'100%',},
summaryText:{
    fontFamily:'open-sans bold',
 
},
highlight:{
    fontFamily:'open-sans bold',
    color:'white',
}
})