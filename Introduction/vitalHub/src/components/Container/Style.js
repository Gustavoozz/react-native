import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: white;
`

export const ContainerUser = styled.ScrollView`
    flex: 1;
    background-color: white;
`

export const InformationContent = styled.View`
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 70px;
   
    background-color: #FFFFFF;
    border: 1px solid white;

    elevation: 10;
    width: 80%;
    border-radius: 5px;

    height: 120px;
`

export const ContentProntuario = styled.View`
    align-items: center;
    justify-content: center;
    width: 80%;
    bottom: 30px;
`

export const PhotoContainer = styled.View`
    width: 100%;
    align-items: center;
    height: 330px;
`

export const CityContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;
`

export const HeaderHome = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: {x: -0.03, y: 1.5},
    end: {x: 1, y:0}
   })`
   width: 100%;
   border-radius: 0px 0px 15px 15px;
   width: 100%;
   height: 144px;
   padding: 15px;
   flex-direction: row;
   `

export const InfoContainer = styled.View`
    padding: 0px;
    justify-content: center;
    padding: 5px;

    width: 30%;
    height: 30%;
    margin-left: 10px;
    margin-top: 50px;
`

export const ImageContainer = styled.View`
    margin-left: 20px;
    width: 60px;
    margin-top: 50px;
    border: 1px solid red;
`

export const DoctorContainer = styled.View`
   flex: 1;
   width: 100%;
`

