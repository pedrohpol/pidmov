import {View, Text, StyleSheet} from "react-native";

const Questao01A = ({nome, sobrenome, curso}) =>
    <View>
        <Text style = {styles.texto}>Nome: {nome}</Text>   
        <Text style = {styles.texto}>Sobrenome: {sobrenome}</Text>
        <Text style = {styles.texto}>Curso: {curso}</Text>
    </View>

const styles = StyleSheet.create({
    texto: {
        color: "darkslategrey",
        fontSize: 16
    }
})

export default Questao01A;
