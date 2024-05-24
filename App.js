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
import JeanDupontScreen from './screens/JeanDupontScreen';
import MarieMartinScreen from './screens/MarieMartinScreen';
import PierreBernardScreen from './screens/PierreBernardScreen';
import SophieLambertScreen from './screens/SophieLambertScreen';
import AntoineMartinScreen from './screens/AntoineMartinScreen';
import ClementFournierScreen from './screens/ClementFournierScreen';
import IsabelleLeblancScreen from './screens/IsabelleLeblancScreen';
import JonasMahiScreen from './screens/JonasMahiScreen';
import NicolasDupuisScreen from './screens/NicolasDupuisScreen';
import LeaMoreauScreen from './screens/LeaMoreauScreen';
import JulesAbidiScreen from './screens/JulesAbidiScreen';
import SandrinePhoreScreen from './screens/SandrinePhoreScreen';
import VincentLaurentScreen from './screens/VincentLaurentScreen';
import CarteCadeauPage from './screens/CarteCadeauPage';

import ExploreScreen from './screens/ExploreScreen';
import ReservationsList from './screens/ReservationsList';





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
    <Stack.Screen name='ItemJeanDupont'   component={JeanDupontScreen}/>
    <Stack.Screen name='ItemMarieMartin'  component={MarieMartinScreen}/>
    <Stack.Screen name='ItemPierreBernard' component={PierreBernardScreen}/>
    <Stack.Screen name='ItemSophieLambert' component={SophieLambertScreen}/>
     <Stack.Screen name='ItemAntoineMartin' component={AntoineMartinScreen}/>
     <Stack.Screen name='ItemClementFournier' component={ClementFournierScreen}/>
     <Stack.Screen name='ItemIsabelleLeBlanc' component={IsabelleLeblancScreen}/>
     <Stack.Screen name='ItemJonasMahi' component={JonasMahiScreen}/>
     <Stack.Screen name='ItemNicolasDupuis' component={NicolasDupuisScreen}/>
     <Stack.Screen name='ItemLeaMoreau' component={LeaMoreauScreen}/>
     <Stack.Screen name='ItemJulesAbidi' component={JulesAbidiScreen}/>
     <Stack.Screen name='ItemSandrinePhore' component={SandrinePhoreScreen}/>
     <Stack.Screen name='ItemVincentLaurent' component={VincentLaurentScreen}/>
    <Stack.Screen name='Item'   component={ItemScreen}/>
   <Stack.Screen name='Reservation' component={ReservationForm}/>
   <Stack.Screen name='Gift' component={CarteCadeauPage}/>
  <Stack.Screen name='MonProfile' component={MonprofilScreen}/>
  <Stack.Screen name='Explore' component={ExploreScreen}/>
  <Stack.Screen name='MProfil' component={ProfilScreen}/>
  <Stack.Screen name='ListReservation' component={ReservationsList}/>
 
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

