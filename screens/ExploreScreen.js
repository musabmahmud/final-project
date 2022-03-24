import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import React, { useState, useEffect } from "react";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExploreScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("male");

    // const [users, setUsers] = useState([]);

    const [gridView, setGridView] = useState(true);
    const [thList, setThList] = useState(false);
    const [gridList, setGridList] = useState(true);

    const setToggle = () => {
        setGridView(true);
        setGridList(true);
        setThList(false);
    }
    const setToggleList = () => {
        setGridView(false);
        setThList(true);
        setGridList(false);
    }


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
        <ScrollView style={styles.scrollService}
            showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.bodyContent}>

                <View style={styles.topBar}>
                    <View style={styles.leftScreen}>
                        <TouchableOpacity onPress={() => setToggle()}>
                            <Icon name="th" style={styles.leftScreenIcon} color={gridList ? "#000" : "#A8A8A8"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setToggleList()}>
                            <Icon name="th-list" style={styles.leftScreenIcon} color={thList ? "#000" : "#A8A8A8"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightScreen}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="All" value="all" />
                            <Picker.Item label="Male" value="men" />
                            <Picker.Item label="Female" value="women" />
                            <Picker.Item label="Student" value="student" />
                        </Picker>
                    </View>
                </View>
                <TextInput placeholder='Search Services . . . . .' style={styles.inputSearch} />
                {/* Grid */}
                {
                    gridView ?
                        <View>
                            {
                                users.map((user) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })} key={user._id}>
                                        <View style={styles.gItems} key={user._id}>
                                            <View style={styles.gBodyLeft}>
                                                <Image source={require('./../assets/user/musab.jpg')} style={styles.gImageBg}
                                                    resizeMode="stretch"
                                                    accessibilityLabel={user.name} />
                                            </View>
                                            <View style={styles.gBodyRight}>
                                                <View style={styles.hItems}>
                                                    <View style={styles.hILeft}>
                                                        <Icon style={styles.hILeftIcon} name="star-o" />
                                                        <Text style={styles.hILeftText}>5.0  (2)</Text>
                                                    </View>
                                                    <View style={styles.hIRight}>
                                                        <Icon style={styles.hIRightIcon} name="heart-o" />
                                                    </View>
                                                </View>
                                                <View style={styles.pbodyHeader}>
                                                    <Text style={styles.pUserNameText}>{user.name}</Text>
                                                    <Text style={styles.age}>Age : {user.age}</Text>
                                                    <Text style={styles.pText}>{user.description}</Text>
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
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        :
                        <View>
                            {
                                users.map((user) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })} key={user._id}>
                                        <View style={styles.pItems}>
                                            <View style={styles.pBodyLeft}>
                                                <Image source={require('./../assets/user/sahin.png')} style={styles.imageBg}
                                                    resizeMode="stretch"
                                                    accessibilityLabel={user.name} />
                                            </View>
                                            <View style={styles.pBodyRight}>
                                                <View style={styles.hItems}>
                                                    <View style={styles.hILeft}>
                                                        <Icon style={styles.hILeftIcon} name="star-o" />
                                                        <Text style={styles.hILeftText}>5.0 (20)</Text>
                                                    </View>
                                                    <View style={styles.hIRight}>
                                                        <Icon style={styles.hIRightIcon} name="heart-o" />
                                                    </View>
                                                </View>
                                                <View style={styles.pbodyHeader}>
                                                    <Text style={styles.pTextHeaderGrid}>{user.name} ({user.age})</Text>
                                                    <Text style={styles.pTextGrid}>{user.description}</Text>
                                                </View>
                                                <View style={styles.footerBottom}>
                                                    <View style={styles.gBottom}>
                                                        <Text style={styles.bFrom}>Jobs</Text>
                                                        <Text style={styles.hPrice}>{user.jobs}</Text>
                                                    </View>
                                                    <View style={styles.gBottom}>
                                                        <Text style={styles.bFrom}>Rate</Text>
                                                        <Text style={styles.hPrice}>৳{user.rate}/hr</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                        </View>
                }
            </View>
        </ScrollView>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    bodyContent: {
        // backgroundColor: '#fff',
        height: '100%',
        backgroundColor: '#FFFF99',
        paddingLeft: 10,
        paddingRight: 10,
    },
    topBar: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    leftScreen: {
        flexDirection: 'row',
    },
    rightScreen: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: -10,
    },
    leftScreenIcon: {
        fontSize: 26,
        paddingRight: 10,
    },
    inputSearch: {
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 20,
        borderRadius: 10,
        textTransform: 'uppercase',
        height: 50,
        backgroundColor: 'white',
        elevation: 2,
        shadowColor: '#eaeaea',
    },
    pItems: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        shadowColor: '#eaeaea',
        marginBottom: 12,
        overflow: 'hidden',
    },
    pBodyLeft: {
        width: '35%',
    },
    pBodyRight: {
        width: '65%',
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageBg: {
        width: '100%',
        height: 140,
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
        marginRight: 5,
        fontSize: 16,
    },
    hILeftText: {
        lineHeight: 18,
    },
    hIRightIcon: {
        color: 'gray',
        fontSize: 14,
    },
    pbodyHeader: {
        position: 'relative',
    },
    pText: {
        fontSize: 16,
    },
    pTextGrid: {
        paddingTop: 5,
        fontSize: 12,
        height: 35,
    },
    pTextHeader: {
        fontSize: 20,
        fontWeight: '900',
        color: '#2ff737',
    },
    pTextHeaderGrid: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: '900',
        color: '#2ff737',
    },
    gItems: {
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#eaeaea',
        marginBottom: 20,
        overflow: 'hidden',
    },
    gBodyLeft: {
        width: '100%',
    },
    gBodyRight: {
        padding: 15,
    },
    gImageBg: {
        width: '100%',
        height: 300,
    },
    footerBottom: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gBottom: {
        textAlign: 'center'
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
    },
    age: {
        color: 'gray',
        paddingBottom: 5,
    },
});
