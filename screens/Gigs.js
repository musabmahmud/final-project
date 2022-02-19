import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Gigs = () => {
  return (
    <View style={styles.pItems}>
      <Image source={require('./../assets/gig/1.jpg')} style={styles.imageBg}  accessibilityLabel="asdlf"/>
      
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
            <Text style={styles.pText}>Write your press Lorem ipsum dolor.</Text>
            <View style={styles.gBottom}>
                
                <Text style={styles.bFrom}>From </Text>
                <Text style={styles.bPrice}>$70</Text>
            </View>
        </View>
    </View>
  );
};

export default Gigs;

const styles = StyleSheet.create({

  pItems:{
    position: 'relative',
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
    elevation: 10,
    shadowColor: '#eaeaea',
  },
  imageBg:{
    width: '100%',
    height: 150,
  },
  hItems:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
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
      lineHeight: 17,
  },
  hIRightIcon:{
      color:'gray',
      fontSize: 14,
  }, 
  pBody:{
      padding: 10,
  },
  pText:{
    textAlign: 'left',
    paddingBottom: 10,
    lineHeight: 20,
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
