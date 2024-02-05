
import axios from "axios";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, InputEstado, ScrollForm } from "./styles";
import { useEffect, useState } from "react";   

export function Home() {
    // States - Variáveis:
    const [ cep, setCep ] = useState("");
    const [ logradouro, setLogradouro ] = useState("");
    const [ bairro, setBairro ] = useState("");
    
    const [ cidade, setCidade ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ uf, setUf ] = useState("");

    // Effects - funções:

    useEffect(() => {
        const findApi = async () => {
            if (cep !== "") {
                try {
                    // Via CEP:
                    // const Url = `https://viacep.com.br/ws/`
                    // const response = await axios.get(`${Url}/${cep}/json/`);

                    // Postmon = API que puxa estado.
                    const response = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
                    const data = response.data;
                    if (!data.erro) {
                        setLogradouro(data.logradouro);
                        setBairro(data.bairro);
                        setCidade(data.cidade);
                        setEstado(data.estado_info.nome);
                        setUf(data.estado)
                    } else {
                        alert("CEP Incorreto!");
                    }
                } catch (error) {
                    console.log("Error!!", error);
                }
            }
        };
        findApi();
    }, [cep]);

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
                onChangeText={(tx) => {setBairro(tx)}}
            />

            <BoxInput
                textLabel="Cidade"
                placeHolder="Cidade..."
                fieldValue={cidade}
                onChangeText={(tx) => {setCidade(tx)}}
            />

            <InputEstado>
             <BoxInput
                textLabel="Estado"
                maxLenght={9}
                placeHolder="Estado"
                fieldWidth={60}
                fieldValue={estado}
                onChangeText={(tx) => {setEstado(tx)}}
            />

            <BoxInput
                textLabel="UF"
                maxLenght={9}
                placeHolder="UF"
                fieldWidth={30}
                fieldValue={uf}
                onChangeText={(tx) => {setUf(tx)}}
            />
            </InputEstado>
           

            </ContainerForm>
        </ScrollForm>
    )
}