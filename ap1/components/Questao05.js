import {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const Questao05 = () => {
    const [maxMin, setMaxMin] = useState(true);
    const [pais, setPais] = useState();
    const [reg, setReg] = useState("africa");

    useEffect(
        () => {
            fetch(`https://restcountries.com/v2/region/${reg}`)
            .then(
                (response) => {
                    return response.json();
                }
            ).then(
                (responseJson) => {
                    let popTotal = [];
                    let popRes;

                    responseJson.map(
                        (pop) => popTotal.push(pop.population)
                    )
                    
                    maxMin
                    ? popRes = Math.max(...popTotal)
                    : popRes = Math.min(...popTotal)
                    
                    for (let i = 0; i < popTotal.length; i++) {
                        if (responseJson[i].population == popRes) {
                            setPais(responseJson[i].name)
                        }
                    }
                }
            )
        }
    )

    return (
        <View>
            <View style = {styles.buttons}>
                <View style = {styles.button}>
                    <Button
                        title = "Maior pop. América"
                        onPress = {
                            () => {
                                setReg("americas");
                                setMaxMin(true);
                            }
                        }
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "Menor pop. Ásia"
                        onPress = {
                            () => {
                                setReg("asia");
                                setMaxMin(false);
                            }
                        }
                    />
                </View>
            </View>

            <Text>
                País {maxMin ? "mais" : "menos"} populoso da {
                reg.charAt(0).toUpperCase() + reg.slice(1)}: {pais}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row"
    },
    button: {
        width: 168,
        marginRight: 8,
        marginBottom: 8
    }
});

export default Questao05;
