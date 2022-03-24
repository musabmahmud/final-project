import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground,SafeAreaView, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = ({ navigation, route }) => {

    const { user } = route.params;

    return (
        <>
                <SafeAreaView>
                <View style={styles.container}>
                    
                <ScrollView style={styles.bodyContent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.gItems}>
                        <ImageBackground source={require('./../assets/user/musab.jpg')} resizeMode="cover" style={styles.profilePic}>
                        </ImageBackground>
                        <View style={styles.gBodyRight}>
                            <View style={styles.hItems}>
                                <View style={styles.pbodyHeader}>
                                    <Text style={styles.pUserNameText}>{user.name}</Text>
                                    <Text style={styles.age}>Age : {user.age}</Text>
                                    <Text style={styles.age}>Service : Home Care</Text>
                                    <Text style={styles.pText}>{user.description}</Text>
                                </View>
                            </View>

                            <View style={styles.footerBottom}>
                                <View style={styles.gBottom}>
                                    <Text style={styles.bFrom}>Jobs</Text>
                                    <Text style={styles.bPrice}>{user.jobs}</Text>
                                </View>
                                <View style={styles.gBottom}>
                                    <Text style={styles.bFrom}>Rate</Text>
                                    <Text style={styles.bPrice}>৳{user.rate}/hr</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.reviewOption}>
                        <Text style={styles.reviewText}>Reviews</Text>
                        <View style={styles.reviewCard}>
                            <View style={styles.reviewCardContent}>
                                <View style={styles.reviewImagebg}>
                                    <Image source={require('./../assets/user/sahin.png')} style={styles.reviewImage}
                                        resizeMode="stretch"
                                        accessibilityLabel="asdfklf" />
                                </View>
                                <View style={styles.pBodyRight}>
                                    <View style={styles.hItems}>
                                        <View style={styles.hILeft}>
                                            <Text style={styles.pTextHeaderGrid}>asdfasdffs</Text>
                                        </View>
                                        <View style={styles.hIRight}>
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                        </View>
                                    </View>
                                    <View style={styles.pbodyHeader}>
                                        <Text style={styles.pTextGrid}>Lorem ipsum dolor sit amet consectetur</Text>
                                    </View>
                                </View>
                            </View><View style={styles.reviewCardContent}>
                                <View style={styles.reviewImagebg}>
                                    <Image source={require('./../assets/user/sahin.png')} style={styles.reviewImage}
                                        resizeMode="stretch"
                                        accessibilityLabel="asdfklf" />
                                </View>
                                <View style={styles.pBodyRight}>
                                    <View style={styles.hItems}>
                                        <View style={styles.hILeft}>
                                            <Text style={styles.pTextHeaderGrid}>asdfasdffs</Text>
                                        </View>
                                        <View style={styles.hIRight}>
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                        </View>
                                    </View>
                                    <View style={styles.pbodyHeader}>
                                        <Text style={styles.pTextGrid}>Lorem ipsum dolor sit amet consectetur</Text>
                                    </View>
                                </View>
                            </View><View style={styles.reviewCardContent}>
                                <View style={styles.reviewImagebg}>
                                    <Image source={require('./../assets/user/sahin.png')} style={styles.reviewImage}
                                        resizeMode="stretch"
                                        accessibilityLabel="asdfklf" />
                                </View>
                                <View style={styles.pBodyRight}>
                                    <View style={styles.hItems}>
                                        <View style={styles.hILeft}>
                                            <Text style={styles.pTextHeaderGrid}>asdfasdffs</Text>
                                        </View>
                                        <View style={styles.hIRight}>
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                            <Icon style={styles.hILeftIcon} name="star" />
                                        </View>
                                    </View>
                                    <View style={styles.pbodyHeader}>
                                        <Text style={styles.pTextGrid}>Lorem ipsum dolor sit amet consectetur</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                    <View style={styles.footerBody}>
                        <View style={styles.footerContentBody}>
                            <TouchableOpacity style={styles.footerCItemL} onPress={()=> navigation.navigate('Chat',{user})}>
                                <Text style={styles.fcitem}>Inbox</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.footerCItemR} onPress={()=> navigation.navigate('Hire',{user})}>
                                <Text style={styles.fcitem}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </SafeAreaView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    bodyContent: {
        backgroundColor: '#FFF',
    },
    profilePic: {
        width: '100%',
        height: 350,
    },
    hIRight: {
        flexDirection: 'row',
    },
    hIRightIcon: {
        fontSize: 20,
        color: 'red'
    },
    hItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    footerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    gBodyRight: {
        padding: 10,
    },
    gBottom: {
        textAlign: 'center',
        paddingBottom: 10
    },
    pText: {
        textAlign: 'justify'
    },
    age: {
        color: 'gray',
    },
    bFrom: {
        color: 'gray',
        textAlign: 'center'
    },
    bPrice: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    hPrice: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    pUserNameText: {
        fontSize: 22,
        color: '#64eb26',
        textTransform: 'capitalize',
    },
    age: {
        color: 'gray',
        paddingBottom: 5,
    },
    reviewOption: {
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
    },
    reviewText: {
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    reviewCard: {},
    reviewCardContent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        margin: 10,
        shadowColor: '#eaeaea',
        overflow: 'hidden',
    },
    reviewImagebg: {
        width: '30%',
        height: 100,
        padding: 10,
    },
    reviewImage: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    pBodyRight: {
        width: '70%',
        paddingVertical: 10,
        paddingRight: 10,
    },
    hItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hILeft: {
        flexDirection: 'row',
    },
    pTextHeaderGrid: {
        fontSize: 14,
        fontWeight: '900',
        color: '#2ff737',
    },
    hILeftIcon: {
        color: 'gold',
        marginLeft: 2,
        fontSize: 16,
    },
    pTextGrid: {
        marginTop: 5,
        textAlign: 'justify',
    },
    footerBody:{   
        width: '100%',
        position:'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    footerContentBody:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    footerCItemL:{
        backgroundColor: 'blue',
        width:'50%',
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerCItemR:{
        backgroundColor: '#2ff737',
        width:'50%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    fcitem:{
        color:'#fff',
        fontWeight: 'bold'
    }

})
