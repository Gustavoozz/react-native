
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, InputEstado, ScrollForm } from "./styles";
import { useState } from "react";   

export function Home() {
    // States - Variáveis:
    const [ cep, setCep ] = useState("09405560");
    const [ logradouro, setLogradouro ] = useState("aaaaaaaa");
    const [ bairro, setBairro ] = useState("");
    
    const [ cidade, setCidade ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ uf, setUf ] = useState("");
  
    // Effects - funções:
    return(
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                textLabel='Informar CEP:'
                placeHolder='CEP...'
                editable={true}
                keyType='numeric'
                maxLength={9}
                fieldValue={cep}
                onChangeText={tx => setCep(tx)}
                />

            <BoxInput
                textLabel="Logradouro"
                placeHolder="Logradouro..."
                fieldValue={logradouro}
                onChangeText={(tx) => { setLogradouro(tx) }}
            />

            <BoxInput
                textLabel="Bairro"
                placeHolder="Bairro..."
                fieldValue={bairro}
            />

            <BoxInput
                textLabel="Cidade"
                placeHolder="Cidade..."
                fieldValue={cidade}
            />

            <InputEstado>
             <BoxInput
                textLabel="Estado"
                maxLenght={9}
                placeHolder="Estado"
                fieldWidth={60}
                fieldValue={estado}
            />

            <BoxInput
                textLabel="UF"
                maxLenght={9}
                placeHolder="UF"
                fieldWidth={30}
                fieldValue={uf}
            />
            </InputEstado>
           

            </ContainerForm>
        </ScrollForm>
    )
}