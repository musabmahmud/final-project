import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    StatusBar,
    ScrollView,
    Alert
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation }) => {

    const url = "https://final-project-shebok.herokuapp.com/api/accounts/signup";

    const[name,setName] = useState('');
    const[role,setRole] = useState('');

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/;

    const handlePasswordChange = (val) => {
        if (checkPass.test(val) === true) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleValidUser = (val) => {
        if (reg.test(val) === true) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const [user, setUser] = useState('');

    const signUpHandle = () => {

        if (data.username.length == 0 || data.password.length == 0 || role === ''|| name === '') {
            Alert.alert('Wrong Input!', 'Every field must not be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: data.username,
                password: data.password,
                role: role,
            }),
        })
            .then(response => response.json())
            .then((data) => setUser(data))

        if (user === '') {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        if (user) {
            setData({
                ...data,
                username: '',
                password: '',
            });
            setRole('');
            setName('');
        }
    }

    return (

        <ScrollView style={styles.bodyContent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor='#00FF0F' barStyle="light-content" />
                <View style={styles.header}>

                    <Image source={require('./../assets/m_icon.png')} resizeMode="stretch" style={styles.thumbImage} />
                    <Text style={styles.text_header}>Welcome To Shebok!</Text>
                    <Text style={styles.text_header}>Sign In</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: "#fff"
                    }]}
                >
                    <Text style={[styles.text_footer]}>Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Name"
                            placeholderTextColor="#666666"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            defaultValue={name} 
                            onChangeText={text => setName(text)} 
                            // onChangeText={(val) => textInputChange(val)}
                            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    <Text style={[styles.text_footer]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope-o"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Email"
                            placeholderTextColor="#666666"
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Valid Email Required</Text>
                        </Animatable.View>
                    }


                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must contain uppercase, lowercase, special characters and number.</Text>
                        </Animatable.View>
                    }



                    <Text style={[styles.text_footer]}>Role</Text>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={role}
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                        >
                            <Picker.Item label="Select User Option" value="" />
                            <Picker.Item label="Buyer" value="buyer" />
                            <Picker.Item label="Service Provider" value="service" />
                        </Picker>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ color: '#2e2e2e', marginTop: 15 }}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                borderColor: '#00FF0F',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                            onPress={() => signUpHandle()}
                        ><Text style={[styles.textSign, {
                            color: '#00FF0F'
                        }]}>Sign Up</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                            style={[{
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textNavigate, {
                                color: '#000'
                            }]}>Already Have Account! Sign In?</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FF0F',
    },
    thumbImage: {
        width: '70%',
        height: 200,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 20,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },textNavigate:{
        fontSize: 14,
    }
});