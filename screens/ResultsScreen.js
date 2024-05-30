import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ResultsScreen = ({ route, navigation }) => {
  const { results } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={40} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>         Résultats de la recherche</Text>
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.detailsContainer}>
                <Text style={styles.resultText}>Nom: {item.nom}</Text>
                <Text style={styles.resultText}>Matière: {item.matiere}</Text>
                <Text style={styles.resultText}>Tarif: {item.tarif}</Text>
                <Text style={styles.resultText}>Adresse: {item.adresse}</Text>
                <Text style={styles.resultText}>Description: {item.description}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noResults}>Aucun résultat trouvé</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    padding: 20,
    backgroundColor: '#E7F6FD',
  },
  goBackButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    marginTop:5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultItem: {
    borderColor:'#64C4C3',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noResults: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ResultsScreen;
