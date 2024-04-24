import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ProfilScreen from './ProfilScreen';
import { FontAwesome } from '@expo/vector-icons';
import CreateProfileScreen from './CreateProfileScreen';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
   <Tab.Navigator screenOptions={{
    headerShown:false
   }}>
    <Tab.Screen name="Homee" component={HomeScreen}
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:'#BA68C8',fontSize:12,marginTop:-7}}> Home</Text>
        ),
        tabBarIcon:()=>(
       <FontAwesome name="home" size={24} color="#BA68C8" />
        )

    }} />
      <Tab.Screen name="Explore" component={ExploreScreen}
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:'#BA68C8',fontSize:12,marginTop:-7}}>Explore</Text>
        ),
        tabBarIcon:()=>(
      <FontAwesome name="search" size={24} color="#BA68C8" />
        )
    }} />
      <Tab.Screen name="Create" component={CreateProfileScreen}
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:'#BA68C8',fontSize:12,marginTop:-7}}>Create Profil</Text>
        ),
        tabBarIcon:()=>(
      <FontAwesome name="user-plus" size={24} color="#BA68C8" />
        )
    }} />
  
    <Tab.Screen name="Profil" component={ProfilScreen}
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:'#BA68C8',fontSize:12,marginTop:-7}}> Profil</Text>
        ),
        tabBarIcon:()=>(
      <FontAwesome name="user-circle" size={24} color="#BA68C8" />
        )

    }} />
   </Tab.Navigator>
  )
}

export default TabNavigation