import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BottomHomeScreen = () => {
  const [recommendedTeachers, setRecommendedTeachers] = useState([]);
  const [theaterTeachers, setTheaterTeachers] = useState([]);
  const [musicTeachers, setMusicTeachers] = useState([]);

  // Fonction fetchData pour récupérer les données depuis une source externe
  const fetchData = async () => {
    try {
      // Ici, vous pouvez utiliser fetch pour récupérer les données des professeurs depuis une API ou une autre source
      // Dans cet exemple, je vais simplement simuler des données aléatoires pour chaque catégorie
      const recommended = generateRandomTeachers(5);
      const theater = generateRandomTeachers(5);
      const music = generateRandomTeachers(5);
      
      setRecommendedTeachers(recommended);
      setTheaterTeachers(theater);
      setMusicTeachers(music);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // Générer des données de professeurs aléatoires
  const generateRandomTeachers = (count) => {
    const teachers = [];
    for (let i = 0; i < count; i++) {
      const teacher = {
        id: i + 1,
        name: `Professeur ${i + 1}`,
        subject: 'Mathématiques', // Changer la matière si nécessaire
        slogan: 'Apprendre avec passion !', // Ajouter un slogan
      };
      teachers.push(teacher);
    }
    return teachers;
  };

  // Appeler fetchData une fois que le composant est monté
  useEffect(() => {
    fetchData();
  }, []);

  // Afficher les données dans la liste pour chaque catégorie
  return (
    <View style={styles.container}>
      {/* Section pour les professeurs les plus recommandés */}
      <Text style={styles.sectionTitle}>Les professeurs les plus recommandés</Text>
      <FlatList
        data={recommendedTeachers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.teacherItem}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.teacherSubject}>{item.subject}</Text>
            <Text style={styles.teacherSlogan}>{item.slogan}</Text>
          </View>
        )}
      />

      {/* Section pour les professeurs de théâtre */}
      <Text style={styles.sectionTitle}>Professeurs de théâtre</Text>
      <FlatList
        data={theaterTeachers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.teacherItem}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.teacherSubject}>{item.subject}</Text>
            <Text style={styles.teacherSlogan}>{item.slogan}</Text>
          </View>
        )}
      />

      {/* Section pour les professeurs de musique */}
      <Text style={styles.sectionTitle}>Professeurs de musique</Text>
      <FlatList
        data={musicTeachers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.teacherItem}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.teacherSubject}>{item.subject}</Text>
            <Text style={styles.teacherSlogan}>{item.slogan}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:90,
    padding: 70,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teacherItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop:100,
  },
  teacherName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  teacherSubject: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  teacherSlogan: {
    color: 'gray',
  },
});

export default BottomHomeScreen;
