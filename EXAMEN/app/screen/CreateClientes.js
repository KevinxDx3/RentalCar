import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, _View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {firebase} from '../../credenciales'

import { app } from '../../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);



import React, { useState } from "react";
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
export const CreateClientes = () => 
{

  const [state, setState] = useState({
    cedula: "",
    Nombre: "",
    Apellido: "",
    Ciudad: "",
    Email: "",
    Direccion: "",
    Telefono: "",
  });

  const handleChangeText = (name, value) =>{
    setState({...state, [name]: value});
  };

  const saveNewUser =async() => {
    if (state.name == ''){
      alert('Ingrese Cedula porfavor')
    }else{
      await firebase.db.collection('users').add({
        cedula: state.cedula,
        Nombre: state.Nombre,
        Apellido: state.Apellido,
        Ciudad: state.Ciudad,
        Email: state.Email,
        Direccion: state.Direccion,
        Telefono: state.Telefono,
      })
      alert('guardado')
    }

    
  };

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Cedula"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('cedula',value)}
  

        />

      </View>


      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Nombre"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Nombre',value)}


        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Apellido"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Apellido',value)}


        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Ciudad"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Ciudad',value)}


        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Email',value)}


        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Direccion"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Direccion',value)}


        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Telefono"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('Telefono',value)}

        />

      </View>

      <View>
        <Button
          onPress={()=>{saveNewUser()}}
          title="agregar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

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
    height: 60,
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