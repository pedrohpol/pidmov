import {View, Text, StyleSheet} from "react-native";

const VariosEstilos = () => {
    return (
        <View>
            <Text style = {estilos.vermelho}>Somente vermelho</Text>
            <Text style = {estilos.azulGrande}>Somente azul grande</Text>
            <Text style = {[estilos.vermelho, estilos.azulGrande]}>euae</Text>
        </View>
    )
}

const estilos = StyleSheet.create (
    {
        vermelho: {
            color: "red"
        },
        azulGrande: {
            color: "blue",
            fontWeight: "bold",
            fontSize: 30
        }
    }
)

export default VariosEstilos;
