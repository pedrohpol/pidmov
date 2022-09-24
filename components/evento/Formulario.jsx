import {StyleSheet, View, Button, TextInput, Text} from "react-native";

const Formulario = () => {
    return (
        <View style = {styles.formulario}>
            <Text>Entrada de texto com botão</Text>
            <TextInput placeholder = "Digite um texto"
                style = {styles.input}
            />
            <View>
                <Button title = "Pegar texto"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },

    formulario: {
        width: 500
    }
})

export default Formulario;
