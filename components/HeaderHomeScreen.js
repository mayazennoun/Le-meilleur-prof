import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import useAuth from '../hooks/useAuth';; // Remplacez par le chemin de votre hook useAuth

const HeaderHomeScreen = ({navigation}) => {
    // Utilisez useAuth pour obtenir l'utilisateur actuellement connecté
    const { user } = useAuth();
    

    return (
        <View style={styles.container}>
            {/* Si l'utilisateur est connecté, affichez son email */}
            {user ? (
                <View style={styles.header}>
                <Text style={styles.title}> Bienvenue ! {'\n'} {user.email} </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
                        <Image
                            source={require("../assets/avatar.png.jpg")} // Remplacez par le chemin de votre image de profil
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                     </View>
            ) : (
                <Text style={styles.title}>Bienvenue, Invité !</Text>
            )}
            {/* Ajoutez d'autres éléments d'interface utilisateur de votre écran d'accueil ici */}
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
       
         
        backgroundColor: '#f0f0f0',
    },
     header: {
        flexDirection: 'row', // Les éléments sont disposés en ligne
         // Aligne les éléments verticalement
     // Ajoutez un espacement entre le header et les autres éléments
    },

    title: {
        
        marginTop:17,
        margin:-20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
      profileImage: {
        width: 40, // Ajustez la taille de l'image de profil
        height: 40,
        borderRadius: 20,
        marginLeft:160,
        marginTop:18,
      // Rendre l'image ronde
    },
});

export default HeaderHomeScreen;

