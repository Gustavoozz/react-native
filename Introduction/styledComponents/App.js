import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title, TitleIncrement } from './src/components/Title/Title';
import { ButtonDecrement, ButtonIncrement } from './src/components/Button/Button';
import clockImg from './src/assets/images/1_D3XUxilnSSx6XxIQ1QlCXA.gif';
import { ImageClock } from './src/components/Image/Image';

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
    if(count > 0)
    {
      setCount(count - 1)
    }
    else {
      Alert.alert('Error!')
    }
  };


  useEffect(() => {
    console.warn(`Contador atualizado ${count}`)
  }, [count])

  return (
    <Container>

   <ImageClock
    source={clockImg}
   />


    <Title>{count}</Title>

      <ButtonIncrement onPress={increment}>
      <TitleIncrement>+</TitleIncrement>
      </ButtonIncrement>
      
      <ButtonDecrement onPress={decrement}>
      <TitleIncrement>-</TitleIncrement>
      </ButtonDecrement>
        
      <StatusBar style="auto" />
    </Container>
  );
}

