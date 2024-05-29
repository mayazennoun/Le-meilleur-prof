import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Video from 'react-native-video';
const subjects = [
  { name: 'Arabe', image: require('../assets/1.jpg') },{ name: 'Théâtre', image: require('../assets/1.jpg') }
  
  
];

const SubjectItem = ({ item }) => (
  <View style={styles.subjectContainer}>
    <Image source={item.image} style={styles.subjectImage} />
    
  </View>
);

const Sliders = () => (
  <FlatList
    data={subjects}
    renderItem={({ item }) => <SubjectItem item={item} />}
    keyExtractor={(item) => item.name}
      horizontal />
);

const styles = StyleSheet.create({
  subjectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  subjectImage: {
    marginTop:20,
    margin:-8,
    width: 340, 
    height: 160, 
    marginBottom: 1,
    borderRadius: 10, 
  },
  subjectName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Sliders;
