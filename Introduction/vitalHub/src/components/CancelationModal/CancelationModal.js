import { Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/Style"
import { ModalButton, ModalContent, ModalText, PatientModal } from "./Style"
import { CancelText } from "../Link/Style"

export const CancelationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <Title>Cancelar consulta</Title>
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ModalButton>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <CancelText onPress={() => setShowModalCancel(false)}>Cancelar</CancelText>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}