import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const ExploreScreen = () => {
    return (

        <View style={styles.bodyContent}>
            <ScrollView style={styles.scrollService}
                // vertical={true}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}>

                <View style={styles.pItems}>
                    <View style={styles.pBodyLeft}>
                        <Image source={require('./../assets/gig/1.jpg')} style={styles.imageBg} 
                        resizeMode="stretch"
                        accessibilityLabel="asdlf" />
                    </View>
                    <View style={styles.pBodyRight}>
                        <View style={styles.hItems}>
                            <View style={styles.hILeft}>
                                <Icon style={styles.hILeftIcon} name="star-o" />
                                <Text style={styles.hILeftText}>5.0  (4)</Text>
                            </View>
                            <View style={styles.hIRight}>
                                <Icon style={styles.hIRightIcon} name="heart-o" />
                            </View>
                        </View>
                        <View style={styles.pbodyHeader}><Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis</Text></View>
                        <View style={styles.gBottom}>

                            <Text style={styles.bFrom}>From </Text>
                            <Text style={styles.bPrice}>$70</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pItems}>
                    <View style={styles.pBodyLeft}>
                        <Image source={require('./../assets/gig/2.jpg')} style={styles.imageBg} 
                        resizeMode="stretch"
                        accessibilityLabel="asdlf" />
                    </View>
                    <View style={styles.pBodyRight}>
                        <View style={styles.hItems}>
                            <View style={styles.hILeft}>
                                <Icon style={styles.hILeftIcon} name="star-o" />
                                <Text style={styles.hILeftText}>5.0  (4)</Text>
                            </View>
                            <View style={styles.hIRight}>
                                <Icon style={styles.hIRightIcon} name="heart-o" />
                            </View>
                        </View>
                        <View style={styles.pbodyHeader}><Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis</Text></View>
                        <View style={styles.gBottom}>

                            <Text style={styles.bFrom}>From </Text>
                            <Text style={styles.bPrice}>$70</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pItems}>
                    <View style={styles.pBodyLeft}>
                        <Image source={require('./../assets/gig/1.jpg')} style={styles.imageBg} 
                        resizeMode="stretch"
                        accessibilityLabel="asdlf" />
                    </View>
                    <View style={styles.pBodyRight}>
                        <View style={styles.hItems}>
                            <View style={styles.hILeft}>
                                <Icon style={styles.hILeftIcon} name="star-o" />
                                <Text style={styles.hILeftText}>5.0  (4)</Text>
                            </View>
                            <View style={styles.hIRight}>
                                <Icon style={styles.hIRightIcon} name="heart-o" />
                            </View>
                        </View>
                        <View style={styles.pbodyHeader}><Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis</Text></View>
                        <View style={styles.gBottom}>

                            <Text style={styles.bFrom}>From </Text>
                            <Text style={styles.bPrice}>$70</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pItems}>
                    <View style={styles.pBodyLeft}>
                        <Image source={require('./../assets/gig/2.jpg')} style={styles.imageBg} 
                        resizeMode="stretch"
                        accessibilityLabel="asdlf" />
                    </View>
                    <View style={styles.pBodyRight}>
                        <View style={styles.hItems}>
                            <View style={styles.hILeft}>
                                <Icon style={styles.hILeftIcon} name="star-o" />
                                <Text style={styles.hILeftText}>5.0  (4)</Text>
                            </View>
                            <View style={styles.hIRight}>
                                <Icon style={styles.hIRightIcon} name="heart-o" />
                            </View>
                        </View>
                        <View style={styles.pbodyHeader}><Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis</Text></View>
                        <View style={styles.gBottom}>

                            <Text style={styles.bFrom}>From </Text>
                            <Text style={styles.bPrice}>$70</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    bodyContent: {
        backgroundColor: '#fff',
    },
    scrollService: {

    },
    pItems: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        shadowColor: '#eaeaea',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        overflow:'hidden',
    },
    pBodyLeft:{
        width: '40%',
    },
    pBodyRight:{
        width: '60%',
        padding: 15,
    },
    imageBg: {
        width: '100%',
        height: 120,
    },
    hItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
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
    pbodyHeader:{
        position:'relative',
        top: 0,
    },
    pText: {
        fontSize: 12,
    },
    gBottom: {
        flexDirection: "row",
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 10,
        right: 15,

    },
    bFrom: {
        color: 'gray'
    },
});