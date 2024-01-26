import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import LoginImg from './src/assets/images/6681204.png'
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
  } else {
  return (
    
    <View style={styles.container}>

      <Image
       style ={styles.img}
       source={LoginImg}
      />  

      <Text style={styles.text}>Login</Text>


      <Text style={styles.textUpper}>E-mail</Text> 
      <TextInput 
      style={styles.input}
      placeholder='Digite seu e-mail:'
      >   
      </TextInput>


      <Text style={styles.textUpper}>Senha</Text> 
      <TextInput
      style={styles.input}
      placeholder='Digite sua senha:'
      >   
      </TextInput>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',

    justifyContent: 'center',
    gap: 8,
  },

  textButton: {
      color: 'white',
  },

  img: {
    width: 300,
    height: 300,
    borderRadius: 40,
  },

  text: {
    color: 'black', 
    fontSize: 30, 
    textAlign: 'center', 
    fontFamily: 'Poppins_100Thin',
    
    marginTop: 10,
    marginBottom: 20,
   
  },

  input: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    width: '70%',

    height: 40,
    paddingLeft: 10,

    color: 'grey',
    borderRadius: 10,
  },

  button: {
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,

    width: '40%',
    height: 40,
    backgroundColor: '#AB5CBF',

    borderRadius: 9,
    marginTop: 50,
    justifyContent: 'center',

    alignItems: 'center',
  },

  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },

  textUpper: {
    marginTop: 20,
    gap: 0,
    marginRight: 230,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Poppins_100Thin',
  }

});
