import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ContainerApp } from './src/components/Container/ContainerApp';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';



export default function App() {
 
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
  <ContainerApp>
  <StatusBar 
  backgroundColor={'transparent'} translucent
  barStyle="light-content"
  />
    
  {/* HEADER */}
  <Header />
    
  {/* HOMESCREEN */}
  <Home />
  
  </ContainerApp>
  );
}
};


