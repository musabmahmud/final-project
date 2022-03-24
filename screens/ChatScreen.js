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
            <Image source={require('./../assets/user/7.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Musab Mahmud</Text>
            <Text style={styles.chatITextPara}>Hey, How are you??</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>23 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/4.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Sadia Islam</Text>
            <Text style={styles.chatITextPara}>I am a hardworking and trustworthy female looking for a job as a housekeeper or childminder</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/6.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Farhana</Text>
            <Text style={styles.chatITextPara}>My experiences as a homemaker for 20 years to create a comfortable, clean and welcoming home </Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/8.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Yeasin</Text>
            <Text style={styles.chatITextPara}>Hey, Can I hire You??</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>23 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/5.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Samia Islam</Text>
            <Text style={styles.chatITextPara}>I am a hardworking and trustworthy female looking for a job as a housekeeper or childminder</Text>
          </View>
          <View style={styles.chatIRight}>
            <Text style={styles.chatITextDate}>17 Jan, 22</Text>
          </View>
        </View>
        <View style={styles.chatItem}>
          <View style={styles.chatILeft}>
            <Image source={require('./../assets/user/10.jpg')} style={styles.chatImage} accessibilityLabel="asdlf" />
          </View>
          <View style={styles.chatIBody}>
            <Text style={styles.chatITextHeader}>Sahin Imran</Text>
            <Text style={styles.chatITextPara}>My experiences as a homemaker for 20 years to create a comfortable, clean and welcoming home </Text>
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
    backgroundColor: '#FFFF99',
  },
  chatBody: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 50,
  },
  chatItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
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