import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchReservations = async () => {
      const querySnapshot = await getDocs(collection(db, 'ReservationCours'));
      const reservationsData = [];
      querySnapshot.forEach((doc) => {
        reservationsData.push({ ...doc.data(), id: doc.id });
      });
      setReservations(reservationsData);
    };
    fetchReservations();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Liste des Réservations</Text>
      <FlatList
        data={reservations}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Réservation</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Ionicons name="person" size={24} color="#4CAF50" />
                <Text style={styles.infoText}>{item.mode}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="location" size={24} color="#FF5722" />
                <Text style={styles.infoText}>{item.adresse}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call" size={24} color="#03A9F4" />
                <Text style={styles.infoText}>{item.numtel}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="card" size={24} color="#9C27B0" />
                <Text style={styles.infoText}>{item.numcard}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#E7F6FD',
    padding: 16,
  },
  goBackButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContent: {
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default ReservationList;
