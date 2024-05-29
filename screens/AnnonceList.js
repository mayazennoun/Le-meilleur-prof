import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const AnnonceList = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Profs"));
        const annonces = [];
        querySnapshot.forEach((doc) => {
          annonces.push({ id: doc.id, ...doc.data() });
        });
        setData(annonces);
      } catch (error) {
        console.error("Erreur lors de la récupération des annonces :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ marginTop: 38 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Explore</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.titre}</Text>
              <Text style={styles.subtitle}>{item.nom}</Text>
              <Text style={styles.subtitle}>{item.matiere}</Text>
              <Text style={styles.subtitle}>{item.tarif}</Text>
              <Text style={styles.subtitle}>{item.adresse}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Reservation', { itemId: item.id })}
              >
                <Text style={styles.buttonText}>   Réserver  </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#64C4C3',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 25,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  button:{
    marginTop:25,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#64C4C3',
    borderRadius: 25,
  },
  buttonText:{
    fontWeight: 'bold',
    color:'white',
  },
});

export default AnnonceList;


