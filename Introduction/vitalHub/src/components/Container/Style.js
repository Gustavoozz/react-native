import styled from "styled-components";

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

export const MedicoContainer = styled.View`
    width: 100%;
    height: 144px;
    background-color: linear-gradient(to bottom, #60BFC5, #496BBA);
    border: 1px solid black;
    border-radius: 0px 0px 15px 15px;
`