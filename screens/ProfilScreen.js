import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth'; // Assurez-vous que votre hook useAuth est bien importé

// Importez l'image de profil depuis votre dossier d'assets
 // Remplacez par le chemin correct de votre image

const ProfilScreen = ({navigation}) => {
    // Utilisez le hook useAuth pour obtenir l'utilisateur actuel
    const { user } = useAuth();

    // Fonction de déconnexion
    const handleLogout = async () => {
        try {
            await auth.signOut();
            // Vous pouvez ajouter des actions supplémentaires après la déconnexion ici
            console.log('Déconnexion réussie');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Afficher la photo de profil de l'utilisateur depuis les assets */}
            <Image
                source={require('../assets/avatar.png.jpg')}
                style={styles.profileImage}
            />
            
            {/* Afficher l'email de l'utilisateur */}
            {user && (
                <Text style={styles.userEmail}>
                    Bienvenue ! {'\n'} {user.email}
                </Text>
            )}

            {/* Options de profil */}
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('MonProfile') }}>
                <FontAwesome name="user" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mon profil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {   }}>
                <FontAwesome name="star" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mes favoris</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => { /* Ajoutez votre logique ici */ }}>
                <FontAwesome name="book" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mes cours</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => { /* Ajoutez votre logique ici */ }}>
                <FontAwesome name="credit-card" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mes paiements</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {  navigation.navigate('Gift') }}>
                <FontAwesome name="gift" size={35} color="#BA68C8" />
                <Text style={styles.text}>Carte cadeau</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleLogout}>
                <FontAwesome name="sign-out" size={34} color="#BA68C8" />
                <Text style={styles.text}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 80,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20, // Pour ajouter de l'espace entre la photo et l'email
    },
    userEmail: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20, // Pour ajouter de l'espace entre l'email et les options de profil
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: -30, // Ajustez la marge selon votre conception
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
      
        color: 'black',
    },
});

export default ProfilScreen;


