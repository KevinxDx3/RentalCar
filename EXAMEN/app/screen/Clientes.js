import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TableExample} from '../screen/TableExample';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';


import { DataTable } from 'react-native-paper';
export const Clientes = () => {

    return (
        <DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Name</DataTable.Title>
		<DataTable.Title>Favourite Food</DataTable.Title>
		<DataTable.Title>Age</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row>
		<DataTable.Cell>Radhika</DataTable.Cell>
		<DataTable.Cell>Dosa</DataTable.Cell>
		<DataTable.Cell>23</DataTable.Cell>
	</DataTable.Row>

	<DataTable.Row>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell>Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	</DataTable>
      );

}



const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    });
    