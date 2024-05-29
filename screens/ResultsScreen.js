import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { teacherData } from '../components/LastestItemsList';

const ResultsScreen = ({ route }) => {
  const { selectedFilters, selectedTarif, selectedPlace } = route.params;

  // Filtrer les données en fonction des critères sélectionnés
  const filteredData = teacherData.filter((item) => {
    // Vérifier si la matière est incluse dans les filtres sélectionnés
    const isMatiereIncluded = selectedFilters.includes(item.title.split(' ')[2]);

    // Vérifier si le tarif correspond au tarif sélectionné
    const isTarifMatched = selectedTarif ? item.title.includes(selectedTarif) : true;

    // Vérifier si l'endroit correspond à l'endroit sélectionné
    const isPlaceMatched = selectedPlace ? item.title.includes(selectedPlace) : true;

    // Retourner vrai si toutes les conditions sont remplies
    return isMatiereIncluded && isTarifMatched && isPlaceMatched;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats du filtrage :</Text>
      {filteredData.length === 0 ? (
        <Text style={styles.noResultText}>Aucun résultat trouvé.</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7F6FD',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noResultText: {
    fontSize: 16,
    color: 'red',
  },
});

export default ResultsScreen;
