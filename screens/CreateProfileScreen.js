import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView,Alert } from 'react-native';
import firebase from '../config/firebase'
import {app,db,getFirestore,collection, addDoc} from '../config/firebase'

const CreateProfileScreen = () => {
   const [nom, setNom] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [matiere, setMatiere] = useState('');
  const [tarif, setTarif] = useState('');
  const [adresse, setAdresse] = useState('');
  const [image, setImage] = useState(null); 


const handleSubmit = async () => {
 try {
  const docRef = await addDoc(collection(db, "prof"), {
     nom: nom,
      titre: titre,
      description: description,
      matiere: matiere,
      tarif: tarif,
      adresse: adresse,
  });
  Alert.alert("Document écrit avec ID: ", docRef.id);
   setNom('');
      setTitre('');
      setDescription('');
      setMatiere('');
      setTarif('');
      setAdresse('');
} catch (e) {
  console.error("Erreur lors de l/'ajout de document : ", e);
}
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créez dès maintenant votre annonce !</Text>
    
        <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder=" Nom Prenom"
      />
      <TextInput
        style={styles.input}
        value={titre}
        onChangeText={setTitre}
        placeholder=" Titre de l'annonce"
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder=" Description de vos services"
        multiline
      />
      <TextInput
        style={styles.input}
        value={matiere}
        onChangeText={setMatiere}
        placeholder=" Matière enseignée"
      />
      <TextInput
        style={styles.input}
        value={tarif}
        onChangeText={setTarif}
        placeholder=" Tarif par heure"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={adresse}
        onChangeText={setAdresse}
        placeholder=" Adresse"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Publier l'annonce</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
    marginTop:20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  addImageButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addImageText: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    marginBottom:30,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#BA68C8',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateProfileScreen;



