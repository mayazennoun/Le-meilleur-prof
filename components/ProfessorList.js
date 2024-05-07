import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const professorsData = [
    
        {
            id: 1,
            prenom: 'Jean',
            nom: 'Dupont',
            matiere: 'Mathématiques   ',
            photo: require('../assets/profDupontPhoto .jpg'),
            screenName: 'ItemJeanDupont'
        },
        {
            id: 2,
            prenom: 'Marie',
            nom: 'Martin  ',
            matiere: 'Français',
            photo: require('../assets/MarieMartin.jpg'),
            screenName: 'ItemMarieMartin'
        },
        {
         id: 3,
            prenom: 'Pierre',
            nom: 'Bernard   ',
            matiere: 'Histoire',
            photo: require('../assets/Pierre Bernard.jpg'),
            screenName: 'ItemPierreBernard' 
        },
         {
         id: 4,
            prenom: 'Sophie',
            nom: 'Lambert   ',
            matiere: 'SVT',
            photo: require('../assets/Sophie Lambert.jpg'),
            screenName: 'ItemSophieLambert' 
        },
         {
         id: 5,
            prenom: 'Antoine',
            nom: 'Martin   ',
            matiere: 'Physique',
            photo: require('../assets/AntoineMartin.jpg'),
            screenName: 'ItemAntoineMartin' 
        },
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
            nom: 'Mahi  ',
            matiere: 'Philosophie',
            photo: require('../assets/Jonas Mahi.jpg'),
            screenName: 'ItemJonasMahi'
        },
       
         {
         id: 10,
            prenom: 'Nicolas',
            nom: 'Dupuis  ',
            matiere: 'Anglais',
            photo: require('../assets/Nicolas Dupuis.jpg'),
            screenName: 'ItemNicolasDupuis' 
        },
         {
         id: 11,
            prenom: 'Lea',
            nom: 'Moureau  ',
            matiere: 'Théatre',
            photo: require('../assets/Lea Moureau.jpg'),
            screenName: 'ItemLeaMoreau'
        },
         {
         id: 12,
            prenom: 'Jules',
            nom: 'Abidi',
            matiere: 'Latin',
            photo: require('../assets/Jules Abidi.jpg'),
            screenName: 'ItemJulesAbidi' 
        },
         {
         id: 13,
            prenom: 'Sandrine',
            nom: 'Phore',
            matiere: 'Arabe',
            photo: require('../assets/Sandrine Phore.jpg'),
            screenName: 'ItemSandrinePhore' 
        },
         {
         id: 14,
            prenom: 'Vincent',
            nom: 'Laurent',
            matiere: 'Education Physique',
            photo: require('../assets/Vincent Laurent.jpg'),
            screenName: 'ItemVincentLaurent'
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

const ProfessorList = ({navigation}) => {
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

export default ProfessorList;

