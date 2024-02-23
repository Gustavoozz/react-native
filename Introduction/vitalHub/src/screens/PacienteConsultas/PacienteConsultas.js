import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarList/CalendarHome"
import { AppointmentBox, Container, DoctorContainer, HeaderHome, InfoContainer } from "../../components/Container/Style"
import { AppointmentIcon, NotificationBell, UserDoctor } from "../../components/Logo/Style"
import { MontSerratWhite, UserText } from "../../components/Text/Text"
import { ContainerButton } from "../MedicoConsultas/Style"
import { ListComponent } from "../../components/List/List"
import { CardPaciente } from "../../components/CardPaciente/CardPaciente"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"
import { NotificationModal } from "../../components/NotificationModal/NotificationModal"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"


const Consultas = [
    { id: 1, nome: "Gustavo", situacao: "pendente" },
]

export const PacienteConsultas = () => {

    const [ statusLista, setStatusLista ] = useState("pendente");
    const [ statusType, setStatusType ] = useState("Rotina");
    const [ showModalCancel, setShowModalCancel ] = useState(false);
    const [ showModalSchedule, setShowModalSchedule ] = useState(false);
    const [ showModalNotification, setShowModalNotification ] = useState(true);
    
    return(
        <Container>
            <HeaderHome>
            <UserDoctor
            source={require('../../assets/User.png')}
            />

        <InfoContainer>
                 <UserText>Bem-vindo</UserText>
               <MontSerratWhite>Richard Kosta </MontSerratWhite>
            </InfoContainer>

            <NotificationBell
            source={require('../../assets/Bell.png')}
            />
            </HeaderHome>

            <DoctorContainer>
            <CalendarHome/>

            <ContainerButton style={{ marginBottom: 20 }}> 
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

            <ListComponent
            data={Consultas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
            statusLista == item.situacao && (
                <CardPaciente
                situacao={item.situacao}
                onPressCancel={() => setShowModalCancel(true)}
                onPressAppointment={() => setShowModalAppointment(true)}
                />
            )
            }
            showsVerticalScrollIndicator={false}
            />
            
            <AppointmentBox>
                <AppointmentIcon onPressSchedule={() => setShowModalSchedule(true)}
                source={require('../../assets/jam_medical.png')}
                />
            </AppointmentBox>

            <CancelationModal
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />

            <ScheduleModal
            visible={showModalSchedule}
            setShowModalCancel={setShowModalSchedule}
            />

            <NotificationModal
            visible={showModalNotification}
            setShowModalNotification={setShowModalNotification}
            />  

            </DoctorContainer>
        </Container>
        
    )
}