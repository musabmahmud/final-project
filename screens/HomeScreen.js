import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {

    const url = "https://final-project-shebok.herokuapp.com/api/getusers";

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers(data));

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <>
            <ScrollView style={styles.bodyContent}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <View style={styles.thumb}>
                        <TouchableOpacity style={styles.thumbBody} onPress={() =>
                            navigation.navigate('Donation')}>
                            <ImageBackground source={require('./../assets/food/10.jpg')} resizeMode="stretch" style={styles.thumbImage}>
                                <Text style={styles.thumbText}>Donate Food</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbBody} onPress={() =>
                            navigation.navigate('Explore')}>
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
                    <ScrollView style={styles.scrollService}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.gigsView}>
                            {users.map((user) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })} key={user._id}>
                                       
                                <View style={styles.pItems} key={user._id}>
                                    <Image source={require('./../assets/user/musab.jpg')} style={styles.imageBg} accessibilityLabel="asdlf" />
                                    <View style={styles.pBody}>
                                        <View style={styles.hItems}>
                                            <View style={styles.hILeft}>
                                                <Icon style={styles.hILeftIcon} name="star-o" />
                                                <Text style={styles.hILeftText}>5.0  (4)</Text>
                                            </View>
                                            <View style={styles.hIRight}>
                                                <Icon style={styles.hIRightIcon} name="heart-o" />
                                            </View>
                                        </View>
                                        <Text style={styles.pUserNameText}>{user.name}</Text>
                                        <Text style={styles.age}>Age : {user.age}</Text>
                                        <Text style={styles.pText}>{user.description}</Text>

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
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 10,
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#eaeaea',
    },
    fullBody: {
    },
    bodyContent: {
        backgroundColor: '#FFFF99',
    },
    searchBar: {
        position: 'relative',
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
        height: 220,
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
    scrollService: {

    },
    gigsView: {
        flexDirection: 'row',
    },
    exploreBody: {
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exploreButton: {
        // paddingLeft: 50,
        // paddingRight: 50,
        // paddingTop: 10,
        // paddingBottom: 10,
        // borderRadius: 20,
        fontSize: 26,
        color: '#fff',
        textTransform: 'uppercase',
    },

    pItems: {
        position: 'relative',
        backgroundColor: "#fff",
        width: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
        marginTop: 2,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#eaeaea',
    },
    imageBg: {
        width: '100%',
        height: 150,
    },
    hItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hILeft: {
        flexDirection: 'row',
    },
    hILeftIcon: {
        color: 'gold',
        marginRight: 10,
        fontSize: 16,
    },
    hILeftText: {
        lineHeight: 17,
    },
    hIRightIcon: {
        color: 'gray',
        fontSize: 14,
    },
    pBody: {
        padding: 10,
    },
    pUserNameText: {
        paddingTop: 5,
        color: '#64eb26',
    },
    pText: {
        textAlign: 'justify',
        paddingTop: 2,
        paddingBottom: 10,
        height: 50,
    },
    footerBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gBottom: {
        textAlign: 'center'
    },
    age:{
        color: 'gray',
    },
    bFrom: {
        color: 'gray',
        textAlign: 'center'
    },
    bPrice:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})
