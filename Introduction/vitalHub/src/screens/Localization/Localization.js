import { View } from "react-native"
import { CityContainer, Container } from "../../components/Container/Style"
import { InputCity, InputUser } from "../../components/Input/Style"
import { MapClinic } from "../../components/Logo/Style"
import { SubTextQuick } from "../../components/Text/Text"
import { LabelUser, Title } from "../../components/Title/Style"
import { TextClinic } from "../ClinicSelect/Style"

export const Localization = () => {
    return(
        <Container>
            <MapClinic
            source={require('../../assets/Map.png')}
            />

            <Title style={{ marginTop: 30, marginBottom: 10 }}>Clínica Natureh</Title>
           <SubTextQuick>São Paulo, SP</SubTextQuick> 

           <LabelUser>Endereço</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Rua Vicenso Silva, 987"
            placeholderTextColor="#33303E"/> 

            <CityContainer>
            <View>
            <LabelUser>Número</LabelUser>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="578"
            placeholderTextColor="#33303E"/>
            </View>
            
            <View>
            <LabelUser>Bairro</LabelUser>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Moema-SP"
            placeholderTextColor="#33303E"/>   
            </View>
            </CityContainer>
        </Container>
    )
}