import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

import AnnonceList from './AnnonceList';

const ExploreScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = onSnapshot(collection(db, 'Profs'), (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setData(items);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <AnnonceList data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F6FD',
  },
});

export default ExploreScreen;







