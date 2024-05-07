import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBar = ({ onSearch, onFilter }) => {
    
    const [searchValue, setSearchValue] = useState('');
    const [courseOption, setCourseOption] = useState(null);

   
    const handleSearchChange = (text) => {
        setSearchValue(text);
        onSearch(text);
    };

  
    const handleCourseOptionSelect = (option) => {
        setCourseOption(option);
        onFilter(option);
    };

    return (
        <View style={styles.container}>
          
            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Rechercher..."
                    value={searchValue}
                    onChangeText={handleSearchChange}
                />
            </View>

          
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
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center', 
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

