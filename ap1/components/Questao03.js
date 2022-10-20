import {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const Questao03 = () => {
    const [id, setId] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(
        () => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (responseJson) => {
                    for (let i = 0; i < 10; i++) {
                        pokemons.splice(i);
                        setPokemons(pokemons => [...pokemons, responseJson.results[i].name]);
                    }
                }
            )
        }, [id]
    )

    return (
        <View>
            <View style = {styles.buttons}>
                <View style = {styles.button}>
                    <Button
                        title = "-10"
                        onPress = {
                            () => {
                                if (id > 0) setId(id - 10)
                            }
                        }
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "+10"
                        onPress = {
                            () => {
                                setId(id + 10);
                            }
                        }
                    />
                </View>
            </View>
            
            <ul>
                {pokemons.map((pokemon) => <li>{pokemon}</li>)}
            </ul>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row"
    },
    button: {
        width: 80,
        marginBottom: 8,
        marginRight: 8
    }
});

export default Questao03;
