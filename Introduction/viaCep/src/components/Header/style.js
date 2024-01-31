import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    width: 100%;

    border-radius: 0px 0px 15px 15px;
    elevation: 5;
    shadowColor: '#000';
    shadowOpacity: 0.1;
    shadowRadius: 5;
`

export const HeaderContent = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    text-align: center;
`

export const TextHeader = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 24px;
    color: #333E33;

    text-align: center;
`