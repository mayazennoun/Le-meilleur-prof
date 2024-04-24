import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const subjects = [
  { name: 'Arabe', icon: 'abjad-arabic' },
  { name: 'Théâtre', icon: 'theater' },
  { name: 'Français', icon: 'alphabetical' },
  { name: 'Mathématiques', icon: 'math-integral' },
  { name: 'Histoire/Geo', icon: 'book-open-variant' },
  { name: 'SVT', icon: 'leaf' },
  { name: 'Chimie', icon: 'flask' },
  { name: 'Philosophie', icon: 'thought-bubble' },
  { name: 'Latin', icon: 'alphabetical' },
  { name: 'Informatique', icon: 'laptop' },
];

const SubjectItem = ({ item }) => (
 
  <View style={styles.subjectContainer}>
  
    <MaterialCommunityIcons name={item.icon} size={32} color="#BA68C8" style={styles.subjectIcon} />
    <Text style={styles.subjectName}>{item.name}</Text>
  </View>
);

const CategoriesHomeScreen = () => (
  <FlatList
    data={subjects}
    renderItem={({ item }) => <SubjectItem item={item} />}
    keyExtractor={(item) => item.name}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

const styles = StyleSheet.create({
  subjectContainer: {
    alignItems: 'center',
    padding: 10,
    
  },
  subjectIcon: {
    marginBottom: 5,
    borderRadius:50,
  },
  subjectName: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CategoriesHomeScreen;