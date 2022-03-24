import React, { useRef } from "react";
// import { StatusBar } from 'expo-status-bar';

import { StyleSheet, TouchableOpacity, DrawerLayoutAndroid, View, ActivityIndicator } from 'react-native';

import SidebarScreen from "./SidebarScreen";
import ChatScreen from "./ChatScreen";
import HomeScreen from "./HomeScreen";
import NotifyScreen from "./NotifyScreen";
import SettingsScreen from "./SettingsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from "./ExploreScreen";

const Tab = createBottomTabNavigator();

const NavigateScreen = ({ navigation, route }) => {

  
  const { user } = route.params;

  const drawer = useRef(true);

  return (


    // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={300}
    //   drawerPosition="left"
    //   renderNavigationView={SidebarScreen}>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        showIcon: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: '#2ff737',
        tabBarStyle: {
          height: 55,
        },
        tabBarItemStyle: {
          borderRadius: 10,
        },

        // headerTitle: (props) => ( 
        //   <Image
        //     style={{ width: 200, height: 50 }}
        //     source={require('./assets/logo.png')}
        //     resizeMode='contain'
        //   />
        // ),
        // headerTitleStyle: { flex: 1, textAlign: 'center' },

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
        headerTitleStyle: { color: '#00FF0F' },
      }}>

        <Tab.Screen name="Shebok"
          component={HomeScreen} options={{
            tabBarIcon: ({ focused, color }) => <Ionicons
              name="home-outline"
              focused={focused}
              color={color}
              size={26}
            />
          }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{
          tabBarIcon: ({ focused, color }) => <Ionicons
            name="md-chatbubble-ellipses-outline"
            focused={focused}
            color={color}
            size={26}
          />, tabBarBadge: 3
        }} />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
          tabBarIcon: ({ focused, color }) => <Ionicons
            name="ios-cube-outline"
            focused={focused}
            color={color}
            size={26}
          />
        }} />
        <Tab.Screen name="Notification" component={NotifyScreen} options={{
          tabBarIcon: ({ focused, color }) => <Ionicons
            name="reader-outline"
            focused={focused}
            color={color}
            size={26}
          />, tabBarBadge: 3
        }} />
        <Tab.Screen name="Account" component={SettingsScreen} options={{
          tabBarIcon: ({ focused, color }) => <Ionicons
            name="md-person-outline"
            // person-circle
            focused={focused}
            color={color}
            size={26}
          />
        }} />

      </Tab.Navigator>

    // </DrawerLayoutAndroid>
  )
}

export default NavigateScreen

const styles = StyleSheet.create({
  headerIcon: {
    color: '#00FF0F',
    paddingRight: 15,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
})