import React,{ useState } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import Icon from 'react-native-fa-icons';
import { initializeApp } from 'firebase/app';
import { } from 'firebase/auth';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signOut} from "firebase/auth";

import firebaseConfig from '../firebase.config';

const app = initializeApp(firebaseConfig);
const RegisterScreen = ({ navigation } ) => {

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    
    const [user, setUser] = useState({
        isSignIn: false,
        userName : '',
        email: '',
        password: '',
        error: 'Email Already Exists',
        success: false
    })



    const handleSignUp = () =>{
        if(email && password){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUserInfo = {...user};
                console.log(newUserInfo);
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
              })
              .catch((error) => {
                console.log(error.message);
                const newUserInfo = {...user};
                newUserInfo.error = 'Email Already Exists';
                newUserInfo.success = false;
                newUserInfo.isSignIn = false;
                setUser(newUserInfo);
              });
        }
    }

    return (
        
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <Image style={styles.logo} source={require('./../assets/logo.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' style={styles.input} onChangeText={text => setEmail(text)}/>
                
                <TextInput placeholder='Password' style={styles.input} onChangeText={text => setPassword(text)} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
                {user.error ? <Text style={styles.error}>{user.error} 
<Icon name="address-book" style={{ fontSize: 45, color: 'green' }} /></Text> : null}
            </View>
            <View style={styles.signupText}>
                <Text style={styles.preferSign} onPress={() => navigation.navigate('Login')}>Already Have an Account? Login Here</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
    },
    inputContainer:{
        width: '90%',
    },
    logo:{
        marginBottom: 20,
        width: '100%',
        height: 100,
        justifyContent: "center",
        resizeMode: 'cover'
    }, 
    input:{
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
    buttonContainer:{
        width: '90%',
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "space-between",
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#dcdee8',
    },
    button:{
        backgroundColor: '#5062eb',
        borderRadius: 5,
        paddingHorizontal: 2,
        paddingVertical: 5,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        color: 'white'
    },
    preferSign:{
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 12,
    },
    signupText: { 
        color: 'blue'
    },
    error:{
        textAlign: 'center',
        justifyContent: 'space-between',
        fontSize: 12,
        marginTop: 10,
        backgroundColor: '#ff0',
        padding: 5,
        borderRadius: 5,
        color: '#000'
    }
})
