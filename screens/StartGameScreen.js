import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/ColorsConstants';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';
function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Wrong Input',
        'Choose the right number',
        [
          {
            text: 'OK',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onConfirmNumber(chosenNumber); // Call the prop function correctly
  };

  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card >
        <InstructionText >Enter The Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.Btncontainer}>
        <View style={styles.Btncontainers}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.Btncontainers}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>

  );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
//     container: {
        
//  marginHorizontal:20,

// elevation:6,//this is only for android
// shadowColor:"blue",
// shadowRadius:6,
// shadowOpacity:3,
// justifyContent:"space-evenly",
// alignItems:'center',
//       marginTop:36,
//       paddingTop:100,
//      borderRadius:8,
//       backgroundColor:Colors.primaryColor,    
//     },
    Btncontainer: {
        
       flexDirection:'row', 
     paddingHorizontal:10,
     justifyContent:'space-around'
           },
           Btncontainers: {
flex:3, 

          
                },
    numberInput:{
height:50,
fontSize:32,
width:50,

alignItems:'center',
borderBottomColor:Colors.YellowColor,
borderBottomWidth:2,
color:Colors.YellowColor,
marginVertical:40,
fontWeight:"bold",
    },
   
  });
export default StartGameScreen