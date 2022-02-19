import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SgigScreen = () => {
  return (
    <View style={styles.pItems}>
      <View>
         <Image source={require('./../assets/gig/1.jpg')} style={styles.imageBg} accessibilityLabel="asdlf"/>
      </View>
      <View style={styles.pBody}>
            <View style={styles.hItems}>
                <View style={styles.hILeft}>
                    <Icon style={styles.hILeftIcon} name="star-o"/>
                    <Text style={styles.hILeftText}>5.0  (4)</Text>
                </View>
                <View style={styles.hIRight}>
                    <Icon style={styles.hIRightIcon} name="heart-o"/>
                </View>
            </View>
            <Text style={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis</Text>
            <View style={styles.gBottom}>
                
                <Text style={styles.bFrom}>From </Text>
                <Text style={styles.bPrice}>$70</Text>
            </View>
        </View>
    </View>
  );
};

export default SgigScreen;

const styles = StyleSheet.create({

  pItems:{
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: 'hidden',
    width: '47%',
    elevation: 5,
    shadowColor: '#eaeaea',
    margin: 5,
  },
  imageBg:{
    width: '100%',
    height: 120,
  },
  hItems:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  hILeft:{
    flexDirection: 'row',
  },
  hILeftIcon:{
      color: 'gold',
      marginRight: 10,
      fontSize: 16,
  },
  hILeftText:{
      lineHeight: 18,
  },
  hIRightIcon:{
      color:'gray',
      fontSize: 14,
  }, 
  pBody:{
      padding: 10,
  },
  pText:{
    textAlign:'justify',
    textAlignVertical: 'center',
    fontSize: 12,
    paddingBottom: 20,
  },
  gBottom:{
    flexDirection: "row",
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 10,
    right: 10,

  },
  bFrom:{
      color: 'gray'
  },
});
