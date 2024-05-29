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
                            source={require("../assets/9439726.jpg")} 
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
      marginTop:36,
    },
     header: {
        flexDirection: 'row',   
        
    },

    title: {
        
       
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
        marginTop:-22,
      
    },
});

export default HeaderHomeScreen;

