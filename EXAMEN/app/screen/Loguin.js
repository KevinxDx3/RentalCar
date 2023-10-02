import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, _View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {app} from '../../credenciales';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth =getAuth(app);



import React, { useState } from "react";
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

export const Loguin = (props) => {

    //variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Logueo = async()=>{
      try{

        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Iniciando Sesion', 'Accediendo.....')
        props.navigation.navigate('Menu')
        

      }catch (error){
        console.log(error);
      }
    }


    return(
     <View style={styles.container}>
   
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Olvidaste tu contrase</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={Logueo}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View>
    )
    

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });