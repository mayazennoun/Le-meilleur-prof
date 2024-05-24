import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'


import HeaderHomeScreen from '../components/HeaderHomeScreen'

import CategoriesHomeScreen from '../components/CategoriesHomeScreen'
import MatiereSearchBar from '../components/MatiereSearchBar'
import LatestItemsList, { teacherData } from '../components/LastestItemsList'
import Sliders from '../components/Sliders'

 



const HomeScreen = ({navigation}) => {
  return (
    <View className="p-10">
 <HeaderHomeScreen/>
<MatiereSearchBar/>

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
    fontSize: 15,
    fontWeight: 'bold',
  },
   
   
});
export default HomeScreen




