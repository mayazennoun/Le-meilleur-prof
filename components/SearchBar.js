import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Pour l'icône de recherche

const SearchBar = ({ onSearch, onFilter }) => {
    // État pour gérer la valeur de recherche et l'option sélectionnée
    const [searchValue, setSearchValue] = useState('');
    const [courseOption, setCourseOption] = useState(null);

    // Fonction pour gérer la modification de la valeur de recherche
    const handleSearchChange = (text) => {
        setSearchValue(text);
        onSearch(text); // Appelez la fonction de recherche passée en props
    };

    // Fonction pour gérer la sélection de l'option de cours
    const handleCourseOptionSelect = (option) => {
        setCourseOption(option);
        onFilter(option); // Appelez la fonction de filtre passée en props
    };

    return (
        <View style={styles.container}>
            {/* Barre de recherche */}
            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Rechercher..."
                    value={searchValue}
                    onChangeText={handleSearchChange}
                />
            </View>

            {/* Options de cours */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        courseOption === 'face_to_face' && styles.selectedOptionButton,
                    ]}
                    onPress={() => handleCourseOptionSelect('face_to_face')}
                >
                    <Text style={styles.optionButtonText}>Face à face</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        courseOption === 'at_home' && styles.selectedOptionButton,
                    ]}
                    onPress={() => handleCourseOptionSelect('at_home')}
                >
                    <Text style={styles.optionButtonText}>À domicile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50, // Ajustez la marge supérieure pour centrer la barre de recherche au milieu de l'écran
        justifyContent: 'center', // Centre les éléments verticalement
        alignItems: 'center', // Centre les éléments horizontalement
        flexDirection: 'column',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 20,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    optionsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    optionButton: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    optionButtonText: {
        fontSize: 16,
        color: 'black',
    },
    selectedOptionButton: {
        backgroundColor: '#BA68C8',
        borderColor: '#BA68C8',
    },
});

export default SearchBar;

