import React,{ useState }  from 'react'
import { StyleSheet,View,ActivityIndicator} from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const LoadingScreen = ({ navigation }) => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigation.navigate('Shebok') 
        // ...
    } else {
        navigation.navigate('Login')
    }
});

    return (
        <View style={styles.container} behavior="padding">
            <ActivityIndicator/>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
    }
})
