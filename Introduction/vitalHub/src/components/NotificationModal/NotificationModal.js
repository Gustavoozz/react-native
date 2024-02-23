import { Modal } from "react-native"
import { ModalDoctorPhoto } from "../Logo/Style"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { CancelText } from "../Link/Style"

export const NotificationModal = ({
    visible,
    setShowModalNotification,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <ModalDoctorPhoto
                    source={{ uri: 'https://github.com/Gustavoozz.png '}}
                    />
                    <Title style={{ marginTop: 20 }}>Dr. Gustavo</Title>
                    <ModalText style={{ color: '#5F5C6B', fontSize: 14 }}>Cliníco geral    CRM-15286</ModalText>

                    <ModalButton>
                        <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                    </ModalButton>

                    <CancelText onPress={() => setShowModalNotification(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
