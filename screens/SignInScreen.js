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
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({ navigation }) => {

    const url = "https://final-project-shebok.herokuapp.com/api/accounts/signin";

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

    const loginHandle = (username, password) => {
        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } );

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
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
                email: username,
                password: password
            }),
        })
            .then(response => response.json())
            .then((data) => setUser(data))

        if (!user) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        else {
            setData({
                ...data,
                username: '',
                password: '',
            })
            navigation.navigate('Home', {user})
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
                    <Text style={[styles.text_footer]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
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
                            onPress={() => { loginHandle(data.username, data.password) }}
                            // onPress={() => { navigation.navigate('Home'); }}
                            
            
                        ><Text style={[styles.textSign, {
                            color: '#00FF0F'
                        }]}>Sign In</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                            style={[{
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textNavigate, {
                                color: '#000'
                            }]}>Haven't any Account! Sign Up?</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;

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
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
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