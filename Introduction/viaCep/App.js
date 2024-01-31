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
import DropShadow from "react-native-drop-shadow";

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
  <StatusBar backgroundColor={'transparent'} translucent/>
    
  {/* HEADER */}
  <Header />
    
  


  {/* HOMESCREEN */}

  

  </ContainerApp>
  );
}
};


