import React from "react";
import { View,Text,StyleSheet} from "react-native";

export const SignInPage = () =>{

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
}