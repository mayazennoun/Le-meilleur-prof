import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Dairas = [
  'El Bouni',
  'Sidi Amar',
  'Les allemends',
  'Chaiba',
  'Sidi achour',
  'Seraidi',
  'Chetaibi',
];

const DairaDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDaira, setSelectedDaira] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectDaira = (daira) => {
    setSelectedDaira(daira);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>
          {selectedDaira || 'Sélectionnez une daïra'}
        </Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownList}>
          {Dairas.map((daira) => (
            <TouchableOpacity
              key={daira}
              style={styles.dropdownItem}
              onPress={() => selectDaira(daira)}
            >
              <Text style={styles.dropdownItemText}>{daira}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 25,
    width: 350,
    marginBottom:25,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownList: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
    width: 200,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DairaDropdown;