import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';
import Person from './src/components/Person/Person';
import Games from './src/components/Games/Games';
import { FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';


  // const peopleList = [
  //   {id: '1', name: 'Gustavo', age: 18},
  //   {id: '2', name: 'Gugu', age: 12},
  //   {id: '3', name: 'Gustavão', age: 45},
  // ]

  const gamesList = [
    {id: '1', name: 'Red Dead Redemption 2', releaseDate: '26 de outubro de 2018', genre: 'Open World', price: 'U$54,99'},
    {id: '2', name: 'EAFC24', releaseDate: '29 de setembro de 2023', genre: 'Sports', price:'U$79,99'},
    {id: '3', name: 'Elden Ring', releaseDate: '25 de fevereiro de 2022', genre: 'Open World', price:'U$38,98' },
    {id: '4', name: 'Stardew Valley', releaseDate: '26 de fevereiro de 2016', genre: 'Farm Simulator', price:'U$5,99' },
]

  export default function App() {
    let [fontsLoaded] = useFonts({
      Poppins_100Thin,
      Poppins_100Thin_Italic,
      Poppins_200ExtraLight,
      Poppins_200ExtraLight_Italic,
      Poppins_300Light,
      Poppins_300Light_Italic,
      Poppins_400Regular,
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_500Medium_Italic,
      Poppins_600SemiBold,
      Poppins_600SemiBold_Italic,
      Poppins_700Bold,
      Poppins_700Bold_Italic,
      Poppins_800ExtraBold,
      Poppins_800ExtraBold_Italic,
      Poppins_900Black,
      Poppins_900Black_Italic,
    });
  
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } 
    else {

   return (
    <SafeAreaView>

    <StatusBar />

      {/* <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ( <Person name={item.name} age={item.age}/>
      )}
      /> */}

      <FlatList 
      data={gamesList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => ( <Games name={item.name} releaseDate={item.releaseDate} genre={item.genre} price={item.price}/>
      )}
      />

    
    </SafeAreaView>
  );
  }
}
