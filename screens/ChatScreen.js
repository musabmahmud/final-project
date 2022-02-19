import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (

    <ScrollView style={styles.bodyContent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.chatBody}>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/3.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>lorem lorem lorem lorem</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>sadf</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>sadf</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>sadf</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>sadf</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/1.png')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>sadf</Text>
            <Text style={styles.chatITextPara}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. lo</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  bodyContent: {
    position: 'relative',
    paddingTop: 10,
    backgroundColor: '#FFFF99',
  },
  chatBody: {
    position: 'relative',
  },
  chatItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#eaeaea',
  },
  chatILeft: {
    width: '28%',
    overflow: 'hidden'
  },
  chatIBody: {
    width: '70%',
    overflow: 'hidden'
  },
  chatITextHeader: {
    fontSize: 15,
    paddingTop: 5,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#64eb26',
  },
  chatITextPara: {
    fontSize: 12,
    color: 'gray',
  },
  chatImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  chatIRight: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  chatITextDate:{
    textAlign: 'right',
    color: 'gray',
    fontSize: 10,
  }
})