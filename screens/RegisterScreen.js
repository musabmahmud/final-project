import React,{ useState } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';

import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signOut} from "firebase/auth";
import firebaseConfig from '../firebase.config';

const app = initializeApp(firebaseConfig);

const RegisterScreen = ({ navigation } ) => {

    const provider = new GoogleAuthProvider();

    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    
    const [user, setUser] = useState({
        isSignIn: false,
        email: '',
        error: '',
        msg: '',
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
                newUserInfo.msg = 'Successfully Created';
                newUserInfo.success = true;
                fixUserInfo.error = '';
                setUser(newUserInfo);
              })
              .catch((error) => {
                console.log(error.message);
                const fixUserInfo = {...user};
                fixUserInfo.msg = '';
                fixUserInfo.error = 'Email Already Exists';
                fixUserInfo.success = false;
                setUser(fixUserInfo);
              });
        }
    }

    const handleGoogle = () =>{
        const auth = getAuth();
      }

    return (
        
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Text style={styles.known}>Shabok Registration</Text>
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.logo} source={require('./../assets/logo.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' style={styles.input} onChangeText={text => setEmail(text)}/>
                
                <TextInput placeholder='Password' style={styles.input} onChangeText={text => setPassword(text)} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
                {user.msg ? <Text style={styles.msg}>{user.msg}</Text> : null}
                {user.error ? <Text style={styles.error}>{user.error}</Text> : null}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonGoogle} onPress={()=>handleGoogle()}>
                    <Text style={styles.buttonGoogle}>Sign Up with Google</Text>
                </TouchableOpacity>
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
    known:{
        marginVertical: 10,
        fontSize: 36,
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
    buttonGoogle:{
        backgroundColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 2,
        paddingVertical: 5,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#fff'
    },
    preferSign:{
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 12,
    },
    signupText: { 
        color: 'blue'
    },
    msg:{
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#4dff00',
        padding: 5,
        borderRadius: 5,
        color: '#000'
    },
    error:{
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#ff0',
        padding: 5,
        borderRadius: 5,
        color: '#000'
    }
})
