import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { teacherData } from '../components/LastestItemsList';

const ChoicesScreen = () => {
  const [selectedMatieres, setSelectedMatieres] = useState([]);
  const [selectedTarifs, setSelectedTarifs] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const navigation = useNavigation();

  const matieres = ['Anglais', 'Français', 'Chimie', 'Physique', 'Maths', 'Philosophie'];
  const tarifs = ['1000 DA', '2500 DA', '3000 DA', '3500 DA'];
  const places = ['Annaba Beausejour', 'Annaba Les Allemands', 'Annaba Sidi Achour', 'Annaba Elbouni', 'Annaba Sidi Ammar', 'Annaba 8 Mars', 'Annaba Majestique'];

  const handleSelection = (selectedItem, category) => {
    if (category === 'matieres') {
      setSelectedMatieres((prevSelection) => [...prevSelection, selectedItem]);
    } else if (category === 'tarifs') {
      setSelectedTarifs((prevSelection) => [...prevSelection, selectedItem]);
    } else if (category === 'places') {
      setSelectedPlaces((prevSelection) => [...prevSelection, selectedItem]);
    }
  };

  const handleResultNavigation = () => {
    // Passer les sélections à la prochaine screen pour afficher les résultats
   navigation.navigate('ResultsScreen', { teacherData: teacherData, selectedFilters: selectedFilters, selectedTarif: selectedTarif, selectedPlace: selectedPlace });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez vos critères :</Text>

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
    marginTop:35,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    borderRadius: 5,
  },
  resultButton: {
    backgroundColor: '#64C4C3',
    padding: 15,
    borderRadius: 10,
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
