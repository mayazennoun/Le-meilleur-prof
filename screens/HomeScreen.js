import { View, Text } from 'react-native'
import React from 'react'

import Flat from '../components/Flat'
import HeaderHomeScreen from '../components/HeaderHomeScreen'
import SearchBar from '../components/SearchBar'
import CategoriesHomeScreen from '../components/CategoriesHomeScreen'

const HomeScreen = () => {
  return (
    <View className="p-10">
 <HeaderHomeScreen/>
 <SearchBar/>

 <Flat/>
 <CategoriesHomeScreen/>

    </View>
  )
}

export default HomeScreen




