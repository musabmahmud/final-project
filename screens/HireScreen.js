import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, TextInput, StyleSheet, Button, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';

function HireScreen({ navigation, route }) {

    const { user } = route.params;


    const [address, setAddress] = useState('');

    const [date1, showDate1] = useState(false);
    const [date2, showDate2] = useState(false);

    let duration = 0;
    let totalCost = 0;
    const [dateResult1, setDate1] = useState('');
    const [dateResult2, setDate2] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [output, setOutput] = useState('');

    if (parseInt(dateResult2.day) >= parseInt(dateResult1.day)) {
        duration = parseInt(dateResult2.day) - parseInt(dateResult1.day) + 1;
        totalCost = duration * 8 * parseInt(user.rate);
    }

    const submitData = () => {
        if (totalCost > 0) {
            fetch('https://final-project-shebok.herokuapp.com/api/hires/post', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        buyerName: "Musab Islam",
                        buyerEmail: "musab@gmail.com",
                        hireName: user.name,
                        hireEmail: user.email,
                        from: dateResult1.dateString,
                        address: address,
                        service: user.service,
                        to: dateResult2.dateString,
                        duration: duration,
                        location: user.location,
                        totalCost: totalCost
                    }
                )
            })
                .then(res => res.json())
                .then(json => setOutput(json))

            fetch('https://final-project-shebok.herokuapp.com/api/notifications/post', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        buyerName: "Sadia Islam",
                        email: user.email,
                        sellerName: user.name,
                        message: "Hired You"
                    }
                )
            })
                .then(res => res.json())
                .then(json => setOutput(json))
            if (output) {
                setSuccess('Succesfully Hired');
                setDate1('');
                setDate2('');
                duration = 0;
                totalCost = 0;
            }
        }
        else {
            setError("Please Provide Valid Date");
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.bodyContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.datebuttonSetting}>
                        <TouchableOpacity onPress={() => showDate1(true)}><Text style={styles.dateButton} >Starting Date</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => showDate2(true)}><Text style={styles.dateButton} >Ending Date</Text></TouchableOpacity>
                    </View>

                    {date1 &&
                        <Calendar
                            markingType={'period'}
                            enableSwipeMonths={true}
                            onDayPress={day => {
                                setDate1(day); showDate1(false)
                            }}
                        />}

                    {date2 &&
                        <Calendar
                            markingType={'period'}
                            enableSwipeMonths={true}
                            onDayPress={day => {
                                setDate2(day); showDate2(false)
                            }}

                            onPress={() => showDate2(false)}
                        />
                    }
                    <View style={styles.info}>
                        <View><Text style={styles.infoText}>User Name : {user.name}</Text></View>
                        <View><Text style={styles.infoText}>Age : {user.age}</Text></View>
                        <View><Text style={styles.infoText}>Service : {user.service}</Text></View>
                        <View><Text style={styles.infoText}>Rate : ৳{user.rate}</Text></View>
                        <View><Text style={styles.infoText}>Starting Date : {dateResult1.dateString}</Text></View>
                        {error ? <View><Text style={styles.infoTextError}>{error}*</Text></View> : null}
                        <View><Text style={styles.infoText}>Ending Date : {dateResult2.dateString}</Text></View>
                        {error ? <View><Text style={styles.infoTextError}>{error}*</Text></View> : null}
                        <View><Text style={styles.infoText}>Duration : {duration} Day (8 Hr/ day)</Text></View>
                        <View><Text style={styles.infoText}>Total Price : ৳{totalCost}</Text></View>
                        <View><Text style={styles.infoText}>Location : dhaka</Text></View>
                    </View>
                    <TextInput placeholder='Full Address' style={styles.input} defaultValue={address} onChangeText={text => setAddress(text)} />

                    <View><Text style={styles.infoTextSuccess}>{success}</Text></View>
                    <TouchableOpacity onPress={submitData}><Text style={styles.submitBotton} >Hire</Text></TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default HireScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        padding: 20,
    },
    datebuttonSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    bodyContent: {
    },
    dateButton: {
        padding: 20,
        backgroundColor: 'blue',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 10,
    },
    input: {
        backgroundColor: '#eaeaea',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
    },
    info: {
        marginTop: 20,
    },
    infoText: {
        fontSize: 20,
        color: '#000'
    },
    infoTextError: {
        paddingVertical: 10,
        color: '#f00'
    },
    infoTextSuccess: {
        paddingVertical: 10,
        color: '#0f0',
        textAlign: 'center',
    },
    submitBotton: {
        paddingVertical: 10,
        marginTop: 50,
        backgroundColor: '#64eb26',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        borderRadius: 10,
    }
})
