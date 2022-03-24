import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, ActivityIndicator, TextInput, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';




const ProfileSetting = ({ navigation }) => {
    let userEmail = "musab@gmail.com";
    const [user, setUser] = useState([]);

    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [service, setService] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [nid, setNid] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDes] = useState('');

    useEffect(() => {
        fetch("https://final-project-shebok.herokuapp.com/api/users/data", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: userEmail,
                }
            )
        })
            .then(res => res.json())
            .then(json => setUser(json))

        setName(user.name)
        setRate(user.rate)
        setService(user.service)
        setSex(user.sex)
        setAge(user.age)
        setNid(user.nid)
        setPhone(user.phone)
        setDes(user.description)

    }, []);

    const handleSignIn = () => {
        fetch("https://final-project-shebok.herokuapp.com/api/users/update", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: userEmail,
                    name: name,
                    rate: rate,
                    service: service,
                    sex: sex,
                    age: age,
                    nid: nid,
                    phone: phone,
                    description: description
                }
            )
        })
            .then(res => res.json())
            .then(json => setUser(json))
    }

    return (
        <ScrollView style={styles.settingBody} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.settingBefore}>
                <View style={styles.sHeader}>
                    <View style={styles.userProfile}>
                        <Image source={require('./../assets/user/musab.jpg')} style={styles.userImage} accessibilityLabel="asdlf" />
                    </View>
                </View>
                <View style={styles.sBody}>

                    <TextInput placeholder='Name' style={styles.input} defaultValue={name} onChangeText={text => setName(text)} />
                    <TextInput placeholder='Rate' style={styles.input} defaultValue={rate} onChangeText={text => setRate(text)} />
                    <TextInput placeholder='Service' style={styles.input} defaultValue={service} onChangeText={text => setService(text)} />
                    <TextInput placeholder='Gender' style={styles.input} defaultValue={sex} onChangeText={text => setSex(text)} />
                    <TextInput placeholder='Age' style={styles.input} defaultValue={age} onChangeText={text => setAge(text)} />
                    <TextInput placeholder='Nid' style={styles.input} defaultValue={nid} onChangeText={text => setNid(text)} />
                    <TextInput placeholder='Phone' style={styles.input} defaultValue={phone} onChangeText={text => setPhone(text)} />
                    <TextInput placeholder='Your Description' style={styles.input} defaultValue={description} onChangeText={text => setDes(text)} />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => handleSignIn()}>
                    <Text style={styles.submitText}>Update Setting</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ProfileSetting
const styles = StyleSheet.create({
    settingBody: {
        backgroundColor: '#fff',
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    sHeader: {

    },
    submitText: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#000',
        color: '#fff',
    },
    sHeaderImage: {
        width: '100%',
        height: 200,
    },
    userProfile: {
        alignItems: 'center',
        paddingTop: 25,
    },
    userImage: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    userName: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },
    userButton: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 20,
        color: '#fff',
        marginTop: 10,
        textTransform: 'capitalize',
        fontWeight: '700',
        position: 'relative',
    },
    sBody: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 30,
        shadowColor: '#000',
    },
    input: {
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
})