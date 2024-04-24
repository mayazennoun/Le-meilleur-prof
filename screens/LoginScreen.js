import { View, Text ,SafeAreaView, TouchableOpacity,Image, TextInput} from 'react-native'
import React, { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Ionicons } from '@expo/vector-icons';
const LoginScreen = ({navigation}) => {
   const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const handleSubmit = async()=>{
    if(email&&password){
      try{
          await signInWithEmailAndPassword(auth,email,password);
      }catch(err){
        console.log('got error :',err.message);
      }
    }
  }
  return (
    <View className="flex-1 bg-[#faf5ff] ">
    <SafeAreaView className="flex">
 <View className="flex-row justify-start">
 <TouchableOpacity
 onPress={()=>navigation.goBack()}
  className="bg-[#BA68C8] rounded-tr-2xl  ml-3 mt-2">
<Ionicons name="return-down-back-sharp" size={24} color="black" />
      </TouchableOpacity>
</View>
<View className="flex-row justify-center">
    <Image source={require("../assets/singuppic.png")}
    style={{width:200,height:200}}/>
</View>


    </SafeAreaView>
    <View className="flex-1 bg-white px-8 pt-8"
 style={{borderTopLeftRadius: 50,borderTopRightRadius: 50,}}>
 <View className="from   space-y-2">
      <Text className="text-black ml-4">Email Adress</Text>
<TextInput 
className="p-4 bg-[#f3f4f6]  text-[#0b0b0b] rounded-[30px] mb-3"
    value={email} onChangeText={value=>setEmail(value)}  placeholder='Enter your adress email'
/>
   <Text className="text-black ml-4">Password</Text>
<TextInput 
className="p-4 bg-[#f3f4f6]  text-[#050505] rounded-[30px]"
secureTextEntry
value={password} onChangeText={value=>setPassword(value)}
    placeholder='Enter password'
/>
<TouchableOpacity className="flex items-end mb-5">
<Text> Forget Password? </Text>
 </TouchableOpacity>
 <TouchableOpacity
 className="py-4 bg-[#BA68C8] rounded-[30px]"
 onPress={handleSubmit}
 > 
 <Text className="font-xl font-bold text-center text-white"> Login
  </Text>
 </TouchableOpacity>
      </View>
      <Text className=" text-xl text-black font-bold text-center py-5">Or</Text>
      <View className="flex-row justify-center space-x-10">
        <TouchableOpacity className="p-2 bg-[#f3f4f6] rounded-[30px]"> 
        <Image source={require("../assets/google.png")} className="w-10 h-10"/></TouchableOpacity>
          <TouchableOpacity className="p-2 bg-[#f3f4f6] rounded-[30px]"> 
        <Image source={require("../assets/facebook.png")} className="w-10 h-10"/></TouchableOpacity>
     <TouchableOpacity className="p-2 bg-[#f3f4f6] rounded-[30px]"> 
        <Image source={require("../assets/ios.png")} className="w-10 h-10"/></TouchableOpacity>
      </View>
     <View className="flex-row justify-center m-10 font-semibold  ">
    <Text>Don't have an account ? </Text>
    <TouchableOpacity 
    onPress={() => navigation.navigate("Sign Up")}>
        <Text className="text-[#BA68C8] font-semibold ">Sign Up</Text>
    </TouchableOpacity>
</View>
      
    </View>

    </View>
  )
}

export default LoginScreen