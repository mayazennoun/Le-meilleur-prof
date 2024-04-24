import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const subjects = [
  { name: 'Arabe', image: require('../assets/Clement Fournier.jpg') },{ name: 'Théâtre', image: require('../assets/Clement Fournier.jpg') }
  
  // Ajoutez d'autres matières avec leurs images correspondantes
];

const SubjectItem = ({ item }) => (
  <View style={styles.subjectContainer}>
    <Image source={item.image} style={styles.subjectImage} />
    
  </View>
);

const Flat = () => (
  <FlatList
    data={subjects}
    renderItem={({ item }) => <SubjectItem item={item} />}
    keyExtractor={(item) => item.name}
      horizontal />
);

const styles = StyleSheet.create({
  subjectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  subjectImage: {
    marginTop:20,
    margin:-8,
    width: 260, // Ajustez la largeur de l'image selon vos besoins
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
    marginBottom: 1,
    borderRadius: 10, // Arrondir les coins de l'image si nécessaire
  },
  subjectName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Flat;
