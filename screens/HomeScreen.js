import { View, Text ,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'


import HeaderHomeScreen from '../components/HeaderHomeScreen'
import CategoriesHomeScreen from '../components/CategoriesHomeScreen'
import MatiereSearchBar from '../components/MatiereSearchBar'
import LatestItemsList, { teacherData } from '../components/LastestItemsList'
import Sliders from '../components/Sliders'

const HomeScreen = ({navigation}) => {
  
   

  const handleFilterNavigation = () => {
    navigation.navigate('ChoicesScreen');
  };
  return (
    <View className="p-10 bg-[#E7F6FD]">
 <HeaderHomeScreen/>
 <TextInput
        style={styles.searchBar}
        placeholder="Rechercher..."
      
      />
 <TouchableOpacity style={styles.filterButton} onPress={handleFilterNavigation}>
        <Text style={styles.filterButtonText}>Filtrer</Text>
      </TouchableOpacity>
   

 <Sliders/>
 <Text style={styles.title1}>Categories :</Text>
 <CategoriesHomeScreen/>
 <LatestItemsList data={teacherData} />





    </View>
  )
}
const styles = StyleSheet.create({
     container: {
   
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title1: {
   fontWeight: 'bold', 
   fontSize: 20,
  },
  filterButton: {
    marginTop:20,
    backgroundColor: '#64C4C3',
    padding: 10,
    borderRadius: 25,
    marginBottom: 5,
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
   searchBar: {
    marginTop:18,
    height: 40,
    borderColor: '#FFFF',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: -9,
  },
   
   
});
export default HomeScreen




