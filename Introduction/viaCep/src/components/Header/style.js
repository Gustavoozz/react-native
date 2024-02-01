import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    width: 100%;

    border-radius: 0px 0px 15px 15px;
    elevation: 5;
    
    shadowColor: '#000';
    shadowOpacity: 0.1;
    shadowRadius: 15;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
`

export const TextHeader = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 24px;
    color: #333E33;
`