import styled from "styled-components";
import { SubTextQuick } from "../Text/Text";

export const ContainerClinicCard = styled.View`
    flex: 1
    align-items: center;
    border: 1px solid red;
    width: 100%;
`

export const CardContent = styled.TouchableHighlight`
    width: 90%;
    elevation: 10;
    border: 1px solid red;
`

export const DayInfo = styled.TouchableOpacity`
    background-color: #E8FCFD;
    width: 70%;
    height: 30px;

    border-radius: 5px;
    flex-direction: row;
    margin-top: 7px;

    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const StarText = styled(SubTextQuick)`
    color: #F9A620;
`