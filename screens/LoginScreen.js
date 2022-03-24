import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'

const LoginScreen = ({ navigation }) => {

    const [user, setUser] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (email && password) {
            console.log("Musab")
        }
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.logoView}>
                    <Image source={require('./../assets/logo.png')} resizeMode="stretch" style={styles.thumbImage} />
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email' style={styles.input} defaultValue={email} onChangeText={text => setEmail(text)} />

                        <TextInput placeholder='Password' style={styles.input} defaultValue={password} onChangeText={text => setPassword(text)} secureTextEntry />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.submitButton} onPress={handleSignIn}>
                            <Text style={styles.submitText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonGoogle}>
                            <Text style={styles.buttonGoogle}>Sign In with Google</Text>
                        </TouchableOpacity>
                        <Text style={styles.preferSign}>Forgot Password?</Text>
                        <Text style={styles.preferSign} onPress={() => navigation.navigate('SignUp')}>Don't Have an Account? Sign Up</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    known: {
        paddingBottom: 10,
        fontSize: 36,
    },
    inputContainer: {
        width: '100%',
    },
    thumbImage: {
        width: '70%',
        height: 200,
    },
    logoView: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginVertical: 10,
        width: '100%',
        height: 200,
        justifyContent: "center",
        resizeMode: 'cover'
    },
    input: {
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
        textAlign: 'center',
    },
    submitButton: {
        borderRadius: 50,
        marginTop: 10,
        backgroundColor: '#2ff737',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        elevation: 2,
        shadowColor: '#171717',
    },
    submitText: {
        color: '#fff',
        fontWeight: '700',
    },
    buttonGoogle: {
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#000',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        color: '#fff',
        shadowColor: '#171717',
    },
    preferSign: {
        color: '#000',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10,
    }
})
