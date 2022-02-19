import { StyleSheet, ImageBackground, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.sidebarBody} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={styles.sHeader}>
        <ImageBackground source={require('./../assets/background/4.png')} resizeMode="stretch" style={styles.sHeaderImage}>
          <View style={styles.userProfile}>
            <Image source={require('./../assets/user/3.jpg')} style={styles.userImage} accessibilityLabel="asdlf" />
            <Text style={styles.userName}>MD Musab MAHMUD</Text>
            <Text style={styles.userButton}>Edit Profile
            </Text>
            {/*  */}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sBody}>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="user" /><Text style={styles.sbItemLeftText}>My Profile</Text>
            </View>
            <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="dollar" /><Text style={styles.sbItemLeftText}>Earnings</Text>
            </View>
            <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="cog" /><Text style={styles.sbItemLeftText}>Settings</Text>
            </View>
            <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="share" /><Text style={styles.sbItemLeftText}>Invite Friends</Text>
            </View>
            <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="share-alt" /><Text style={styles.sbItemLeftText}>Share Your Gigs</Text>
            </View>
            <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbItemTouch}>
          <View style={styles.sbItems}>
            <View style={styles.sbItemLeft}>
              <Icon style={styles.sbItemLeftIcon} name="sign-out" /><Text style={styles.sbItemLeftText}>Sign Out</Text>
            </View>
            {/* <View style={styles.sbItemRight}>
              <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
            </View> */}
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default SettingsScreen
const styles = StyleSheet.create({
  sHeader: {
    elevation: 3,
    borderColor: '#eaeaea',
    shadowColor: '#eaeaea',
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
  },
  userButton: {
    backgroundColor: '#000FFF',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 20,
    color: '#fff',
    marginTop: 10,
    textTransform: 'capitalize',
    fontWeight: '700',
    position: 'relative',
  },
  sBody: {},
  sbItemTouch: {
    elevation: 2,
    borderColor: '#eaeaea',
    shadowColor: '#eaeaea',
    marginBottom: 1,
  },
  sbItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
  },
  sbItemLeft: {
    flexDirection: 'row',
  },
  sbItemLeftIcon: {
    lineHeight: 20,
    marginRight: 10,
    fontSize: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },
  sbItemLeftText:{
  },
  sbItemRight: {},
  sbItemRightIcon:{
    lineHeight: 20,
    fontSize: 20,
    color: 'gray',
  }
})