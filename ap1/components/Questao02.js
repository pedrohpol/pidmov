import {React, useState, useEffect, useRef} from "react";
import {Text, Button, View, SafeAreaView, StyleSheet, TextInput} from "react-native";

const Questao02 = () => {

    const [res, setRes] = useState();
    const num1 = useRef(null);
    const num2 = useRef(null);
    
    return (
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <TextInput
                    style = {styles.input}
                    ref = {num1}
                    type = "number"
                />
                <TextInput
                    style = {styles.input}
                    ref = {num2}
                    keyboardType = "numeric"
                />
            </View> 
            <View style = {styles.buttons}>
                <View style = {styles.button}>
                    <Button
                        title = "+"
                        onPress = {() => {
                            setRes(Number(num1.current.value) + Number(num2.current.value));
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "-"
                        onPress = {() => {
                            setRes(Number(num1.current.value) - Number(num2.current.value));
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "*"
                        onPress = {() => {
                            setRes(Number(num1.current.value) * Number(num2.current.value));
                        }}
                    />
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "/"
                        onPress = {() => {
                            setRes(Number(num1.current.value) / Number(num2.current.value));
                        }}
                    />
                </View>
            </View>

            <Text style = {styles.res}>Resultado: {res}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    input: {
        backgroundColor: "white",
        height: 36,
        marginRight: 8,
        marginBottom: 8,
        width: 80,
        borderWidth: 1,
        padding: 10,
        flexDirection: "row"
    },
    buttons: {
        flexDirection: "row"
    },
    button: {
        width: 36,
        marginBottom: 8,
        marginRight: 8
    },
    res: {
        fontSize: 16,
        color: "darkslategrey",
    }
});

export default Questao02;
