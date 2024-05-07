import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ReservationForm = () => {
  const [mode, setMode] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
   
    console.log('Mode:', mode);
    console.log('Adresse:', address);
    console.log('Téléphone:', phone);
    console.log('Numéro de carte:', cardNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/teacheronline.png')} style={styles.image} />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Réserver votre place</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.label}></Text>
          <View style={styles.modeContainer}>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'face' && styles.selectedMode]}
              onPress={() => setMode('face')}
            >
              <Ionicons name="person" size={24} color={mode === 'face' ? '#fff' : '#BA68C8'} />
              <Text style={[styles.modeText, mode === 'face' && styles.selectedModeText]}>Face à face</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeButton, mode === 'webcam' && styles.selectedMode]}
              onPress={() => setMode('webcam')}
            >
              <Ionicons name="videocam" size={24} color={mode === 'webcam' ? '#fff' : '#BA68C8'} />
              <Text style={[styles.modeText, mode === 'webcam' && styles.selectedModeText]}>Webcam</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Adresse de l'élève</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Entrez votre adresse"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Numéro de téléphone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Entrez votre numéro"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Moyen de paiement</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="Numéro de carte"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Envoyer une demande</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    marginTop:30,
    height: 190,
    resizeMode: 'cover',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#BA68C8',
  },
  selectedMode: {
    backgroundColor: '#BA68C8',
  },
  modeText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#BA68C8',
  },
  selectedModeText: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor:'#f3f4f6',
  },
  submitButton: {
    backgroundColor: '#BA68C8',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservationForm;


