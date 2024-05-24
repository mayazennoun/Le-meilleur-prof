import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {app,db,getFirestore,collection, addDoc} from '../config/firebase'
import useAuth from '../hooks/useAuth';

const MonprofilScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();


  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [skypeId, setSkypeId] = useState('');
  const [hangoutId, setHangoutId] = useState('');
  const [gmail, setGmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "ProfilUser"), {
        nom: nom,
        adresse: adresse,
        skypeId: skypeId,
        hangoutId: hangoutId,
        gmail: gmail,
        dateOfBirth: dateOfBirth,
      });
      Alert.alert("Document écrit avec ID: ", docRef.id);
      setNom('');
      setAdresse('');
      setSkypeId('');
      setHangoutId('');
      setGmail('');
      setDateOfBirth('');
    } catch (e) {
      console.error("Erreur lors de l'ajout de document : ", e);
      Alert.alert("Erreur", "Erreur lors de l'ajout de document : " + e.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={nom}
              onChangeText={setNom}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="location" size={24} color="#BA68C8" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={adresse}
              onChangeText={setAdresse}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="logo-skype" size={24} color="#BA68C8" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Skype ID"
              value={skypeId}
              onChangeText={setSkypeId}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="logo-google" size={24} color="#BA68C8" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Hangout ID"
              value={hangoutId}
              onChangeText={setHangoutId}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="#BA68C8" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Gmail"
              value={gmail}
              onChangeText={setGmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar" size={24} color="#BA68C8" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
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
    backgroundColor: '#f3f4f6',
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
});

export default MonprofilScreen;




