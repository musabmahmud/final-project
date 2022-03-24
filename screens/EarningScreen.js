import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
const EarningScreen = ({ navigation, route }) => {

    const { user } = route.params;

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.bodyContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <View>Total Price : </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default EarningScreen

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
    footerBody: {
        width: '100%',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    footerContentBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerCItemL: {
        backgroundColor: 'blue',
        width: '50%',
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerCItemR: {
        backgroundColor: '#2ff737',
        width: '50%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    fcitem: {
        color: '#fff',
        fontWeight: 'bold'
    }

})
