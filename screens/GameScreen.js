import React from 'react'
import { Text,View,StyleSheet,Alert, FlatList } from 'react-native'
import { useState,useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}
let minBoundary=1;
let maxBoundary=100;
function GameScreen({userNumber,onGameOver}) 
{   const initialGuess=generateRandomBetween(1,100,userNumber);
    const[currentGuess,setCurrentGuess]=useState(initialGuess);
    const[guessRound,setguessRound]=useState([initialGuess]);
    useEffect(()=>{if(currentGuess===userNumber){
        onGameOver(guessRound.length);
    }},[currentGuess,userNumber,onGameOver]);
    useEffect(()=>{minBoundary=1,maxBoundary=1},[]);
    const nextGuessHandler=(direction)=>{
        if((direction==="lower" && currentGuess<userNumber )||
        (direction==="higher" && currentGuess>userNumber))
        {
            Alert.alert(
                'Dont Lie',
                'You are lying',
                [
                  {
                    text: 'Sorry',
                    style: 'destructive',
                   
                  },
                ]
              );
        }
        if(direction==="lower")
    {maxBoundary=currentGuess;
       }
    else{
        minBoundary=currentGuess+1;
      
    }
    const newRaandNum=generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRaandNum);
    setguessRound(prev=>[newRaandNum,...prev])
    }  
  const guessRoundListLenght=guessRound.length; 
  return (
    <View style={styles.screens} >
   <Title>Opponent Guess</Title>
  <NumberContainer>{currentGuess}</NumberContainer>
   <Card >
    <InstructionText style={styles.instructionText}>Lower hiigher</InstructionText>
    <View style={styles.Btncontainer}>
        <View style={styles.Btncontainers}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,"lower")}>
            <Ionicons name="md-remove" size={24} color="white"/>
            
            </PrimaryButton></View>

<View style={styles.Btncontainers}><PrimaryButton onPress={nextGuessHandler.bind(this,"higher")}>
<Ionicons name="md-add" size={24} color="white"/>
    </PrimaryButton></View>

</View>
    </Card>
    <View>

<FlatList data={guessRound} renderItem={(itemData)=><GuessLogItem roundNum={guessRoundListLenght-itemData.index} guess={itemData.item}/>}
keyExtractor={(item)=>item}/>
    </View>
    </View>
  )
}

export default GameScreen;
const styles = StyleSheet.create({
    screens:{flex:1,padding:24},
    Btncontainer: {
        
        flexDirection:'row', 
      paddingHorizontal:10,
      justifyContent:'space-around'
            },
            Btncontainers: {
 flex:3, 
 
           
                 },
                 instructionText:{
                    marginBottom:22,
                 },
                 listContainer:{
                  flex:1,
                  padding:40,
            
                 }
  });
  