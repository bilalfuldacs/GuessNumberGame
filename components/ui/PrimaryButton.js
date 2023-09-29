import React from 'react';
import { Text, View ,Pressable,StyleSheet} from 'react-native'; // Import from 'react-native'

import Colors from '../../constants/ColorsConstants';
function PrimaryButton({ children,onPress }) {
  
  return (
  
    <View style={styles.btnOuterConatiner}>
         <Pressable onPress={onPress}
         style={({pressed})=>pressed ? [styles.pressed,styles.Btncontainer]: styles.Btncontainer} android_ripple={{color:"#b5879e"}}>
      <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>

  );
}
const styles = StyleSheet.create({
    btnOuterConatiner:{
    
        margin:4,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
      
    },
    Btncontainer: {
        width:"100%",
      backgroundColor:'red',
      paddingVertical:8,
      paddingHorizontal:16,
      borderRadius:18,
    },
    btnText:{
        color:"white",
        textAlign:"center",
    },
    pressed:{
opacity:0.75,
    }
  });
export default PrimaryButton;
