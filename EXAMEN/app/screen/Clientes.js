import React, { createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Clientes = (props) => {

    return(
        <View>
            <TouchableOpacity onPress={() => {props.navigation.navigate('CrearClientes')}} style={{backgroundColor: 'blue',margin: 10, alignItems: 'center' }}>
                <Text style={{color: 'white'}}>CREAR</Text>
            </TouchableOpacity>
        </View>
    );
    

}