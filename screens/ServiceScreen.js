import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import SgigScreen from './SgigScreen'

const ServiceScreen = ({ navigation }) => {
    return (
        <View style={styles.bodyContent}>
            <ScrollView style={styles.scrollService}
                // vertical={true}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                <View style={styles.serviceBody}>
                    <SgigScreen/>
                    <SgigScreen/>
                </View>
                
            </ScrollView>
        </View>
    )
}

export default ServiceScreen

const styles = StyleSheet.create({
    bodyContent: {
        backgroundColor: '#FFFF99',
        flex: 1,
        elevation: 2,
        shadowColor: '#eaeaea',
    },
    scrollService: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
    },
    serviceBody:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})