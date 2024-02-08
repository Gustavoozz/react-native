import styled from "styled-components";

export const Input = styled.TextInput`
    width: 90%;
    border: 2px solid #49B3BA;
    height: 60px;
    border-radius: 5px;
    margin-bottom: 15px;

    padding: 16px;
    background-color: #FAFAFA;
`

export const InputVerify = styled(Input)`
    width: 20%;
    font-size: 40px;
    height: 75px;
    padding: 0px;
    text-align: center;
`

export const InputUser = styled.TextInput`
    width: 90%;
    background-color: #F5F3F3;
    border-radius: 5px;

    height: 54px;
    padding-left: 20px;
`

export const InputCity = styled(InputUser)`
    width: 165px;
`