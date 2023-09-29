import React from 'react'
import { StyleSheet } from 'react-native';
import { Text,View } from 'react-native'
import Colors from '../../constants/ColorsConstants';

function GuessLogItem({roundNumber,guess}) {
  return (
    <View style={styles.listeItem}>
        <Text>#{roundNumber}</Text>
    <Text>Opponent Guess:{guess}</Text>
    </View>
  )
}

export default GuessLogItem;
const styles=StyleSheet.create({
    listeItem:{
        borderColor:Colors.primaryColor,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:"100%",
elevation:  4,
shadowColor:'black',
  }
})