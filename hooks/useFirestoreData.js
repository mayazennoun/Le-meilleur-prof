import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'; // Assurez-vous d'importer votre instance Firebase Firestore

const useFirestoreData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'prof'));
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        const { nom, prenom } = doc.data();
        dataArray.push({ nom, prenom });
      });
      setData(dataArray);
    };

    fetchData();
  }, []);

  return data;
};

export default useFirestoreData;
