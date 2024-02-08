import { Image } from "react-native"
import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { ArrowIcon, Logo } from "../../components/Logo/Style"
import { TextQuick } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"

export const RecuperarSenha = ({ navigation }) => {
    return(
        
        <Container>
        <ArrowIcon onPress={() => navigation.navigate("Login")}>
        <Image
        source={require('../../assets/Arrow.png')}
        />
        </ArrowIcon>

        <Logo
        source={require('../../assets/VitalHub_Logo.png')}
        />

        <Title>Recuperar senha</Title>

       <TextQuick>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuick>

       <Input
       style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
       placeholder="Usuário ou E-mail"
       placeholderTextColor="#34898F"
       />

       <Button onPress={() => navigation.navigate("VerificarSenha")}>
        <ButtonTitle>Continuar</ButtonTitle>
       </Button>
    </Container>
    )
    
}