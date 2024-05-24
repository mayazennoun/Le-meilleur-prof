import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf5ff' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#BA68C8', fontWeight: 'bold', fontSize: 24, textAlign: 'center',marginTop:50 }}>
           Commençons !
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom:25 }}>
        <Image
          source={require("../assets/Teaching.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginBottom: 150 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Sign Up")}
          style={{
            paddingVertical: 12,
            backgroundColor: '#BA68C8',
            borderRadius: 30,
            marginBottom:10,
            margin:20,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Inscription
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
          <Text>Vous avez déjà un compte ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: '#BA68C8', fontWeight: 'bold' }}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
