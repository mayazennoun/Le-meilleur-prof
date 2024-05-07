import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const professorsData = [
    
         {
         id: 6,
            prenom: 'Clément',
            nom: 'Fournier  ',
            matiere: 'Chimie',
            photo: require('../assets/Clement Fournier.jpg'),
            screenName: 'ItemClementFournier' 
        },
        {
         id: 7,
            prenom: 'Isabelle',
            nom: 'Leblanc   ',
            matiere: 'Biologie',
            photo: require('../assets/Isabelle Leblanc.jpg'),
            screenName: 'ItemIsabelleLeBlanc' 
        },
         {
         id: 8,
            prenom: 'Jonas',
            nom: 'Mahi',
            matiere: 'Philosophie',
            photo: require('../assets/Jonas Mahi.jpg'),
            screenName: 'ItemJonasMahi' 
        },
    
];

const ProfessorItem = ({ item, onPress }) => (
    
    <TouchableOpacity onPress={() => onPress(item)} style={styles.professorContainer}>
        <Image source={item.photo} style={styles.professorPhoto} />
        <View style={styles.professorInfo}>
        
            <Text style={styles.professorName}>{item.prenom} {item.nom}</Text>
            <Text style={styles.professorSubject}>{item.matiere}</Text>
        </View>
    </TouchableOpacity>
);

const ProfessorRecommended = ({navigation}) => {
    const handlePress = (prof) => {

    };

    return (
        <View style={styles.container}>
            <FlatList
                data={professorsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProfessorItem item={item} onPress={handlePress} />
                )}
                horizontal
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin:-12,
    },
    professorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        
    },
    professorPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        
        
    },
    professorInfo: {
        flex: 1,
        
    },
    professorName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    professorSubject: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ProfessorRecommended;
