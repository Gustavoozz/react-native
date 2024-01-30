import styled from "styled-components";

export const ButtonIncrement = styled.TouchableOpacity`
    background-color: green;
    width: 50%;
    height: 30px;
    align-items: center;
    border-radius: 8px;
`

export const ButtonDecrement = styled(ButtonIncrement)`
    background-color: red;
`