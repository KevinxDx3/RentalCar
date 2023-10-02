import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export const Menu = (props) => {


    return(   

        <SafeAreaView style={styles.container}>
         <Text style={styles.title}>
       ESCOJA SU MODULO
          </Text>

             <Separator />
        <View>
          <Text style={styles.title}>
            LISTA DE CLIENTES
          </Text>
          <Button
            title="CLIENTES"
            onPress={()=>{props.navigation.navigate("Clientes")}}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            LISTA DE AUTOMOVILES
          </Text>
          <Button
            title="Automoviles"
            color="gray"
            onPress={()=>{props.navigation.navigate("Autos")}}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            LISTA DE RESERVAS
          </Text>
          <Button
            title="reservas"
            color="green"
            onPress={()=>{props.navigation.navigate("Reservas")}}
          />
        </View>
        <Separator />
        <View>
          <Button
            title="SALIR"
            color="red"
            onPress={()=>{props.navigation.navigate("Login")}}
          />
        </View>
       
       
      </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });