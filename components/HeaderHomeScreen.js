import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const HeaderHomeScreen = () => {
    
    const { user } = useAuth();
    

    return (
        <View style={styles.container}>
           
            {user ? (
                <View style={styles.header}>
                <Text style={styles.title}> Bienvenue ! {'\n'} {user.email} </Text>
                <TouchableOpacity >
                        <Image
                            source={require("../assets/avatar.png.jpg")} 
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                     </View>
            ) : (
                <Text style={styles.title}>Bienvenue, Invité !</Text>
            )}
          
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
       
         
        backgroundColor: '#f0f0f0',
    },
     header: {
        flexDirection: 'row',   
    },

    title: {
        
        marginTop:17,
        margin:-20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
      profileImage: {
        width: 40, 
        height: 40,
        borderRadius: 20,
        marginLeft:160,
        marginTop:18,
      
    },
});

export default HeaderHomeScreen;

