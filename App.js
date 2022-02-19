import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import firebaseConfig from './firebase.config';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { } from 'firebase/auth';
import SidebarScreen from "./screens/SidebarScreen";
import NavigateScreen from "./screens/NavigateScreen";
import ChatScreen from "./screens/ChatScreen";
import NotifyScreen from "./screens/NotifyScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from "./screens/ExploreScreen";

const app = initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

export default function App() {
  const drawer = useRef(null);
  
  return (
    
    <DrawerLayoutAndroid style={styles.navigationContainer}
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={SidebarScreen}>
      <NavigationContainer independent={true}>
        
      <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          showIcon: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: '#2ff737',
          tabBarStyle:{
            borderRadius: 10,
            height: 55,
          },
          tabBarItemStyle: {
            borderRadius: 20,
          },
          // headerTitle: (props) => ( // App Logo
          //   <Image
          //     style={{ width: 200, height: 50 }}
          //     source={require('../assets/images/app-logo-1.png')}
          //     resizeMode='contain'
          //   />
          // ),
          headerRight: ({ navigation }) => (
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                <Ionicons
                name="md-menu-sharp"
                color="green"
                size={30}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: { color: '#00FF0F'},
      }}>
        <Tab.Screen name="Shebok" component={NavigateScreen}  options={{ 
          tabBarIcon:({focused,color}) => <Ionicons
            name="home-outline"
            focused={focused}
            color={color}
            size={26}
        />}}/>
        <Tab.Screen name="Chat" component={ChatScreen} options={{
          tabBarIcon:({focused,color}) => <Ionicons
            name="md-chatbubble-ellipses-outline"
            focused={focused}
            color={color}
            size={26}
        />,tabBarBadge: 3}}/>
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
          tabBarIcon:({focused,color}) => <Ionicons
            name="ios-cube-outline"
            focused={focused}
            color={color}
            size={26}
        />}}/>
        <Tab.Screen name="Notification" component={NotifyScreen} options={{
          tabBarIcon:({focused,color}) => <Ionicons
            name="reader-outline"
            focused={focused}
            color={color}
            size={26}
        />,tabBarBadge: 3}}/>
        <Tab.Screen name="Account" component={SettingsScreen} options={{
          tabBarIcon:({focused,color}) => <Ionicons
            name="md-person-outline"
            // person-circle
            focused={focused}
            color={color}
            size={26}
        />}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    color: '#00FF0F',
    paddingRight: 15,
  },
});

