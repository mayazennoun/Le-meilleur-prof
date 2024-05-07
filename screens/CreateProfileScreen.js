import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import firebase from '../config/firebase'
import { Firestore } from '@firebase/firestore';
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
    // Ajouter un nouveau document à la collection "prof"
    await firebase.firestore.collection('prof').add({
      nom,
      titre,
      description,
      matiere,
      tarif,
      adresse,
    });

    // Réinitialiser les champs du formulaire
    setNom('');
    setTitre('');
    setDescription('');
    setMatiere('');
    setTarif('');
    setAdresse('');

    // Afficher un message de succès ou effectuer d'autres actions si nécessaire
    console.log('Document ajouté avec succès !');
  } catch (error) {
    // Gérer les erreurs
    console.error('Erreur lors de l\'ajout du document :', error);
  }
};
  const selectImage = () => {
    // Code pour sélectionner une image à partir de la galerie ou prendre une nouvelle photo
    // Vous pouvez utiliser une librairie comme react-native-image-picker pour cela
    // Une fois l'image sélectionnée, mettez à jour l'état de l'image avec setImage
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créez dès maintenant votre annonce !</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.addImageButton}>
            <Text style={styles.addImageText}>Ajouter une image</Text>
          </View>
        )}
      </TouchableOpacity>
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



