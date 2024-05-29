import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
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
    marginTop:35,
    backgroundColor: '#64C4C3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
   
   
});
export default HomeScreen




