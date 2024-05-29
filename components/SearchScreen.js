import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const subjects = [
    'SVT',
    'Chimie',
    'Philosophie',
    'Anglais',
    'Informatique',
    'Arabe',
    'Français',
    'Mathématique',
    'His/Geo',
  ];

  const prices = ['1500DA', '2000DA', '3500DA', '4000DA', '4500DA'];

  const locations = [
    'Annaba - Elbouni',
    'Annaba - Sidi Achour',
    'Annaba - Les allemands',
    'Annab - 8 mars',
    'Annaba - Pont blanc',
    'Annaba, Les palmiers',
    'Annaba - La colonne',
    'Annaba - centre ville',
    'Annaba - saint cloud',
    'Annaba- Beausejour',
    'Annaba - chapuis',
    'Annaba- Sidi Ammar',
    'Annaba - Elhadjar',
  ];

  const toggleSubject = (subject) => {
    setSelectedSubjects((prevSelectedSubjects) =>
      prevSelectedSubjects.includes(subject)
        ? prevSelectedSubjects.filter((item) => item !== subject)
        : [...prevSelectedSubjects, subject]
    );
  };

  const togglePrice = (price) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.includes(price)
        ? prevSelectedPrices.filter((item) => item !== price)
        : [...prevSelectedPrices, price]
    );
  };

  const toggleLocation = (location) => {
    setSelectedLocations((prevSelectedLocations) =>
      prevSelectedLocations.includes(location)
        ? prevSelectedLocations.filter((item) => item !== location)
        : [...prevSelectedLocations, location]
    );
  };

  const handleSubmit = () => {
    // Logique pour afficher les résultats filtrés
    console.log('Recherche :', searchQuery);
    console.log('Matières sélectionnées :', selectedSubjects);
    console.log('Prix sélectionnés :', selectedPrices);
    console.log('Lieux sélectionnés :', selectedLocations);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Filtrer" onPress={() => {}} /> {/* Bouton inactif pour l'instant */}

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Matières</Text>
          {subjects.map((subject) => (
            <View key={subject} style={styles.option}>
              <Text
                style={[
                  styles.checkbox,
                  selectedSubjects.includes(subject) && styles.checkedCheckbox,
                ]}
                onPress={() => toggleSubject(subject)}
              >
                {selectedSubjects.includes(subject) ? '✓' : ''}
              </Text>
              <Text>{subject}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prix</Text>
          {prices.map((price) => (
            <View key={price} style={styles.option}>
              <Text
                style={[
                  styles.checkbox,
                  selectedPrices.includes(price) && styles.checkedCheckbox,
                ]}
                onPress={() => togglePrice(price)}
              >
                {selectedPrices.includes(price) ? '✓' : ''}
              </Text>
              <Text>{price}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lieux</Text>
          {locations.map((location) => (
            <View key={location} style={styles.option}>
              <Text
                style={[
                  styles.checkbox,
                  selectedLocations.includes(location) && styles.checkedCheckbox,
                ]}
                onPress={() => toggleLocation(location)}
              >
                {selectedLocations.includes(location) ? '✓' : ''}
              </Text>
              <Text>{location}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Button title="Entrer" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
    marginVertical: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
  checkedCheckbox: {
    color: '#007AFF',
  },
});

export default SearchScreen;