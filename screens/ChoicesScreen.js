import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Ionicons } from '@expo/vector-icons';

const ChoicesScreen = () => {
  const [selectedMatieres, setSelectedMatieres] = useState([]);
  const [selectedTarifs, setSelectedTarifs] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const navigation = useNavigation();

  const matieres = ['Anglais', 'Français', 'Chimie', 'Physique', 'Maths', 'Informatique'];
  const tarifs = ['1200DA/Mois', '2000DA/Mois', '3000 DA', '3500 DA'];
  const places = ['Annaba - saint cloud', 'Annaba - Cité ElRym', 'Annaba - Sidi achour', 'Annaba Elbouni', 'Annaba Sidi Ammar', 'Annaba 8 Mars', 'Annaba Majestique'];

  const handleSelection = (selectedItem, category) => {
    if (category === 'matieres') {
      setSelectedMatieres((prevSelection) =>
        prevSelection.includes(selectedItem)
          ? prevSelection.filter(item => item !== selectedItem)
          : [...prevSelection, selectedItem]
      );
    } else if (category === 'tarifs') {
      setSelectedTarifs((prevSelection) =>
        prevSelection.includes(selectedItem)
          ? prevSelection.filter(item => item !== selectedItem)
          : [...prevSelection, selectedItem]
      );
    } else if (category === 'places') {
      setSelectedPlaces((prevSelection) =>
        prevSelection.includes(selectedItem)
          ? prevSelection.filter(item => item !== selectedItem)
          : [...prevSelection, selectedItem]
      );
    }
  };

  const handleResultNavigation = async () => {
    const profsCollection = collection(db, 'Profs');
    let queryRef = profsCollection;

    if (selectedMatieres.length > 0) {
      queryRef = query(queryRef, where('matiere', 'in', selectedMatieres));
    }
    if (selectedTarifs.length > 0) {
      queryRef = query(queryRef, where('tarif', 'in', selectedTarifs));
    }
    if (selectedPlaces.length > 0) {
      queryRef = query(queryRef, where('adresse', 'in', selectedPlaces));
    }

    try {
      const querySnapshot = await getDocs(queryRef);
      const results = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      navigation.navigate('ResultsScreen', { results });
    } catch (error) {
      console.error('Error filtering data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={40} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>          Choisissez vos critères :</Text>

      <Text style={styles.categoryTitle}>Matieres :</Text>
      <FlatList
        data={matieres}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelection(item, 'matieres')}
            style={[styles.checkbox, selectedMatieres.includes(item) && styles.selectedCheckbox]}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.categoryTitle}>Tarifs :</Text>
      <FlatList
        data={tarifs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelection(item, 'tarifs')}
            style={[styles.checkbox, selectedTarifs.includes(item) && styles.selectedCheckbox]}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.categoryTitle}>Places :</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelection(item, 'places')}
            style={[styles.checkbox, selectedPlaces.includes(item) && styles.selectedCheckbox]}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.resultButton} onPress={handleResultNavigation}>
        <Text style={styles.resultButtonText}>Voir les résultats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  goBackButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  selectedCheckbox: {
    backgroundColor: '#64C4C3',
    padding: 8,
    borderRadius: 35,
  },
  resultButton: {
    backgroundColor: '#64C4C3',
    padding: 15,
    borderRadius: 35,
alignItems: 'center',
    marginTop: 20,
  },
  resultButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChoicesScreen;


