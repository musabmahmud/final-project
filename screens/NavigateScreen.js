import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import { } from 'firebase/auth';
import HomeScreen from "./HomeScreen";
import ServiceScreen from "./ServiceScreen";
import DonationScreen from "./DonationScreen";


const Stack = createNativeStackNavigator();

const NavigateScreen = ({navigation}) => {
    

  return (
    <Stack.Navigator style={styles.container} initialRouteName="Shebok" screenOptions={{
        headerShown: false,
    }}>
          {/* <Stack.Screen options={{headerShown:false}} name="Loading" component={LoadingScreen} /> */}
          <Stack.Screen name="Shebok" component={HomeScreen} />
          {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Signup" component={RegisterScreen} /> */}
          <Stack.Screen name="Service" component={ServiceScreen} />
          <Stack.Screen name="Donation" component={DonationScreen} />
    </Stack.Navigator>
  )
}

export default NavigateScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFF99',
    }
})