import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log('got error :', err.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#faf5ff' }}>
        <View className="flex-1 bg-[#faf5ff]">
          <SafeAreaView className="flex">
            <View className="flex-row justify-start">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-[#BA68C8] rounded-tr-2xl ml-3 mt-8"
              >
                <Ionicons name="return-down-back-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Image
                source={require("../assets/singuppic.png")}
                style={{ width: 230, height: 230 }}
              />
            </View>
          </SafeAreaView>
          <View
            className="flex-1 bg-white px-8 pt-8"
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          >
            <View className="from space-y-2">
              <Text className="text-black ml-4">Email Adresse</Text>
              <TextInput
                className="p-4 bg-[#f3f4f6] text-[#0b0b0b] rounded-[30px] mb-3"
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Entrez votre adresse email"
              />
              <Text className="text-black ml-4">Mot de passe</Text>
              <TextInput
                className="p-4 bg-[#f3f4f6] text-[#050505] rounded-[30px]"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="entrez votre mot de passe"
              />
              <TouchableOpacity className="flex items-end mb-5">
                <Text> Mot de passe oublié? </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="py-4 bg-[#BA68C8] rounded-[30px]"
                onPress={handleSubmit}
              >
                <Text className="font-xl font-bold text-center text-white"> Connexion </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center m-10 font-semibold ">
              <Text>Vous n'avez pas un compte ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                <Text className="text-[#BA68C8] font-semibold ">Inscription</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;