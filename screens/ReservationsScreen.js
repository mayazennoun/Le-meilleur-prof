import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ReservationList from './ReservationsList'; // Assurez-vous que le chemin est correct

const ReservationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ReservationList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F6FD',
  },
});

export default ReservationsScreen;
