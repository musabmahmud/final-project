import { signOut } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, ImageBackground, ActivityIndicator, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const url = "https://final-project-shebok.herokuapp.com/api/getusers?limit=10";

const SettingsScreen = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUser(data));

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color='#000' bool="true" />
      </View>
    )
  }


  return (
    <ScrollView style={styles.settingBody} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={styles.settingBefore}>
        <View style={styles.sHeader}>
          <ImageBackground source={require('./../assets/background/10.png')} resizeMode="stretch" style={styles.sHeaderImage}>
            <View style={styles.userProfile}>
              <Image source={require('./../assets/user/sahin.png')} style={styles.userImage} accessibilityLabel="asdlf" />
              <Text style={styles.userName}>Sahin Imran</Text>
              <Text style={styles.userButton}>Edit Profile
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.sBody}>
          <TouchableOpacity style={styles.sbItemTouch} onPress={()=> navigation.navigate('ProfileSetting')}>
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
                <Icon style={styles.sbItemLeftIcon} name="share-alt" /><Text style={styles.sbItemLeftText}>Share Your Profile</Text>
              </View>
              <View style={styles.sbItemRight}>
                <Ionicons name="md-chevron-forward" style={styles.sbItemRightIcon} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sbItemTouch} onPress={() => navigation.navigate('SignIn')}>
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
      </View>
    </ScrollView>
  )
}
export default SettingsScreen
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
    color: '#fff',
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
    elevation: 4,
    marginBottom: 30,
    shadowColor: '#000',
  },
  sbItemTouch: {
    borderRadius: 20,
    padding: 15,
  },
  sbItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
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
  sbItemLeftText: {
  },
  sbItemRight: {},
  sbItemRightIcon: {
    lineHeight: 20,
    fontSize: 20,
    color: 'gray',
  }
})