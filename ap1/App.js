import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import Questao01 from "./components/Questao01";
import Questao01A from "./components/Questao01A";
import Questao01B from "./components/Questao01B";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import Questao04 from "./components/Questao04";
import Questao05 from "./components/Questao05";

export default function App() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.questao}>Questão 01</Text>
            <Questao01 style = {styles.questao}>
                <Text style = {styles.questaosub}>Questão 01A: Dados</Text>
                <Questao01A
                    nome = "Pedro"
                    sobrenome = "Oliveira"
                    curso = "Design Digital"
                />
                <Text style = {styles.questaosub}>Questão 01B: Disciplinas</Text>
                <Questao01B
                    disciplinas = {[
                        "CDPROD", "COMVIS",
                        "DIRART", "PIDMOV",
                        "PSIPER", "TESDES",
                    ]}
                />
            </Questao01>
            <Text style = {styles.questao}>Questão 02</Text>
            <Questao02/>

            <Text style = {styles.questao}>Questão 03</Text>
            <Questao03/>

            <Text style = {styles.questao}>Questão 04</Text>
            <Questao04/>

            <Text style = {styles.questao}>Questão 05</Text>
            <Questao05/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "ghostwhite",
        width: "100%",
        height: "100%",
        color: "darkslategrey",
        alignSelf: "center",
        padding: 32,
    },
    questao: {
        color: "darkslategrey",
        fontSize: 32,
        fontWeight: "bold",
        paddingBottom: 16,
        textAlign: "left",
    },
    questaosub: {
        color: "darkslategrey",
        fontSize: 24,
        paddingTop: 8,
        paddingBottom: 8
    },
});
