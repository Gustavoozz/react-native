import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./styles";


export function Home() {
    return(
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                textLabel='Informar CEP'
                placeHolder='CEP...'
                keyType='numeric'
                maxLength={9}
                />
            </ContainerForm>
        </ScrollForm>
    )
}