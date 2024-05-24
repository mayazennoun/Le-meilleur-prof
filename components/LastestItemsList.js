import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';

const LatestItemsList = ({ data }) => {
  // Limiter les données à 8 éléments
  const limitedData = data.slice(0, 8);

  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Suggestions</Text>
      <FlatList
        data={limitedData}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default LatestItemsList;

export const teacherData = [
  {
    id: 1,
    title: 'Professeur de Mathématiques',
    image: require('../assets/Jonas Mahi.jpg'), 
  },
  {
    id: 2,
    title: 'Professeur de Physique',
    image: require('../assets/Isabelle Leblanc.jpg'),
  },
  {
    id: 3,
    title: 'Professeur de Français',
    image: require('../assets/MarieMartin.jpg'),
  },
  {
    id: 4,
    title: 'Professeur de Chimie',
    image: require('../assets/Clement Fournier.jpg'),
  },
  {
    id: 5,
    title: 'Professeur de SVT',
    image: require('../assets/Sophie Lambert.jpg'),
  },
  {
    id: 6,
    title: 'Professeur d\'Histoire',
    image: require('../assets/Pierre Bernard.jpg'),
  },
  {
    id: 7,
    title: 'Professeur d\'Anglais',
    image: require('../assets/Nicolas Dupuis.jpg'),
  },
  {
    id: 8,
    title: 'Professeur de Philosophie',
    image: require('../assets/Jonas Mahi.jpg'),
  },
  {
    id: 9,
    title: 'Professeur de Théâtre',
    image: require('../assets/Lea Moureau.jpg'),
  },
  // Ajoutez d'autres enseignants ici si nécessaire
];


