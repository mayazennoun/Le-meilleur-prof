import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TutorEvaluationApp = () => {
  const [criteria, setCriteria] = useState({
    communication: false,
    expertise: false,
    availability: false,
    patience: false,
    preparedness: false,
    feedback: false
  });

  const [showMessage, setShowMessage] = useState(false); // Nouveau state pour gérer l'affichage du message

  const toggleCriteria = (criterion) => {
    setCriteria(prevState => ({
      ...prevState,
      [criterion]: !prevState[criterion]
    }));
    setShowMessage(false); // Réinitialiser le message à chaque fois qu'un critère est sélectionné
  };

  const submitEvaluation = () => {
    const selectedCriteria = Object.entries(criteria)
      .filter(([, value]) => value)
      .map(([key]) => key);

    if (selectedCriteria.length === 0) {
      setShowMessage(true); // Afficher le message si aucun critère n'est sélectionné
    } else {
      // Vous pouvez ajouter ici le code pour envoyer les données de l'évaluation à un serveur ou effectuer d'autres actions
      console.log(`Vous avez sélectionné les critères suivants : ${selectedCriteria.join(', ')}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Évaluez votre Tuteur !</Text>
      
      <View style={styles.criteriaContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => toggleCriteria('communication')} style={[styles.criteriaItem, { borderColor: criteria.communication ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.communication ? 'heart' : 'heart-outline'} size={24} color={criteria.communication ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Communication</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleCriteria('expertise')} style={[styles.criteriaItem, { borderColor: criteria.expertise ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.expertise ? 'heart' : 'heart-outline'} size={24} color={criteria.expertise ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Expertise</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => toggleCriteria('availability')} style={[styles.criteriaItem, { borderColor: criteria.availability ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.availability ? 'heart' : 'heart-outline'} size={24} color={criteria.availability ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Disponibilité</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleCriteria('patience')} style={[styles.criteriaItem, { borderColor: criteria.patience ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.patience ? 'heart' : 'heart-outline'} size={24} color={criteria.patience ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Patience</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => toggleCriteria('preparedness')} style={[styles.criteriaItem, { borderColor: criteria.preparedness ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.preparedness ? 'heart' : 'heart-outline'} size={24} color={criteria.preparedness ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Préparation</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleCriteria('feedback')} style={[styles.criteriaItem, { borderColor: criteria.feedback ? '#BA68C8' : 'gray' }]}>
            <MaterialCommunityIcons name={criteria.feedback ? 'heart' : 'heart-outline'} size={24} color={criteria.feedback ? '#BA68C8' : 'gray'} />
            <Text style={styles.criteriaText}>Rétroaction</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showMessage && <Text style={styles.message}>Veuillez sélectionner au moins un critère pour soumettre votre évaluation.</Text>}

      <TouchableOpacity style={styles.submitButton} onPress={submitEvaluation}>
        <Text style={styles.submitButtonText}>Soumettre l'évaluation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  criteriaContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  criteriaText: {
    fontSize: 16,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#BA68C8',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    color: 'red',
    marginBottom: 10,
  },
});

export default TutorEvaluationApp;