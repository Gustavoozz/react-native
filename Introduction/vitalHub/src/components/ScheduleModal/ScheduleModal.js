import { Modal } from "react-native"
import { ChooseAppointment, InfoSchedule, ScheduleContent } from "./Style"
import { ButtonTitle, LabelUser, Title } from "../Title/Style"
import { Input, SmallInputSchedule } from "../Input/Style"
import { Button } from "../Button/Style"
import { CancelText } from "../Link/Style"
import { ContainerButton } from "../../screens/MedicoConsultas/Style"
import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment"
import { useState } from "react"
import { BtnAppointmentType } from "../BtnAppointmentType/BtnAppointmentType"

export const ScheduleModal = ({
    visible,
    setShowModalSchedule,
    ...rest
}) => {

    const [statusLista, setStatusLista] = useState("pendente");
    const [statusType, setStatusType ] = useState("Rotina")

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ScheduleContent>
            <InfoSchedule>

            <Title>Agendar consulta</Title>


            <LabelUser>Informe o nível da consulta:</LabelUser>
            <ChooseAppointment> 

           <BtnAppointmentType style={{ width: '200', borderColor: '#60BFC5' }}
            textButton={"Rotina"}
            clickButton={statusType === "Rotina"}
            onPress={() => setStatusType("Rotina")}
            />

            <BtnAppointmentType
            textButton={"Exame"}
            clickButton={statusType === "exame"}
            onPress={() => setStatusType("exame")}
            />

            <BtnAppointmentType
            textButton={"Urgência"}
            clickButton={statusType === "urgencia"}
            onPress={() => setStatusType("urgencia")}
            /> 
    
            </ChooseAppointment>
            

            <LabelUser>Informe a localização desejada:</LabelUser>
            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold', width: '100%' }}
            placeholder="Informe a localização"
            placeholderTextColor="#34898F"
            />

            <Button style={{ width: '100%' }}>
            <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <CancelText onPress={() => setShowModalSchedule(false)}>Cancelar</CancelText>


            </InfoSchedule>
            </ScheduleContent>
        </Modal>
            
        
    )
}
