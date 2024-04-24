import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    // Professeurs avec leurs détails (vous pouvez charger ces données dynamiquement à partir d'une API ou d'une base de données)
    const professorsData = [
        {
            id: 1,
            prenom: 'Jean',
            nom: 'Dupont',
            matiere: 'Mathématiques',
            photo: require('../assets/profDupontPhoto .jpg'),
            screenName: 'ItemJeanDupont' // Le nom de l'ItemScreen spécifique pour Jean Dupont
        },
        {
            id: 2,
            prenom: 'Marie',
            nom: 'Martin',
            matiere: 'Français',
            photo: require('../assets/MarieMartin.jpg'),
            screenName: 'ItemMarieMartin' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
        {
         id: 3,
            prenom: 'Pierre',
            nom: 'Bernard',
            matiere: 'Histoire',
            photo: require('../assets/Pierre Bernard.jpg'),
            screenName: 'ItemPierreBernard' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 4,
            prenom: 'Sophie',
            nom: 'Lambert',
            matiere: 'SVT',
            photo: require('../assets/Sophie Lambert.jpg'),
            screenName: 'ItemSophieLambert' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 5,
            prenom: 'Antoine',
            nom: 'Martin',
            matiere: 'Physique',
            photo: require('../assets/AntoineMartin.jpg'),
            screenName: 'ItemAntoineMartin' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 6,
            prenom: 'Clément',
            nom: 'Fournier',
            matiere: 'Chimie',
            photo: require('../assets/Clement Fournier.jpg'),
            screenName: 'ItemClementFournier' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 7,
            prenom: 'Isabelle',
            nom: 'Leblanc',
            matiere: 'Biologie',
            photo: require('../assets/Isabelle Leblanc.jpg'),
            screenName: 'ItemIsabelleLeBlanc' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 8,
            prenom: 'Jonas',
            nom: 'Mahi',
            matiere: 'Philosophie',
            photo: require('../assets/Jonas Mahi.jpg'),
            screenName: 'ItemJonasMahi' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 9,
            prenom: 'Maya',
            nom: 'Zennoun',
            matiere: 'Informatique',
            photo: require('../assets/avatar.png.jpg'),
            screenName: 'Item' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 10,
            prenom: 'Nicolas',
            nom: 'Dupuis',
            matiere: 'Anglais',
            photo: require('../assets/Nicolas Dupuis.jpg'),
            screenName: 'ItemNicolasDupuis' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 11,
            prenom: 'Lea',
            nom: 'Moureau',
            matiere: 'Théatre',
            photo: require('../assets/Lea Moureau.jpg'),
            screenName: 'ItemLeaMoreau' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 12,
            prenom: 'Jules',
            nom: 'Abidi',
            matiere: 'Latin',
            photo: require('../assets/Jules Abidi.jpg'),
            screenName: 'ItemJulesAbidi' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 13,
            prenom: 'Sandrine',
            nom: 'Phore',
            matiere: 'Arabe',
            photo: require('../assets/Sandrine Phore.jpg'),
            screenName: 'ItemSandrinePhore' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
         {
         id: 14,
            prenom: 'Vincent',
            nom: 'Laurent',
            matiere: 'Education Physique',
            photo: require('../assets/Vincent Laurent.jpg'),
            screenName: 'ItemVincentLaurent' // Le nom de l'ItemScreen spécifique pour Marie Martin
        },
        
        

        // Ajoutez d'autres professeurs ici avec leur nom d'écran spécifique
    ];

    // Filtrer les professeurs en fonction de la recherche
    const filteredProfessors = professorsData.filter((prof) => {
        const fullName = `${prof.prenom} ${prof.nom}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase());
    });

    // Fonction pour gérer la navigation vers l'ItemScreen spécifique pour chaque professeur
    const handlePress = (prof) => {
        navigation.navigate(prof.screenName);
    };

    return (
        <View style={styles.container}>
            {/* Barre de recherche */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#BA68C8" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Rechercher un professeur..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>

            {/* Liste des professeurs */}
            <FlatList
                data={filteredProfessors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.professorContainer}>
                        {/* Photo du professeur */}
                        <Image source={item.photo} style={styles.professorPhoto} />

                        {/* Informations sur le professeur */}
                        <View style={styles.professorInfo}>
                            <Text style={styles.professorName}>{item.prenom} {item.nom}</Text>
                            <Text style={styles.professorSubject}>{item.matiere}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        backgroundColor:'#f4f5f7',
        borderColor:'#BA68C8',
        borderRadius: 30,
        padding: 8,
        marginTop:13,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchBar: {
        flex: 1,
        height: 30,
    },
    professorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    professorPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
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

export default ExploreScreen;






