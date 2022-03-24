import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
const NotifyScreen = () => {

  const url = "https://final-project-shebok.herokuapp.com/api/getnotifications";

  const [results, setResults] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "musab@gmail.com", // Use your own property name / key
      }),
    })
      .then(response => response.json())
      .then((data) => setResults(data))

    if (results) {
      setIsLoading(false);
    }
  }, []);
  const updateNotify = (id) =>{
    console.log(id);
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (

    <ScrollView style={styles.bodyContent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.chatBody}>
        {
          results.map((result) => (
            <TouchableOpacity onPress={() => updateNotify(result._id)} key={result._id}>
            <View style={[styles.chatItem, result.status ?
    styles.gray :
    styles.white ]}>
              <View style={styles.chatILeft}>
                <Image source={require('./../assets/user/musab.jpg')} style={styles.chatImage} accessibilityLabel="ddsadfasd" />
              </View>
              <View style={styles.chatIBody}>
                <Text><Text style={styles.chatITextHeader}>{result.buyerName}</Text> <Text style={styles.chatITextPara}>{result.message}</Text></Text>
                <Text style={styles.chatITextTime}>{moment(result.createdAt).fromNow()}</Text>
              </View>
              <View style={styles.chatIRight}>
                <Text style={styles.chatITextIcon}><Ionicons
                  name="ellipsis-vertical-outline"
                  color='black'
                  size={24}
                /></Text>
              </View>
            </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  )
}

export default NotifyScreen


const styles = StyleSheet.create({
  bodyContent: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  chatBody: {
    position: 'relative',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#eaeaea',
    justifyContent: 'space-between'
  },
  gray:{
    backgroundColor: '#eaeaea',
  },
  white:{
    backgroundColor :'#fff'
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
  chatITextTime: {
    color: 'gray',
    fontSize: 12,
  }
})