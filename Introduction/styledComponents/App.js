import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {


  // Hook de state:
  const [count, setCount] = useState(0)

  //Função para incremento:
  const increment = () => {
    setCount(count + 1)
  };

  //Função para decremento:
  const decrement = () => {
    setCount(count - 1)
  };


  useEffect(() => {
    console.warn(`Contador atualizado ${count}`)
  }, [count])

  return (
    <View style={styles.container}>

      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity style={styles.buttonIncrement}onPress={increment}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  count: {
    marginBottom: 20,
    color: 'white',
    fontSize: 30
  },

  text: {
    color: 'white',
    fontSize: 30,
  },

  button: {
    backgroundColor: 'red',
    width: '50%',
    height: 30,
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonIncrement: {
    backgroundColor: 'green',
    width: '50%',
    height: 30,
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});
