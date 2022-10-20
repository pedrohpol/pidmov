import {useState, useEffect} from "react";
import {View, Text} from "react-native";

const Questao04 = () => {
    const [pais, setPais] = useState();

    useEffect(
        () => {
            fetch("https://restcountries.com/v2/region/africa")
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (responseJson) => {
                    let popTotal = [];

                    responseJson.map(
                        (pop) => popTotal.push(pop.population)
                    )

                    let popMax = Math.max(...popTotal);

                    for(let i = 0; i < popTotal.length; i++){
                        if (responseJson[i].population == popMax) {
                            setPais(responseJson[i].name);
                        }
                    }
                }
            )
        }, []
    )

    return (
        <View>
            <Text>País mais populoso da África: {pais}</Text>
        </View>
    )
}

export default Questao04;
