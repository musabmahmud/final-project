import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotifyScreen = () => {
  return (

    <ScrollView style={styles.bodyContent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.chatBody}>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/2.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text><Text style={styles.chatITextHeader}>sadf </Text><Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text></Text>
            <Text style={styles.chatITextTime}>6 minutes ago</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextIcon}><Ionicons
              name="ellipsis-vertical-outline"
              color='black'
              size={24}
            /></Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/3.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text><Text style={styles.chatITextHeader}>sadf </Text><Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text></Text>
            <Text style={styles.chatITextTime}>6 minutes ago</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextIcon}><Ionicons
              name="ellipsis-vertical-outline"
              color='black'
              size={24}
            /></Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/2.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text><Text style={styles.chatITextHeader}>sadf </Text><Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text></Text>
            <Text style={styles.chatITextTime}>6 minutes ago</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextIcon}><Ionicons
              name="ellipsis-vertical-outline"
              color='black'
              size={24}
            /></Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text><Text style={styles.chatITextHeader}>sadf </Text><Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text></Text>
            <Text style={styles.chatITextTime}>6 minutes ago</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextIcon}><Ionicons
              name="ellipsis-vertical-outline"
              color='black'
              size={24}
            /></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default NotifyScreen


const styles = StyleSheet.create({
  bodyContent: {
    position: 'relative',
  },
  chatBody: {
    position: 'relative',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#eaeaea',
    justifyContent: 'space-between'
  },
  chatILeft: {
    width: '22%',
    overflow: 'hidden',
  },
  chatIBody: {
    width: '70%',
    overflow: 'hidden',
  },
  chatITextHeader: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#64eb26',
  },
  chatITextPara: {
    fontSize: 14,
    color: '#404142',
  },
  chatImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  chatIRight: {
    width: '8%',
    overflow: 'hidden'
  },
  chatITextIcon: {
    textAlign: 'right',
    color: '#000'
  },
  chatITextTime:{
    color: 'gray',
    fontSize: 12,
  }
})