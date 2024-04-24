import { View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const PierreBernardScreen = () => {
    
    const navigation = useNavigation();
    const [isFavourite,toggleFavourite] = useState(false);
  return (
    <View className = "bg-white flex-1 ">
    <Image source={require("../assets/Pierre Bernard.jpg")}
    style={{width:440,height:400}}/>
     <StatusBar style={'light'}></StatusBar>
    <SafeAreaView className="flex-row justify-between items-center w-full absolute">
    <TouchableOpacity 
    onPress={()=>navigation.goBack()}
    className="p-2 rounded-full ml-4" style={{backgroundColor:'rgba(255,255,255,0,5)'}}> 
    <Ionicons name="return-down-back" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>toggleFavourite(!isFavourite)}
     className="p-5 rounded-full ml-4" style={{backgroundColor:'rgba(255,255,255,0,5)'}}> 
    <FontAwesome name="heart-o" size={24} color={isFavourite? "red" : "white"} />
    </TouchableOpacity>
     </SafeAreaView>
     <View  style={{borderTopLeftRadius:40,borderTopRightRadius: 40}} className="px-5  flex flex-1 justify-between bg-white pt-8 -mt-14 ">
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
        <View className="flex-row justify-between items-start"> 
        <Text style={{fontSize:15}} className="font-bold flex-1 "> Pierre Bernard </Text>
        <Text style={{fontSize:15}} className="text-[#BA68C8] font-bold"> 3500DA/Mois</Text>
        </View>
        <Text style={{fontSize:15}} className="tracking-wide mb-2"> Pierre Bernard, passionné par l'histoire, offre des cours captivants aux étudiants de tous niveaux. Son approche pédagogique engageante et son expertise permettent aux élèves de développer une compréhension profonde du passé et de s'épanouir dans leur apprentissage académique.
</Text>
       <View className="flex-row justify-between mx-1"> 
       <View className="flex-row space-x-2 items-start"> 
       <FontAwesome name="clock-o" size={24} color="#AFA4CE" />
       <View className="flex space-y-2"> 
       <Text className="font-bold">30 Jours</Text>
       <Text style={{fontSize:11}}>Duration </Text>
       </View>
       </View>
        <View className="flex-row space-x-2 items-start"> 
       <MaterialCommunityIcons name="math-integral-box" size={24} color="#317AC1" />
       <View className="flex space-y-2"> 
       <Text className="font-bold">Histoire </Text>
       <Text style={{fontSize:11}}>Matiere </Text>
       </View>
       </View>
        <View className="flex-row space-x-2 items-start"> 
       <FontAwesome name="money" size={24} color="#5D7052" />
       <View className="flex space-y-2"> 
       <Text className="font-bold">3500DA/Mois </Text>
       <Text style={{fontSize:11}}>Prix</Text>
       </View>
       </View>
       </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Reservation")}
       style={{backgroundColor:"#BA68C8",width:200,height:60}} className="mb-6 mx-auto flex justify-center items-center rounded-full">
        <Text className="text-white font-bold" style={{fontSize:18}}> Reserver</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default PierreBernardScreen