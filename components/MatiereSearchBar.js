import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';


const MatiereSearchBar = () => {
  const [selectedMatiere, setSelectedMatiere] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const MATIERES = ['Math', 'Informatique', 'Sciences', 'Physique', 'Arabe', 'Francais', 'Anglais', 'HistoireGeo', 'Musique', 'Dessin'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectMatiere = (matiere) => {
    setSelectedMatiere(matiere);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.selectedMatiere}>{selectedMatiere || 'Sélectionner une matière'}</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <ScrollView style={styles.dropdown}>
          {MATIERES.map((matiere) => (
            <TouchableOpacity
              key={matiere}
              onPress={() => selectMatiere(matiere)}
              style={styles.dropdownItem}
            >
              <Text>{matiere}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      
   
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
  },
  dropdownButton: {
    height: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 360, 
  },
  selectedMatiere: {
    color: '#333',
    fontSize: 16,
  },
  dropdown: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 5,
    width: 300, 
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MatiereSearchBar;