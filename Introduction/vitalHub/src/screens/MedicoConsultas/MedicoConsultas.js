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
import { ListComponent } from "../../components/List/List"

export const MedicoConsultas = () => {

    const [statusLista, setStatusLista] = useState("pendente");

    const Consultas = [
        { id: 1, nome: "Gustavo", situacao: "pendente" },
        { id: 2, nome: "Gustavo", situacao: "realizado" },
        { id: 3, nome: "Gustavo", situacao: "pendente" },
        { id: 4, nome: "Gustavo", situacao: "realizado" },
        { id: 5, nome: "Gustavo", situacao: "pendente" },
        { id: 6, nome: "Gustavo", situacao: "realizado" },
        { id: 7, nome: "Gustavo", situacao: "pendente" },
    ];
    

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
            <ListComponent
            data={Consultas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
            statusLista == item.situacao && (
                <CardPaciente
                situacao={item.situacao}
                />
            )
            }
            />
         
            {/* <CardPaciente
            imagePatient={'https://github.com/Gustavoozz.png'}
            patientName={"Gustavo Magalhães"}
            patientAge={"19 anos"}
            appointmentType={"Cardiologist"}
            appointmentHour={"17:00"}
            />

            <CardPaciente
            imagePatient={'https://github.com/Gustavoozz.png'}
            patientName={"Gustavo Nascimento"}
            patientAge={"18 anos"}
            appointmentType={"Routine"}
            appointmentHour={"19:00"}
            />     */}
            
            </DoctorContainer>         
        </Container>
    )
}