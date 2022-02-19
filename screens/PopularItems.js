import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

const PopularItems = () => {
  return (
    <View style={styles.pItems}>
      <Image source={require('./../assets/services/1.jpg')} style={styles.imageBg} accessibilityLabel="asdlf"/>
      <View style={styles.pBody}>
        
        <Text style={styles.pText}>Home Services</Text>
      </View>
    </View>
  );
};

export default PopularItems;

const styles = StyleSheet.create({
  pItems:{
    backgroundColor: "#fff",
    width: 150,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#eaeaea',
    marginRight: 10,
    marginBottom: 5,
  },
  imageBg:{
    width: 150,
    height: 150,
  },
  pBody:{
    flex: 1,
    justifyContent: 'center',
  },
  pText:{
    padding: 5,
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});
