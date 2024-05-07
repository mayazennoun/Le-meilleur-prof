import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

import Flat from '../components/Flat'
import HeaderHomeScreen from '../components/HeaderHomeScreen'
import SearchBar from '../components/SearchBar'
import CategoriesHomeScreen from '../components/CategoriesHomeScreen'
import ProfessorList from '../components/ProfessorList'
import ProfessorRecommended from '../components/ProfessorRecommended'



const HomeScreen = ({navigation}) => {
  return (
    <View className="p-10">
 <HeaderHomeScreen/>
 <SearchBar/>

 <Flat/>
 <Text style={styles.title1}>Categories :</Text>
 <CategoriesHomeScreen/>
     <View style={styles.titleContainer}>
                <Text style={styles.title2}>Last Items :</Text>
                <TouchableOpacity  onPress={() => navigation.navigate("Explore")}
                style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>Voir Tout</Text>
                </TouchableOpacity>
            </View>
 <ProfessorList/>
 <Text style={styles.title3}>Teachers Recommended : </Text>


 <ProfessorRecommended/>


    </View>
  )
}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title3: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:16,
    },
    title1:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    title2:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    seeAllButton: {
        
        paddingVertical: 8,
        paddingHorizontal: 12,
       
    },
    seeAllButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});
export default HomeScreen




