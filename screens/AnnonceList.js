
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AnnonceList = ({ data }) => {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 38 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Annonces</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image ? { uri: item.image } : require('../assets/9434619.jpg')} style={styles.image} />
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
  itemContainer: {
    
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64C4C3',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
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
    fontWeight: 'bold',
   padding:20,
   backgroundColor:'#64C4C3',
   borderRadius:25,
  },
  buttonText:{
fontWeight: 'bold',
  },
});

export default AnnonceList;
