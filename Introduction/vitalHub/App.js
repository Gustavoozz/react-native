
import AppLoading from 'expo-app-loading';

import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarSenha } from './src/screens/VerificarSenha/VerificarSenha';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { Cadastro } from './src/screens/Cadastro/Cadastro';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{title: "RecuperarSenha"}}
        />

        <Stack.Screen
          name="VerificarSenha"
          component={VerificarSenha}
          options={{title: "VerificarSenha"}}
        />

        <Stack.Screen
            name="RedefinirSenha"
            component={RedefinirSenha}
            options={{title: "RedefinirSenha"}}
        />

      <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title: "Cadastro"}}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}}