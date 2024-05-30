import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CarteCadeauPage = ({ navigation }) => {
  const [code, setCode] = useState('');
  
  const handleValidation = () => {
    if (code === 'mayazn123' || code === 'nadinetoumani24') {
      Alert.alert('Carte cadeau active');
    } else {
      Alert.alert('Code invalide');
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.text1}>Offrez l'apprentissage en cadeau  {'\n'}             avec nos cartes.</Text>
      <Image
        source={require('../assets/Gift card-rafiki.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Insérez le code de votre carte cadeau :</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCode(text)}
        value={code}
        placeholder="Entrez le code ici"
      />
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F6FD',
  },
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#64C4C3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text1:{
margin:25,
fontWeight:'bold',
fontSize:20,
color:'#64C4C3',
  },
});

export default CarteCadeauPage;



