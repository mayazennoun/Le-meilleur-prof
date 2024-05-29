import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import useFirestoreData from '../hooks/useFirestoreData'; // Importez le hook que nous avons créé précédemment

const LatestItemsList = () => {
  const data = useFirestoreData(); // Utilisez le hook pour récupérer les données de Firestore

  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Dernières annonces</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.imageURL ? { uri: item.imageURL } : require('../assets/9434619.jpg')}
              style={styles.image}
            />
            <Text style={styles.title}>{item.nom} {item.prenom}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 150, // Ajuster la largeur des éléments
    margin: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64C4C3',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LatestItemsList;




