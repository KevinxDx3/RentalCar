import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//importar pantallas
import {Autos} from './app/screen/Autos';
import {Clientes} from './app/screen/Clientes';
import { Loguin } from './app/screen/Loguin';
import { Reservas } from './app/screen/Reservas';
import { Menu } from './app/screen/Menu';



const Stack = createStackNavigator();

export default function App() {

  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Loguin} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen name="Autos" component={Autos} />
        <Stack.Screen name="Reservas" component={Reservas} />
        <Stack.Screen name="Menu" component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
