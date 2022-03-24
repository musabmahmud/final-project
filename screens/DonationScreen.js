import React from 'react'

import { View, TextInput, StyleSheet, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


const DonationScreen = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const { control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (

    <SafeAreaView style={styles.body}>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.paddingBody}>
          <Text style={styles.headerTitle}>Food Donation</Text>
          <Image source={require('./../assets/food/10.jpg')} resizeMode="stretch" style={styles.imageBg} accessibilityLabel="asdlf" />
          <View style={styles.imageBody} >
            <Text style={styles.headerH}>Why Donate Food?</Text>
            <Text style={styles.headerText}>This is on food wastage reduction through donation. In our country, large amount of food (about 5.5%) is being wasted on a regular basis in our homes, Hotels, weddings and parties and many other places. This is the Easiest way to reduce wastage.</Text>
          </View>
          <Text style={styles.headerTitle}>Food Donation Form</Text>
          {/* firstName */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              minLength: 3,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter Your Name"
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}
          {/* Contact Mail */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              minLength: 5,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter Your Email"
              />
            )}
            name="eMail"
          />
          {errors.eMail && <Text>This is required.</Text>}
          {/* Contact Number */}
          <Controller
            control={control}
            rules={{
              maxLength: 11,
              minLength: 11,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                placeholder="Enter Contact Number"
              />
            )}
            name="cNumber"
          />
          {errors.cNumber && <Text>This is required.</Text>}

          {/* Type */}
          <Controller
            control={control}
            rules={{
              maxLength: 11,
              minLength: 11,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter Food Type"
              />
            )}
            name="foodType"
          />
          {errors.foodType && <Text>This is required.</Text>}
          {/* Quantity */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              minLength: 3,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                placeholder="Enter Food Quantity"
              />
            )}
            name="foodQty"
          />
          {errors.foodQty && <Text>This is required.</Text>}
          {/* address */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              minLength: 3,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter Your Address"
              />
            )}
            name="pAddress"
          />
          {errors.pAddress && <Text>This is required.</Text>}
          {/* Note */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              minLength: 3,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter Note If Any Queries"
              />
            )}
            name="sNote"
          />
          {errors.pAddress && <Text>This is required.</Text>}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DonationScreen

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFF99',
    height: '100%',
  },
  paddingBody: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  imageBg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageBody: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#171717',
  },
  headerH: {
    color: "#000",
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 20,
  },
  headerText: {
    color: "#000",
    marginTop: 10,
    lineHeight: 25,
    justifyContent: 'center',
    textAlign: 'justify',
  },
  headerTitle: {
    textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputText: {
    marginBottom: 5,
    color: '#000'
  },
  inputs: {
    height: 35,
    marginBottom: 15,
    width: '100%',
    padding: 5,
    paddingLeft: 20,
    backgroundColor: '#fafafa',
    elevation: 1,
    shadowColor: '#171717',
    color: '#5C5F69',
    borderRadius: 50,
  },
  submitButton: {
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: '#2ff737',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    color: '#fff',
    elevation: 2,
    shadowColor: '#171717',
  },
  submitText: {
    color: '#fff',
    fontWeight: '700',
  }
})
