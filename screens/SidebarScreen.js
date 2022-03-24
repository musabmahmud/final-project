import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const SidebarScreen = () => {
  
  return (
    <>
    <View style={styles.sidebarHeader}>
        <TouchableOpacity style={styles.userImageBg}>
        <Image source={require('./../assets/user/1.png')} style={styles.userImage}  accessibilityLabel="asdlf"/>
        </TouchableOpacity>
        <Text style={styles.userName}>MUSAB MAHMUD</Text>
    </View>
    <ScrollView style={styles.sidebarBody} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="user-circle-o"/>
            <Text style={styles.sideText}>My Profile</Text>
          </TouchableOpacity>
          {/* <View style={styles.bottom} /> */}
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="globe"/>
            <Text style={styles.sideText}>My Activity</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="universal-access"/>
            <Text style={styles.sideText}>Inventory</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="question-circle"/>
            <Text style={styles.sideText}>Help</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="info-circle"/>
            <Text style={styles.sideText}>Terms &amp; Conditions</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="sign-in"/>
            <Text style={styles.sideText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sidebarItem}>
            <Icon style={styles.sideIcon} name="sign-out"/>
            <Text style={styles.sideText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </>
  )
}

export default SidebarScreen

const styles = StyleSheet.create({
  sidebarHeader:{
    paddingTop: 30,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 20,
    width: '100%',
    backgroundColor: '#FFFF99',
    alignItems: 'center',
  },
  userImageBg:{
  
  },
  userImage:{
    borderRadius: 50,
    width: 120,
    height: 120,
  },
  userName:{
    color:'#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sidebarBody:{
    paddingTop: 15,
    paddingBottom: 20,
  },
  sidebarItem:{
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection:'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 30,
  },
  sideIcon:{
    fontSize: 20,
    color: '#00FF0F',
    paddingRight: 20,
  },
  sideText:{
    fontSize: 16,
  },
  bottom: {
    backgroundColor: 'gray',
    width: '100%',
    height: 1,
  },
})