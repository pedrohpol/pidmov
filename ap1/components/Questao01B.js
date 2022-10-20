import React from "react";
import {View, Text} from "react-native";
import { Children } from "react/cjs/react.production.min";

const Questao01B = ({disciplinas}) => {
    return (
        <View>
            <ul>
                {disciplinas.map((disciplina) => <li>{disciplina}</li>)}
            </ul>
        </View>
    )
}

export default Questao01B;
