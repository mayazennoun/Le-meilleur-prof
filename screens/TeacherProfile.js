import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TeacherProfile = ({ route }) => {
  // Récupérer les données de l'enseignant depuis les paramètres de la route
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={item.imageURL ? { uri: item.imageURL } : require('../assets/default-profile-image.jpg')}
        style={styles.image}
      />
      <Text style={styles.name}>{item.nom} {item.prenom}</Text>
      <Text style={styles.subject}>{item.matiere}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subject: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default TeacherProfile;
