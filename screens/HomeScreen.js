import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, TouchableOpacity, Button } from 'react-native'
import Gigs from './Gigs';

const HomeScreen = ({ navigation }) => {

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.bodyContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {/* <TextInput placeholder='Search Services . . . . .' style={styles.inputSearch} /> */}
                    <View style={styles.thumb}>
                        <TouchableOpacity style={styles.thumbBody} onPress={() =>
                            navigation.navigate('Donation')}>
                            <ImageBackground source={require('./../assets/food/10.jpg')} resizeMode="stretch" style={styles.thumbImage}>
                                <Text style={styles.thumbText}>Donate Food</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbBody} onPress={() =>
                            navigation.navigate('Service')}>
                            <ImageBackground source={require('./../assets/hire/10.jpg')} resizeMode="cover" style={styles.thumbImage}>
                                <Text style={styles.thumbText}>Hire Nurse</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <ImageBackground source={require('./../assets/bg.jpg')} resizeMode="stretch" style={styles.bgImage}>
                        <View style={styles.exploreBody} >
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Explore')}><Text style={styles.exploreButton}>Explore More</Text>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.gigs}>
                        <ScrollView style={styles.scrollService}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}>
                            <Gigs />
                            <Gigs />
                            <Gigs />
                            <Gigs />
                            <Gigs />
                            <Gigs />
                            <Gigs />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#eaeaea',
    },
    fullBody: {
    },
    bodyContent: {
        padding: 10,
        backgroundColor: '#FFFF99',
    },
    searchBar: {
        position: 'relative',
    },
    inputSearch: {
        marginBottom: 10,
        paddingLeft: 20,
        borderRadius: 10,
        textTransform: 'uppercase',
        height: 50,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: '#eaeaea',
    },
    thumb: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    thumbBody: {
        width: '48%',
        borderRadius: 10,
        overflow: 'hidden',
        height: 150,
        position: 'relative'
    },
    thumbImage: {
        height: 150,
    },
    thumbText: {
        position: 'absolute',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        bottom: 0,
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'rgba(0,0,0,.7)',
    },
    bgImage: {
        marginTop: 5,
        marginBottom: 15,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgText: {
        justifyContent: 'center',
        marginTop: 200,
        textAlign: 'center',
        fontSize: 48,
        color: '#64eb26',
    },
    gigs: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    exploreBody:{
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exploreButton:{
        // paddingLeft: 50,
        // paddingRight: 50,
        // paddingTop: 10,
        // paddingBottom: 10,
        // borderRadius: 20,
        fontSize: 26,
        color: '#fff',
        textTransform: 'uppercase',
    }
})
