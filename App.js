import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase,ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/ColorsConstants';
export default function App() {
  const[useNumber,setUseNumbered]=useState(null);
  const[gameIsover,setIsGameOver]=useState(true);
  const[guessRound,setguessRound]=useState(0);
  const pickedNumberHandler=(pickedNumber)=>{
    setUseNumbered(pickedNumber); setIsGameOver(false) ; 
  }
  const gameOverHandler=(numberOfRounds)=>{
    setIsGameOver(true);
    setguessRound(numberOfRounds);
  }  
  const startNewGameHAnler=()=>{
    setUseNumbered(null);

    setguessRound(0);
  }
  let content = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (useNumber) {
    content = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler} />;}
    if(gameIsover && useNumber){
      content = <GameOverScreen roundNumber={guessRound} useNumber={useNumber} onStartNewgame={startNewGameHAnler} />;
    }
 
return (
<LinearGradient
        // Background Linear Gradient
        colors={[Colors.primaryColor,Colors.YellowColor,]}
        style={styles.container}
      >
        <ImageBackground source={require('./assets/background.png')} resizeMode='cover'
        style={styles.container} imageStyle={{opacity:0.55}}>
  <SafeAreaView  style={styles.rootScreen}>{content}</SafeAreaView>
    </ImageBackground>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{flex:1},
  container: {
    flex: 1,
  },
});
