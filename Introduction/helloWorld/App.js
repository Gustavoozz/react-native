import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Manoel from './src/assets/channels4_profile.png'


export default function App() {
  return (
    <View style={styles.container}>
      <Image
       style ={styles.img}
       source={Manoel}
      />    
    
      <Text style={styles.text}>
      Caneta Azul, the Greatest
      </Text>

      <TextInput
        style={styles.input}
        defaultValue='Venha canetar conosco!'
      />

      <TouchableOpacity style={styles.butao}>
      Canetar
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'blue', 
    fontSize: 50, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },

  input: {
    width: '60%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    color: 'grey',
    marginTop: 10,
    borderRadius: 6,
  },

  img: {
    width: 400,
    height: 400,
    borderRadius: 40
  },

  butao: {
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 10,
    backgroundColor: 'blue',
    width: '50%',
    height: 60,
    textAlign: 'center',
    paddingTop: 20,
    borderRadius: 12
  }
});
