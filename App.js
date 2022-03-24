import React, {
  useEffect, useState
} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigateScreen from './screens/NavigateScreen';
import RegisterScreen from './screens/RegisterScreen';

import NotifyScreen from './screens/NotifyScreen';
import ProfileScreen from './screens/ProfileScreen';
import HireScreen from './screens/HireScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/SignInScreen';
import ProfileSetting from './screens/ProfileSetting';

// import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer independent={true}>

      <Stack.Navigator style={styles.container} initialRouteName="SignIn"
      // screenOptions={{headerShown: false,}}
      >
        <Stack.Screen name="Home" options={{ headerShown: false }} component={NavigateScreen} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignInScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
        <Stack.Screen name="Hire" component={HireScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  }
});

