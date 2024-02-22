import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"

export const ClinicSelect = () => {
    return(
        <Container>
            <Title style={{ marginTop: 30 }}>Selecionar clínica</Title>

           <ClinicCard />
        </Container>
    )
}