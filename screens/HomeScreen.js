import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
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
                {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.preferSign}>Already Have an Account?</Text><Text  onPress={() => navigation.navigate('Signup')}> Login Here</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
