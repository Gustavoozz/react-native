import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
    return(
        <View>
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />

            <Button
            title="RecuperarSenha"
            onPress={() => navigation.navigate("RecuperarSenha")}
            />

            <Button
            title="VerificarSenha"
            onPress={() => navigation.navigate("VerificarSenha")}
            />

            <Button
            title="RedefinirSenha"
            onPress={() => navigation.navigate("RedefinirSenha")}
            />

            <Button
            title="Cadastro"
            onPress={() => navigation.navigate("Cadastro")}
            />

            <Button
            title="Perfil"
            onPress={() => navigation.navigate("Perfil")}
            />

            <Button
            title="MedicoConsultas"
            onPress={() => navigation.navigate("MedicoConsultas")}
            />
        </View>
    );
}