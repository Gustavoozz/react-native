
import AppLoading from 'expo-app-loading';

import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


  return (

    // Container = Envolve toda a estrutura de navegação.
    // Navigator = Componente para a navegação.
    // Screen = Tela.
    // >> name: Nome da tela.
    // >> component: Componente que será chamado.
    // >> options ( title ): Título da tela.

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{title: "Navegação"}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}}