
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
  Text
} from "react-native";

export const CreateAutos = () => {
    return(
        <View style={styles.container}>
      
         <StatusBar style="auto" />
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="marca"
             placeholderTextColor="#003f5c"
             onChangeText={(marca) => setEmail(marca)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="modelo"
             placeholderTextColor="#003f5c"
             onChangeText={(modelo) => setEmail(modelo)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="año"
             placeholderTextColor="#003f5c"
             onChangeText={(año) => setEmail(año)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="placa"
             placeholderTextColor="#003f5c"
             onChangeText={(placa) => setEmail(placa)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="color"
             placeholderTextColor="#003f5c"
             onChangeText={(color) => setEmail(color)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="tipo"
             placeholderTextColor="#003f5c"
             onChangeText={(tipo) => setEmail(tipo)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="kilometraje"
             placeholderTextColor="#003f5c"
             onChangeText={(kilometraje) => setEmail(kilometraje)}
           /> 
         </View> 
         <View style={styles.inputView}>
           <TextInput
             style={styles.TextInput}
             placeholder="descripcion"
             placeholderTextColor="#003f5c"
             onChangeText={(descripcion) => setEmail(descripcion)}
           /> 
         </View> 
         <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}>Añadir Vehiculo</Text> 
         </TouchableOpacity> 
       </View>
       )
       
    

}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      showsVerticalScrollIndicator: "true",
      display: "flex"
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