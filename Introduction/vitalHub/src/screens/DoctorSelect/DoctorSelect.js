import { Button } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { DoctorPicture } from "../../components/Logo/Style"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink, CardContent, TextClinic } from "../ClinicSelect/Style"
import { DoctorCard, InformationContainer } from "./Style"

export const DoctorSelect = () => {
    return(
        <Container>
             <Title style={{ marginTop: 30, marginBottom: 70 }}>Selecionar médico</Title>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>
              
             <Button style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink>Cancelar</CancelLink>
        </Container>
    )  
}