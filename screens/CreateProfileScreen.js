import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app, db, collection, addDoc } from '../config/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CreateProfileScreen = () => {
  const [nom, setNom] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [matiere, setMatiere] = useState('');
  const [tarif, setTarif] = useState('');
  const [adresse, setAdresse] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();

  const onButtonPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const storage = getStorage(app);
    const fileRef = ref(storage, new Date().toISOString());
    try {
      const result = await uploadBytes(fileRef, blob);
      blob.close();
      return await getDownloadURL(fileRef);
    } catch (error) {
      blob.close();
      throw error;
    }
  };

  const handleSubmit = async () => {
    setUploading(true);
    let imageUrl = '';
    if (image) {
      try {
        imageUrl = await uploadImage(image);
      } catch (error) {
        console.error("Erreur lors du téléchargement de l'image: ", error.message);
        Alert.alert("Erreur", "Erreur lors du téléchargement de l'image.");
        setUploading(false);
        return;
      }
    }

    try {
      const docRef = await addDoc(collection(db, "Profs"), {
        nom,
        titre,
        description,
        matiere,
        tarif,
        adresse,
        image: imageUrl,
      });
      Alert.alert("Document écrit avec ID: ", docRef.id);
      setNom('');
      setTitre('');
      setDescription('');
      setMatiere('');
      setTarif('');
      setAdresse('');
      setImage(null);
      navigation.navigate('Profile');
    } catch (e) {
      console.error("Erreur lors de l'ajout de document : ", e.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créez dès maintenant votre annonce !</Text>
      
      <TouchableOpacity style={styles.imageContainer} onPress={onButtonPress}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.addImageButton}>
            <MaterialCommunityIcons name="camera" size={40} color="#666" />
            <Text style={styles.addImageText}>Ajouter une photo</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom Prénom"
      />
      <TextInput
        style={styles.input}
        value={titre}
        onChangeText={setTitre}
        placeholder="Titre de l'annonce"
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Description de vos services"
        multiline
      />
      <TextInput
        style={styles.input}
        value={matiere}
        onChangeText={setMatiere}
        placeholder="Matière enseignée"
      />
      <TextInput
        style={styles.input}
        value={tarif}
        onChangeText={setTarif}
        placeholder="Tarif"
      />
      <TextInput
        style={styles.input}
        value={adresse}
        onChangeText={setAdresse}
        placeholder="Adresse"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={uploading}>
        <Text style={styles.submitButtonText}>{uploading ? 'Publication...' : 'Publier l\'annonce'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E7F6FD',
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  addImageButton: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 30,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#64C4C3',
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





