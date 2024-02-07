import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { TextQuick } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"

export const RecuperarSenha = () => {
    return(
        <Container>
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

       <Button>
        <ButtonTitle>Continuar</ButtonTitle>
       </Button>
    </Container>
    )
    
}