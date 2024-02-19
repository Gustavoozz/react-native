import { View } from "react-native"
import { CardTest, Container, DoctorContainer, HeaderHome, InfoContainer } from "../../components/Container/Style"
import { NotificationBell, UserDoctor } from "../../components/Logo/Style"

import { MontSerratWhite, UserText } from "../../components/Text/Text"
import { ButtonTitle, Title } from "../../components/Title/Style"
import CalendarStrip from 'react-native-calendar-strip'

import { SelectButton, WhiteSelectButton } from "../../components/Button/Style"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"

import { ContainerButton } from "./Style"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { useState } from "react"

export const MedicoConsultas = () => {

    const [statusLista, setStatusLista] = useState("pendente")

    return(
        <Container>
            <HeaderHome>
            <UserDoctor
            source={require('../../assets/UserDoctor.png')}
            />  
            <InfoContainer>
                 <UserText>Bem-vindo</UserText>
               <MontSerratWhite>Dr. Claudio </MontSerratWhite>
            </InfoContainer>
            
            <NotificationBell
            source={require('../../assets/Bell.png')}
            />
            </HeaderHome>

            <DoctorContainer>
            {/* Calendar New */}
            <CalendarHome/>

            {/* Calendar old: */}
            {/* <Title style={{ marginTop: 18, marginLeft: 18, marginBottom: 0 }}>Novembro 2023</Title> */}

            {/* <CalendarStrip           
             style={{ height: 100, width: '100%', marginTop: 0 }}
             dateNumberStyle={{ color: '#5F5C6B' }}
             dateNameStyle={{ color: '#ACABB7', marginBottom: 10 }}
             highlightDateNameStyle={{ color: '#60BFC5' }} 
             highlightDateNumberStyle={{ color: 'white', backgroundColor: '#60BFC5', height: 30, width: 30, borderRadius: 15, textAlignVertical: 'center' }}
             
             showMonth={false}
             scrollable={true}
             iconLeft={false}
             iconRight={false}
            /> */}

            <ContainerButton>
            <BtnListAppointment
            textButton={"Agendadas"}
            clickButton={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
            />

            <BtnListAppointment
            textButton={"Realizadas"}
            clickButton={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
            />

            <BtnListAppointment
            textButton={"Canceladas"}
            clickButton={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
            />
            </ContainerButton>
            
             {/* <SelectButton>
                <ButtonTitle style={{ textTransform: null, fontSize: 12 }}>Agendados</ButtonTitle>
            </SelectButton> 

            <WhiteSelectButton>
           <ButtonTitle style={{ textTransform: null, fontSize: 12, color: '#607EC5' }}>Realizadas</ButtonTitle>
           </WhiteSelectButton>

           <WhiteSelectButton>
           <ButtonTitle style={{ textTransform: null, fontSize: 12, color: '#607EC5' }}>Canceladas</ButtonTitle>
           </WhiteSelectButton>    */}

         
            <CardPaciente
            imagePatient={'https://github.com/Gustavoozz.png'}
            patientName={"Gustavo"}
            patientAge={"18 anos"}
            appointmentType={"Endócrino"}
            appointmentHour={"17:00"}
            />

            <CardPaciente
            imagePatient={'https://github.com/Gustavoozz.png'}
            patientName={"Gustavo"}
            patientAge={"18 anos"}
            appointmentType={"Endócrino"}
            appointmentHour={"17:00"}
            />    
            
            </DoctorContainer>         
        </Container>
    )
}