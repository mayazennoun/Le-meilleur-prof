import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth'; 



const ProfilScreen = ({navigation}) => {
    
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await auth.signOut();
           
            console.log('Déconnexion réussie');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    return (
        <View style={styles.container}>
            
            <Image
                source={require('../assets/avatar.png.jpg')}
                style={styles.profileImage}
            />
            
            {}
            {user && (
                <Text style={styles.userEmail}>
                    Bienvenue ! {'\n'} {user.email}
                </Text>
            )}

           
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('MonProfile') }}>
                <FontAwesome name="user" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mon profil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {   }}>
                <FontAwesome name="star" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mes favoris</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {  }}>
                <FontAwesome name="book" size={29} color="#BA68C8" />
                <Text style={styles.text}>Mes cours</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => {  }}>
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
        marginBottom: 20, 
    },
    userEmail: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: -30, 
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
      
        color: 'black',
    },
});

export default ProfilScreen;


