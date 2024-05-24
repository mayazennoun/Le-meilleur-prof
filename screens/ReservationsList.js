import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const ReservationsList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const storedReservations = await AsyncStorage.multiGet([
          'mode',
          'address',
          'phone',
          'cardNumber',
        ]);

        const reservationsData = storedReservations.map(([key, value]) => ({
          key,
          value,
        }));

        setReservations(reservationsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchReservations();
  }, []);

  const renderReservation = ({ item }) => (
    <View style={styles.reservationContainer}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={
            item.key === 'mode'
              ? item.value === 'face'
                ? 'person'
                : 'videocam'
              : item.key === 'address'
              ? 'location'
              : item.key === 'phone'
              ? 'call'
              : 'card'
          }
          size={24}
          color="#BA68C8"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>
          {item.key === 'mode'
            ? 'Mode'
            : item.key === 'address'
            ? 'Adresse'
            : item.key === 'phone'
            ? 'Téléphone'
            : 'Numéro de carte'}
        </Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes réservations</Text>
      <FlatList
        data={reservations}
        renderItem={renderReservation}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  reservationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 24,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    marginTop: 4,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default ReservationsList;