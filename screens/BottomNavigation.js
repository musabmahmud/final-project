import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from './ChatScreen';
import SearchScreen from './SearchScreen';
import NotifyScreen from './NotifyScreen';
import UserScreen from './UserScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <></>
    //   <Tab.Navigator screenOptions={{
    //       tabBarShowLabel: false,
    //       headerShown:false,
    //       showIcon: true,
    //       tabBarActiveTintColor: "#00ff00",
    //       tabBarInactiveTintColor: "gray",
    //   }}>
    //     <Tab.Screen name="Home" component={HomeScreen}  options={{ 
    //       tabBarIcon:({focused,color}) => <Ionicons
    //         name="home"
    //         focused={focused}
    //         color={color}
    //         size={24}
    //     />}}/>
    //     <Tab.Screen name="Chat" component={ChatScreen} options={{
    //       tabBarIcon:({focused,color}) => <Ionicons
    //         name="md-chatbox-outline"
    //         focused={focused}
    //         color={color}
    //         size={30}
    //     />,tabBarBadge: 3}}/>
    //     <Tab.Screen name="Search" component={SearchScreen} options={{
    //       tabBarIcon:({focused,color}) => <Ionicons
    //         name="md-search"
    //         focused={focused}
    //         color={color}
    //         size={30}
    //     />}}/>
    //     <Tab.Screen name="Notification" component={NotifyScreen} options={{
    //       tabBarIcon:({focused,color}) => <Ionicons
    //         name="notifications-outline"
    //         focused={focused}
    //         color={color}
    //         size={30}
    //     />,tabBarBadge: 3}}/>
    //     <Tab.Screen name="Settings" component={UserScreen} options={{
    //       tabBarIcon:({focused,color}) => <Ionicons
    //         name="person-circle"
    //         focused={focused}
    //         color={color}
    //         size={30}
    //     />,tabBarBadge: 3}}/>
    //   </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})