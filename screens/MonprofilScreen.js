import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth'; 
const MonprofilScreen = () => {
  const navigation = useNavigation();

    const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/avatar.png.jpg')} style={styles.avatar} />
        </View>
          {user && (
                <Text style={styles.userEmail}>
                     {user.email}
                </Text>
            )}
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="location" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Address" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="logo-skype" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Skype ID" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="logo-google" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Hangout ID" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Gmail" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="calendar" size={24} color="#BA68C8" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Date of Birth" />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  header: {
    height: 200, 
    backgroundColor: '#EBDEF0',
    justifyContent: 'center',
    alignItems: 'center',
   
    

  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20,
    
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  formContainer: {
    padding: 20,
  
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
   
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'transparent',
    backgroundColor:'#f3f4f6',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
  
  },
  saveButton: {
    backgroundColor: '#BA68C8',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#BA68C8',
  },
  userEmail: {
     fontWeight:'bold',
  },
});

export default MonprofilScreen;


