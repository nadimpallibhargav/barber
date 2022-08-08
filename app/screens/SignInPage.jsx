import React from "react";
import { View,Text,StyleSheet} from "react-native";

export const SignInPage = () =>{
    return(
        <>
         <View style={styles.container} >
           <Text style={styles.signIn}>
              Sign Up
           </Text>
           <Button
                onPress={() =>{
                    naviagtion.naviagte('Entry')
                }}> 
                Back
            </Button>
         </View>
        </>
    )
  const styles = StyleSheet.create({
    container:{
       display:"flex",
       flex:1,
       justifyContent:"center",
       alignItems:"center"
    },
    signIn:{
       fontSize:24,
       color :'#141414'
    }
  })
}