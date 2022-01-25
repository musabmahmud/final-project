import React,{ useState }  from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native'
import { KeyboardAvoidingView } from 'react-native';

import { initializeApp } from 'firebase/app';
import { } from 'firebase/auth';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signOut} from "firebase/auth";

import firebaseConfig from '../firebase.config';

const app = initializeApp(firebaseConfig);
const LoginScreen = ({ navigation }) => {
    const auth = getAuth();

    const [user, setUser] = useState({
        isSignIn: false,
        userName : '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSignIn = () =>{
        if(email && password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const userInfo = {...user};
                console.log(userInfo);
                userInfo.error = '';
                console.log(user.email);
                userInfo.success = true;
                setUser(userInfo);
                navigation.navigate('Home')
                })
                .catch((error) => {
                console.log(error.message);
                const newUserInfo = {...user};
                newUserInfo.error = 'User Already Exists';
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
                <TextInput placeholder='Email' style={styles.input} defaultValue={email} onChangeText={text => setEmail(text)}/>
                
                <TextInput placeholder='Password' style={styles.input} defaultValue={password} onChangeText={text => setPassword(text)} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.preferSign}>Forgot Password?</Text>
            </View>
            <View>
                <Text style={styles.preferSign} onPress={() => navigation.navigate('Signup')}>Don't Have an Account? Sign Up</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
        height: 200,
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
        marginTop: 20,
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
    }
})
