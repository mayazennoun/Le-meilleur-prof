import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import useAuth from './hooks/useAuth';
import TabNavigation from './screens/TabNavigation';
import ItemScreen from './screens/ItemScreen';
import ReservationForm from './screens/ReservationForm';
import ProfilScreen from './screens/ProfilScreen';
import MonprofilScreen from './screens/MonprofilScreen';

import CarteCadeauPage from './screens/CarteCadeauPage';

import ExploreScreen from './screens/ExploreScreen';
import ReservationsList from './screens/ReservationsList';
import AnnonceList from './screens/AnnonceList';
import ChoicesScreen from './screens/ChoicesScreen';
import ResultsScreen from './screens/ResultsScreen';





 const  Stack = createNativeStackNavigator()

export default function App() {
  const {user} = useAuth();
  if(user){
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
   }} initialRouteName='Home' >
    <Stack.Screen name="Home" component={TabNavigation}/>
 
  <Stack.Screen name='Annonce ' component={AnnonceList}/>
    <Stack.Screen name='Item'   component={ItemScreen}/>
   <Stack.Screen name='Reservation' component={ReservationForm}/>
   <Stack.Screen name='Gift' component={CarteCadeauPage}/>
  <Stack.Screen name='MonProfile' component={MonprofilScreen}/>
  <Stack.Screen name='Explore' component={ExploreScreen}/>
  <Stack.Screen name='MProfil' component={ProfilScreen}/>
  <Stack.Screen name='ListReservation' component={ReservationsList}/>
 <Stack.Screen name='ChoicesScreen' component={ChoicesScreen}/>
 <Stack.Screen name='ResultsScreen' component={ResultsScreen}/>
  </Stack.Navigator>
</NavigationContainer>
  );
  }else{
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
   }} initialRouteName='Welcome'>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    <Stack.Screen name="Sign Up" component={SignupScreen}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
   
    
    
   
   
  </Stack.Navigator>
</NavigationContainer>
  );
  }
}

