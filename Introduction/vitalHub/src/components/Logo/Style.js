import styled from "styled-components";

export const Logo = styled.Image`
    width: 70%;
    height: 120px;
    margin: 40px 0px;
`

export const ArrowIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    margin-right: 340px;
    top: 40px;
`

export const UserDoctor = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;

    margin-top: 30px;
`

export const NotificationBell = styled.Image`
    width: 18px;
    height: 18px;
    margin-left: 160px;
    margin-top: 60px;
`

export const Clock = styled.Image`
    width: 14px;
    height: 14px;
    color: ${(props) => props.situacao == "pendente" ? "#49B3BA" : "#4E4B59"};
`
