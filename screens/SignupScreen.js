import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Ionicons } from '@expo/vector-icons';

function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async () => {
    if (email && password && username) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
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
                className="bg-[#BA68C8] rounded-tr-2xl ml-4 mt-8"
              >
                <Ionicons name="return-down-back-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Image
                source={require("../assets/typingbro.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </SafeAreaView>
          <View
            className="flex-1 bg-white px-8 pt-8"
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          >
            <View className="from space-y-2">
              <Text className="text-black ml-4">Nom d'utilisateur</Text>
              <TextInput
                className="p-4 bg-[#f3f4f6] text-[#020202] rounded-[30px] mb-3"
                placeholder="Entrez votre Nom"
                value={username}
                onChangeText={(value) => setUsername(value)}
              />
              <Text className="text-black ml-4">Email Adresse</Text>
              <TextInput
                className="p-4 bg-[#f3f4f6] text-[#040404] rounded-[30px] mb-3"
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Entrez votre adresse email"
              />
              <Text className="text-black ml-4">Mot de passe</Text>
              <TextInput
                className="p-4 bg-[#f3f4f6] text-[#030303] rounded-[30px]"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Entrez votre mot de passe"
              />
              <TouchableOpacity className="flex items-end mb-2"></TouchableOpacity>
              <TouchableOpacity
                className="py-4 mt-10 bg-[#BA68C8] rounded-[30px]"
                onPress={handleSubmit}
              >
                <Text className="font-xl font-bold text-center text-white"> Inscription </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center m-10 font-semibold ">
              <Text>Vous avez déjà un compte ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-[#BA68C8] font-semibold ">Connexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignupScreen;