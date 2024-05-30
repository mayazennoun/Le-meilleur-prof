import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

const AnnonceList = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = onSnapshot(collection(db, "Profs"), (querySnapshot) => {
        const annonces = [];
        querySnapshot.forEach((doc) => {
          annonces.push({ id: doc.id, ...doc.data() });
        });
        setData(annonces);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.title}>{item.titre}</Text>
              <Text style={styles.subtitle}>{item.nom}</Text>
              <Text style={styles.subtitle}>{item.matiere}</Text>
              <Text style={styles.subtitle}>{item.tarif}</Text>
              <Text style={styles.subtitle}>{item.adresse}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Reservation', { itemId: item.id })}
              >
                <Text style={styles.buttonText}>Réserver</Text>
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
  container: {
    marginTop: 38,
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#64C4C3',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#64C4C3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AnnonceList;




