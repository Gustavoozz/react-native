import { Hour } from "../CardPaciente/Style"
import { CalendarIcon, StarIcon } from "../Logo/Style"
import { SubTextQuick } from "../Text/Text"
import { Title } from "../Title/Style"
import { CardContent, ContainerClinicCard, DayInfo } from "./Style"

export const ClinicCard = () => {
    return(
        <ContainerClinicCard>
            <CardContent>

            <Title>Clínica Natureh</Title>
            <SubTextQuick>São Paulo, SP</SubTextQuick>

            </CardContent>

            <OtherContent>
                <AvaliationInfo>
                <StarIcon source={require('../../assets/Star.png')}/>
                <StarText>4,5</StarText>    
                </AvaliationInfo>

                <DayInfo>
                <CalendarIcon source={require('../../assets/Calendar.png')}/>
                <Hour>Seg-Sex</Hour>
                </DayInfo>
            </OtherContent>
            
        </ContainerClinicCard>

    )
}